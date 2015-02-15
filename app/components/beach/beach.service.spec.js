'use strict';

describe('beachService', function() {

  // load modules
  beforeEach(module('beachApp'));

  // Test service availability
  it('checks the existence of the beach factory', inject(function(Beach) {
      expect(Beach).toBeDefined();
    }));
});