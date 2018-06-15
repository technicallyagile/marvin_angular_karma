(function() {
  'use strict';

  //Creating the module and factory we referenced in the beforeEach blocks in our test file
  angular.module('api.marvin', [])
  .factory('Marvin', function() {
  	
  	var Marvin = {};

  	Marvin.talk = function(statement) {
  		if (statement.endsWith('?'))
  			return "I don't care.";
  		else
    		return "Whatever.";
    }

    	return Marvin;
  });
})();