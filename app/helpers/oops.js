import Ember from 'ember';

export function oops([p]) {
  return p+100;
}

export default Ember.Helper.helper(oops);
