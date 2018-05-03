import Controller from '@ember/controller';
import { filterBy } from '@ember/object/computed';
import log from '../helpers/log';

export default Controller.extend({
  draftPosts: filterBy("model","rating","draft"),
  readyPosts: filterBy("model","rating","ready"),
  unclassifiedPosts: filterBy("model","rating","unclassified"),

  /*objectDropped: function() {
    log("posts controller objectDropped");
  },*/

  objectDroppedc: function() {
    log("posts controller objectDroppedc");
  },

  objectDropped: function() {
    log("posts controller objectDropped method");
  },


  actions: {
    resetRatings: function() {
      this.get('model').forEach(function(post) {
        post.set('rating','unclassified');
        post.save();
      });
    },

    objectDropped: function(ops) {
      var bin = ops.bin;
      var obj = ops.obj;
      log("posts controller action objectDropped obj " + obj.get('title') + " bin " + bin.get('name'));
    }
  }
});
