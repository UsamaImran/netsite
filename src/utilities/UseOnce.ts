import { useRef } from "react";

export const useOnce = (callback:()=>(void | (() => void | undefined))) => {
    const hasRendered = useRef(false);
    if (!hasRendered.current) {
      hasRendered.current = true;
      callback()
    }
  }