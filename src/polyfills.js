/* eslint-disable */

require('es6-promise').polyfill();
require('isomorphic-fetch');

if (!String.prototype.startsWith) {
  String.prototype.startsWith = function(searchString, position) {
    position = position || 0;
    return this.indexOf(searchString, position) === position;
  };
}
