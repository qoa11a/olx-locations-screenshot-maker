import CDP from 'chrome-remote-interface';

import fs from 'fs';

import { launchChrome } from './launchChrome.js';
import {
  imageFormat, imagePath,
  locationSearchInputSelector,
  OLX_URL,
} from './constants.js';
import { openImage } from './openImage.js';
import { askToOpenImage } from './askToOpenImage.js';

const makeOlxLocationsScreenshot = async (): Promise<void> => {
  const chrome = await launchChrome();
  const client = await CDP();
  const { Page, Runtime } = client;

  await Page.enable();
  await Page.navigate({ url: OLX_URL });
  await Page.loadEventFired();

  await Runtime.evaluate({
    expression: `document.querySelector('${locationSearchInputSelector}').click()`,
  });

  const { data } = await Page.captureScreenshot({ format: imageFormat });
  fs.writeFileSync(imagePath, Buffer.from(data, 'base64'));

  const toOpenImage = await askToOpenImage();
  toOpenImage && await openImage();

  await client.close();
  chrome.kill();
};

await makeOlxLocationsScreenshot();
