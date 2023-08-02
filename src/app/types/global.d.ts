declare module "*.png" {
    const value: any;
    export default value;
}
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
    import React from "react";
    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}