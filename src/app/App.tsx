import React, {useCallback, useEffect, useLayoutEffect, useState} from "react";
import {useLayoutRender} from "./context/RenderUse";
import {RenderContextProvider} from "./context/RenderContextProvider";
import exp from "constants";
import Navbar from "./components/Navbar/Navbar";
import {Layout} from "./components/Layout/Layout";

// export function DynamicBlock() {
//     const [src, setSrc] = useState(
//         () =>
//             "https://hsto.org/webt/ow/wu/bm/owwubmq_kdfpalevoql9vhhryl8.jpeg" +
//             "?t=" +
//             Math.random().toString().substring(2)
//     );
//     const onRender = useLayoutRender();
//
//     const onLoadComplite = useCallback(
//         (section:any) => {
//             if (section.target.complete) {
//                 onRender();
//             }
//         },
//         [onRender]
//     );
//
//     return <section onLoad={onLoadComplite} onError={onRender}>
//         Секция 4
//     </section>;
// }

export function App() {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const handleMenuClick = () => {
        setIsOpenMenu(prev => !prev);
    }

    return (
        <div className='app'>
            <Navbar isOpenMenu={isOpenMenu} handleMenuClick={handleMenuClick}/>
            <Layout/>
        </div>

    )
}