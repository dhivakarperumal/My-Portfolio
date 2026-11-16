import { useEffect } from "react";

const ScrollToTop = () => {
  useEffect(() => {
    const scrollToHash = () => {
      const target = window.location.hash
        ? document.getElementById(window.location.hash.slice(1))
        : null;
      if (target) {
        target.scrollIntoView({ behavior: "instant" });
      } else if (!window.location.hash) {
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    };

    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return null;
};

export default ScrollToTop;
