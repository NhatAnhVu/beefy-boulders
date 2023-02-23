import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = (props) => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash === '') {
      window.scrollTo(0, 0);
    }
    else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]); 

  return <>{props.children}</>
};

export default ScrollToTop;