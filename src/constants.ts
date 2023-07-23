import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export const imageFormat = 'jpeg';
const imageName = `olx_location.${imageFormat}`;

export const OLX_URL = 'https://olx.ua/';
export const locationSearchInputSelector = 'input[data-cy="homepage_input_locationsearch"]';
export const imagePath = join(__dirname, imageName);
