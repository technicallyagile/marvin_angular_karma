	describe('Marvin the Android', function() {

		var Marvin;

		beforeEach(angular.mock.module('api.marvin'));

		beforeEach(inject(function(_Marvin_) {

			Marvin = _Marvin_;

		}));

		it('Marvin Defined', function() {
			expect(Marvin).toBeDefined(); 
		});

	});