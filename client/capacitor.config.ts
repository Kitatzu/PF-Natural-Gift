import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.naturalgift.app',
  appName: 'naturalGift',
  webDir: 'build',
  "plugins": {
    "SplashScreen": {
      "launchShowDuration": 3000,
      "launchAutoHide": true,
      "backgroundColor": "#ffffffff",
      "androidSplashResourceName": "splash",
      "androidScaleType": "CENTER_CROP",
      "androidSpinnerStyle": "large",
      "iosSpinnerStyle": "small",
      "spinnerColor": "#999999",
      "showSpinner": true,
      "splashFullScreen": true,
      "splashImmersive": true
    }
  },
  bundledWebRuntime: false
};

export default config;
