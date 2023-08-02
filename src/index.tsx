import { createRoot } from 'react-dom/client';
import {Layout} from "./app/components/Layout/Layout";
import './app/styles/index.scss';
import App from "./app/App";


const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<Layout />);