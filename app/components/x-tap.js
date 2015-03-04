import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['x-tap'],

  tap: function(){
    console.log('tapped');
    return false;
  },
  // gestureAllow : ['tap'],

  // gestureExclude : ['tap'],

  actions: {
    tapAction: function() {
      console.log('tapAction');
    },

    tapAction2: function() {
      console.log('tapAction2');

    }
  }

});
