import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'poc-merci-le-vent-mod',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
