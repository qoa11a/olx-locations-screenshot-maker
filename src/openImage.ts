import fs from 'fs';
import open from 'open';

import { imagePath } from './constants.js';

export const openImage = async (): Promise<void> => {
  fs.readFile(imagePath, async (error) => {
    if (error) {
      console.error('Error reading the image: ', error);
      return;
    }

    await open(imagePath);
  });
};
