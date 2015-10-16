/**
 * @file Inject Application level services into major Ember's classes.
 */
import Ember from 'ember';
import ResourceManager from 'facember/services/resource-manager';
import ApiManager from 'facember/services/api-manager-rest';

/**
 * @param container
 * @param application
 */
function initialize (container, application) {
  var resourceManagerService = ResourceManager.create();
  var apiManagerService = ApiManager.create();

  // A factory must be registered before it can be injected
  application.register('resourceManager:app', resourceManagerService, {instantiate: false});

  application.inject('controller', 'resourceManager', 'resourceManager:app');

  application.inject('route', 'resourceManager', 'resourceManager:app');

  application.inject('component', 'resourceManager', 'resourceManager:app');

  resourceManagerService.set('apiManager', apiManagerService);
}

export default {
  name: 'app-injections',
  initialize: initialize
};
