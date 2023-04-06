import { useState, useEffect } from 'react';
import {MediaQuery} from '../types/mediaQuery.types';

const useMediaQuery = (query:string) => {
    const queryToMatch = MediaQuery[query] || query;
    const [matches, setMatches] = useState(window.matchMedia(queryToMatch).matches);

    useEffect(() => {
        if (typeof window !== 'object') return;
        if (!window.matchMedia) return;

        const media = window.matchMedia(queryToMatch);

        if (media.matches !== matches) setMatches(media.matches);

        const listener = () => setMatches(media.matches);
        
        media.addEventListener
          ? media.addEventListener("change", listener)
          : media.addListener(listener);
        return () => media.removeEventListener
          ? media.removeEventListener("change", listener)
          : media.removeListener(listener);
      }, [matches, queryToMatch]);
    
      return matches;
}

export default useMediaQuery;