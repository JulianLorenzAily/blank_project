import { useState, useEffect } from 'react';
import { isMobile, isTablet, isDesktop, browserName } from 'react-device-detect';

interface DeviceInfo {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isPortrait: boolean;
  browserName: string;
  screenWidth: number;
  screenHeight: number;
}

export const useDeviceDetect = (): DeviceInfo => {
  const [isPortrait, setIsPortrait] = useState<boolean>(
    window.matchMedia('(orientation: portrait)').matches
  );
  
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  
  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    const handleOrientationChange = (e: MediaQueryListEvent) => {
      setIsPortrait(e.matches);
    };
    
    const portraitMediaQuery = window.matchMedia('(orientation: portrait)');
    portraitMediaQuery.addEventListener('change', handleOrientationChange);
    window.addEventListener('resize', handleResize);
    
    return () => {
      portraitMediaQuery.removeEventListener('change', handleOrientationChange);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return {
    isMobile,
    isTablet,
    isDesktop,
    isPortrait,
    browserName,
    screenWidth: screenSize.width,
    screenHeight: screenSize.height
  };
};

export default useDeviceDetect; 