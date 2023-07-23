import {
  launch,
  LaunchedChrome,
  Options as ChromeLaunchOptions,
} from 'chrome-launcher';

export const launchChrome = async (): Promise<LaunchedChrome> => {
  const options: ChromeLaunchOptions = {
    port: 9222,
    chromeFlags: ['--window-size=1920,1080', '--headless'],
  };

  return await launch(options);
};
