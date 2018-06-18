(function() {
  'use strict';

  //Creating the module and factory we referenced in the beforeEach blocks in our test file
  angular.module('api.marvin', [])
  .factory('Marvin', function() {
  	
  	var Marvin = {};

  	Marvin.talk = function(statement) {
  		var response = "Whatever.";
  		if (!statement)
  			response = "Fine! Waste My Time!";
  		else if (statement.endsWith('?'))
  			response = "I don't care.";
  		else if (statement.toUpperCase() === statement)
  			response = "I'm right here, you know.";
  		
    	return response;
    }

    	return Marvin;
  });
})();