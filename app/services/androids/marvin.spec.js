	describe('Marvin the Android', function() {

		var Marvin;

		beforeEach(angular.mock.module('api.marvin'));

		beforeEach(inject(function(_Marvin_) {

			Marvin = _Marvin_;

		}));

		it('Marvin Defined', function() {
			expect(Marvin).toBeDefined(); 
		});

		describe('.all()', function() {
	    	// A simple test to verify the method all exists
	    	it('should exist', function() {
	      		expect(Marvin.talk).toBeDefined();
	    	});

	    	it('should return a hard-coded user list', function() {
	    		expect(Marvin.talk("Hello Marvin")).toEqual("Whatever.");
	    	});

  		});

	});