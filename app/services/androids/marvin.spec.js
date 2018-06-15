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

	    	it('Most statements meet a short, uninterested response', function() {
	    		expect(Marvin.talk("Hello Marvin")).toEqual("Whatever.");
	    	});

	    	it('Questions are met with flippant answers', function() {
	    		expect(Marvin.talk("Are you hungry?")).toEqual("I don't care.");
	    	});

  		});

	});