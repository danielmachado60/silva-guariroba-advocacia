import { useEffect } from 'react';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

const GoogleAnalytics = () => {
  useEffect(() => {
    // Only run on client-side
    if (typeof window === 'undefined') return;

    // Skip if already initialized
    if (window.dataLayer && window.gtag) return;

    // Create dataLayer if it doesn't exist
    window.dataLayer = window.dataLayer || [];

    // Define the gtag function
    function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments);
    }

    // Initialize gtag
    window.gtag = gtag;
    window.gtag('js', new Date());
    window.gtag('config', 'G-MXL5PY3LKM');

    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-MXL5PY3LKM';
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return null; // This component doesn't render anything
};

export default GoogleAnalytics;
