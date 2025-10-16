import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-MXL5PY3LKM';
    document.head.appendChild(script);

    // Initialize dataLayer and gtag function
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    window.gtag('js', new Date());
    window.gtag('config', 'G-MXL5PY3LKM');

    // Cleanup function
    return () => {
      document.head.removeChild(script);
      delete window.dataLayer;
      delete window.gtag;
    };
  }, []);

  // Track page views on route changes
  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-MXL5PY3LKM', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null; // This component doesn't render anything
};

export default GoogleAnalytics;
