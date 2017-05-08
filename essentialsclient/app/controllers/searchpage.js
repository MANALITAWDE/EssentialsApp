import Ember from 'ember';

export default Ember.Controller.extend({
  search: Ember.computed.alias('model.search'),
  actions: {
    displayres() {
      var self = this;
      var re = this.get('search');
      var food = re.term;
      var location = re.term;
      //console.log("Food" + food);
      // console.log(re.location);
      //self.transitionToRoute('search', {queryParams: {re}});
      self.send('input', re);
    }
  }
});
