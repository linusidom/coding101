var assert = require('chai').assert;

describe('Check for Ship', function(){
    const checkForShip = require('../game_logic/ship_method').checkForShip

    var player;

    before(function(){
        player = {
            ships:[
                {
                    locations:[[0,0]]
                }
            ]
        }
    })

    after(function(){
        console.log('All tests completed')
    })

    afterEach(function(){
        console.log('This test complete')
    })

    it('should correclty report that no ship at a given players coordinates',function(){
        assert.isFalse(checkForShip(player, [9,9]))
    })
})