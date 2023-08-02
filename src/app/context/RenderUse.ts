import { useCallback, useContext, useLayoutEffect, useRef } from "react";
import {RenderContext} from "./RenderContext";

export function useLayoutRender() {
    const { onInit, onRender } = useContext(RenderContext);

    useLayoutEffect(() => onInit(), [onInit]);

    const render = useRef(false);

    const onCallbackRender = useCallback(() => {
        // простая защита от повторного вызова onRender
        if (render.current === false) {
            render.current = true;
            onRender();
        }
    }, [onRender]);

    return () => onCallbackRender();
}