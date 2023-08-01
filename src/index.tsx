import { createRoot } from 'react-dom/client';
import {Layout} from "./app/components/Layout/Layout";
import './app/styles/index.scss';


const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<Layout />);