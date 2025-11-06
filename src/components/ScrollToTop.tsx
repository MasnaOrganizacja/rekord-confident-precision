import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when route changes
    // Multiple approaches to ensure it works with Lenis and other smooth scroll libraries
    
    // 1. Immediate scroll
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // 2. Try to stop any ongoing Lenis animations
    const lenisInstance = (window as any).lenis;
    if (lenisInstance && lenisInstance.scrollTo) {
      lenisInstance.scrollTo(0, { immediate: true });
    }
    
    // 3. Force scroll after DOM updates
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });
    
    // 4. Additional fallback
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      // Try Lenis again if available
      if (lenisInstance && lenisInstance.scrollTo) {
        lenisInstance.scrollTo(0, { immediate: true });
      }
    }, 50);
    
    // 5. Final check
    setTimeout(() => {
      if (window.scrollY > 0) {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }
    }, 200);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
