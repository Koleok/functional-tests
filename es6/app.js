import deps from './ioc';
import settings from './settings.dev';
import helpersFactory from './modules/helpers';

const {
  _
} = deps;

const helpers = helpersFactory({
  ...deps
});
