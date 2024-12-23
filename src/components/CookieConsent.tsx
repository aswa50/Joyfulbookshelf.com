import React, { useState, useEffect } from 'react';

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      setShowConsent(true);
    } else {
      // If user has consented, initialize analytics
      initializeAnalytics();
    }
  }, []);

  const initializeAnalytics = () => {
    // Initialize Google Analytics in consent mode
    window.gtag('consent', 'update', {
      'analytics_storage': 'granted'
    });
  };

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    initializeAnalytics();
    setShowConsent(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'false');
    window.gtag('consent', 'update', {
      'analytics_storage': 'denied'
    });
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-700">
          We use cookies to analyze our website traffic and improve your experience.
          Your privacy matters to us. You can choose to accept or decline cookies.
        </div>
        <div className="flex gap-3">
          <button
            onClick={handleDecline}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
} 