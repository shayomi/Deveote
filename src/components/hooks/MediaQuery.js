import React from "react";
import { useEffect, useState } from "react";

export const useMediaQuery = query => {
  const mediaMatch = window.matchMedia(query);
  const [matches, setMatches] = useState(mediaMatch);

  useEffect(() => {
    const handler = e => setMatches(e.matches);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  });

  return matches;
};
