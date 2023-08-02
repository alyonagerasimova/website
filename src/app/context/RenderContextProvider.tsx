import {useCallback, useRef, useState} from "react";
import {RenderContext} from "./RenderContext";

export const RenderContextProvider = (props: any) => {
    const {onRender, children} = props;
    const countInit = useRef(0);
    const countRender = useRef(0);
    const onInitCallback = useCallback(() => {
        countInit.current++;
    }, []);

    const onRenderCallback = useCallback(() => {
        countRender.current++;
        // если countInit совпадает с countRender то вызываем onRender
        if (countInit.current === countRender.current) {
            if (onRender) {
                onRender();
            }
        }
    }, [onRender]);

    // оборачиваем value через useState чтобы ссылка была постоянной
    const [value] = useState(() => ({
        onInit: onInitCallback,
        onRender: onRenderCallback
    }));

    return (
        <RenderContext.Provider value={value}>
            {children}
        </RenderContext.Provider>
    )
}