import React, { useCallback, useEffect, useLayoutEffect, useState } from "react";
import {useLayoutRender} from "./context/RenderUse";
import {RenderContextProvider} from "./context/RenderContextProvider";
import exp from "constants";

export function DynamicBlock() {
    const [src, setSrc] = useState(
        () =>
            "https://hsto.org/webt/ow/wu/bm/owwubmq_kdfpalevoql9vhhryl8.jpeg" +
            "?t=" +
            Math.random().toString().substring(2)
    );
    const onRender = useLayoutRender();

    const onLoadComplite = useCallback(
        (section:any) => {
            if (section.target.complete) {
                onRender();
            }
        },
        [onRender]
    );

    return <section onLoad={onLoadComplite} onError={onRender}>
        Секция 4
    </section>;
}

export default function App() {

}