'use strict'

function Airport() {
  this._runway = []
}

Airport.prototype.planes = function () {
  return this._runway
}
Airport.prototype.clearForLanding = function(plane){
  this._runway.push(plane)
}