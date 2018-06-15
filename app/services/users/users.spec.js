describe('Users factory', function() {
	var Users;

	var userList = [
	    {
	      id: '1',
	      name: 'Jane',
	      role: 'Designer',
	      location: 'New York',
	      twitter: 'gijane'
	    },
	    {
	      id: '2',
	      name: 'Bob',
	      role: 'Developer',
	      location: 'New York',
	      twitter: 'billybob'
	    },
	    {
	      id: '3',
	      name: 'Jim',
	      role: 'Developer',
	      location: 'Chicago',
	      twitter: 'jimbo'
	    },
	    {
	      id: '4',
	      name: 'Bill',
	      role: 'Designer',
	      location: 'LA',
	      twitter: 'dabill'
	    }
	  ];

	beforeEach(angular.mock.module('api.users'));

	beforeEach(inject(function(_Users_) {

		Users = _Users_;

	}));

	it('should exist', function() {
		expect(Users).toBeDefined(); 
	});

	// A set of tests for our Users.all() method
  	describe('.all()', function() {
    	// A simple test to verify the method all exists
    	it('should exist', function() {
      		expect(Users.all).toBeDefined();
    	});

    	//it('should return a hard-coded user list', function() {
    	//	expect(Users.all()).toEqual(userList);
    	//});

  	});

});