import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTopOnNavigation() {
  const { pathname } = useLocation();

  useEffect(() => {
    const delay = 1;
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [pathname]);

  return null;
}

export default ScrollToTopOnNavigation;
