import { typescript } from '@betterer/typescript';

export default {
  'stricter compilation': () =>
    typescript('./tsconfig.json').include('**/*.{ts,tsx}')
};