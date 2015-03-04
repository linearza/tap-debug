import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['x-tap'],

  tap: function(){
    // console.log('Normal tap gesture is detected.');
    // return false;
  },

  actions: {

    implicitTap: function() {
      console.log('Action triggered by implicit/default tab gesture.');
    },

    explicitTap: function() {
      console.log('Explicit tap gesture required to trigger action.');
    }
    
  }

});
