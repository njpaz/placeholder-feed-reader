import { discoverEmberDataModels } from 'ember-cli-mirage';
import { createServer } from 'miragejs';

export default function (config) {
  let finalConfig = {
    ...config,
    models: { ...discoverEmberDataModels(), ...config.models },
    routes
  };

  return createServer(finalConfig);
}

function routes() {
  this.namespace = '/api';

  this.get('/feeds');

  this.get('/feeds/:id');
}
