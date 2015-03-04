/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'tap-debug',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
  
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };


  ENV.mobileTouch = {

    //which gesture families to allow, will create a recognizer for each
    //a minimum of tap must be present, turning off unused gestures can help performance
    use : ['tap', 'press', 'pan', 'swipe'],

    //whether to alias "press" to tap within Ember's eventing
    // very useful if you don't need to distinguish and don't want to lose
    // taps from people who tap longer
    alwaysTapOnPress : false,

    //whether links and actions should trigger tap behavior on press as well
    // if eventName or "on" has not been explicitly defined
    // currently does not work with actions
    defaultTapOnPress : true,

    //passed to new Hammer.Manager(element, options)
    options : {
       domEvents : true
    },

    //passed to the respective recognizer
    tune : {
      tap : { time : 20, threshold : 9 }, //Hammer default is 250 / 2
      press : { time : 251, threshold : 9 }, //Hammer default is 500 / 5
      swipe : { velocity : 0.3, threshold : 25 },
      pan : {},
      pinch : {},
      rotate : {}
    }

  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
