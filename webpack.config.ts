import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import {Configuration as DevServerConfiguration} from "webpack-dev-server";
import {BuildEnv, BuildOptions} from "./config/types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port,
        open: true
    }
}

export default (env: BuildEnv) => {

    const mode = env.mode || "development";
    const isDev = mode === "development";
    const PORT = env.port || 3000;

    const config: webpack.Configuration = {
        mode: "development",
        entry: path.resolve(__dirname, "src", "index.tsx"),
        output: {
            filename: "[name].[contenthash].js",
            path: path.resolve(__dirname, "build"),
            clean: true
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, "public", "index.html")
            }),
            new webpack.ProgressPlugin(),
            new MiniCssExtractPlugin({
                filename: "css/[name].[contenthash:8].css",
                chunkFilename: "css/[name].[contenthash:8].css"
            })
        ],
        module: {
            rules: [
                {
                    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                        },
                    ],
                },
                {
                    test: /\.svg$/,
                    use: ['@svgr/webpack'],
                },
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        isDev ? "style-loader" : MiniCssExtractPlugin.loader,
                        "css-loader",
                        "sass-loader",
                    ],
                },

            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer({mode, isDev, port: PORT}) : undefined,
        optimization: {
            runtimeChunk: 'single',
        },
    };

    return config;
};