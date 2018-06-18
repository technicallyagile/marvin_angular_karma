(function() {
  'use strict';

  //Creating the module and factory we referenced in the beforeEach blocks in our test file
  angular.module('api.marvin', [])
  .factory('Marvin', function() {
  	
  	var Marvin = {};

  	Marvin.talk = function(statement) {
  		if (!statement)
  			return "Fine! Waste My Time!";
  		if (statement.toUpperCase() === statement)
  			return "I'm right here, you know.";
  		if (statement.endsWith('?'))
  			return "I don't care.";
  		else
    		return "Whatever.";
    }

    	return Marvin;
  });
})();