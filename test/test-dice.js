const chai = require('chai')
chai.use(require('chai-things'))
const should = chai.should()

const { dice } = require ('../lib')

const dXX = dice.die(Number.MAX_SAFE_INTEGER)

describe('dice', () => {
  describe('dXX', () => {
    it('should return an integer between 1 and MAX when called with no arguments', () => {
      const roll = dXX()
      roll.should.be.a('number')
      roll.should.be.at.most(Number.MAX_SAFE_INTEGER)
      roll.should.be.at.least(1)
    })

    it('should return an integer between 1 and MAX when called with an argument that is not a positive integer', () => {
      const rolls = [
        dXX(''),
        dXX({}),
        dXX([]),
        dXX(false),
        dXX(NaN),
        dXX(Number.MIN_SAFE_INTEGER),
      ]
      rolls.forEach((roll) => {
        roll.should.be.a('number')
        roll.should.be.at.most(Number.MAX_SAFE_INTEGER)
        roll.should.be.at.least(1)
      })
    })

    it('should return an array of integers of LENGTH between 1 and MAX when called with an positive integer argument', () => {
      const rolls = dXX(Math.floor(Math.random() * (32)) + 1)
      rolls.forEach((roll) => {
        roll.should.be.a('number')
        roll.should.be.at.most(Number.MAX_SAFE_INTEGER)
        roll.should.be.at.least(1)
      })
    })
  })

  describe('d2', () => {
    it('should return an integer between 1 and 2 when called with no arguments', () => {
      const roll = dice.d2()
      roll.should.be.a('number')
      roll.should.be.at.most(2)
      roll.should.be.at.least(1)
    })

    it('should return an integer between 1 and 2 when called with an argument that is not a positive integer', () => {
      const rolls = [
        dice.d2(''),
        dice.d2({}),
        dice.d2([]),
        dice.d2(false),
        dice.d2(NaN),
        dice.d2(Number.MIN_SAFE_INTEGER),
      ]
      rolls.forEach((roll) => {
        roll.should.be.a('number')
        roll.should.be.at.most(2)
        roll.should.be.at.least(1)
      })
    })

    it('should return an array of integers of LENGTH between 1 and 2 when called with an positive integer argument', () => {
      const rolls = dice.d2(Math.floor(Math.random() * (32)) + 1)
      rolls.forEach((roll) => {
        roll.should.be.a('number')
        roll.should.be.at.most(2)
        roll.should.be.at.least(1)
      })
    })
  })

  describe('d3', () => {
    it('should return an integer between 1 and 3 when called with no arguments', () => {
      const roll = dice.d3()
      roll.should.be.a('number')
      roll.should.be.at.most(3)
      roll.should.be.at.least(1)
    })

    it('should return an integer between 1 and 3 when called with an argument that is not a positive integer', () => {
      const rolls = [
        dice.d3(''),
        dice.d3({}),
        dice.d3([]),
        dice.d3(false),
        dice.d3(NaN),
        dice.d3(Number.MIN_SAFE_INTEGER),
      ]
      rolls.forEach((roll) => {
        roll.should.be.a('number')
        roll.should.be.at.most(3)
        roll.should.be.at.least(1)
      })
    })

    it('should return an array of integers of LENGTH between 1 and 3 when called with an positive integer argument', () => {
      const rolls = dice.d3(Math.floor(Math.random() * (32)) + 1)
      rolls.forEach((roll) => {
        roll.should.be.a('number')
        roll.should.be.at.most(3)
        roll.should.be.at.least(1)
      })
    })
  })

  describe('d4', () => {
    it('should return an integer between 1 and 4 when called with no arguments', () => {
      const roll = dice.d4()
      roll.should.be.a('number')
      roll.should.be.at.most(4)
      roll.should.be.at.least(1)
    })

    it('should return an integer between 1 and 4 when called with an argument that is not a positive integer', () => {
      const rolls = [
        dice.d4(''),
        dice.d4({}),
        dice.d4([]),
        dice.d4(false),
        dice.d4(NaN),
        dice.d4(Number.MIN_SAFE_INTEGER),
      ]
      rolls.forEach((roll) => {
        roll.should.be.a('number')
        roll.should.be.at.most(4)
        roll.should.be.at.least(1)
      })
    })

    it('should return an array of integers of LENGTH between 1 and 4 when called with an positive integer argument', () => {
      const rolls = dice.d4(Math.floor(Math.random() * (32)) + 1)
      rolls.forEach((roll) => {
        roll.should.be.a('number')
        roll.should.be.at.most(4)
        roll.should.be.at.least(1)
      })
    })
  })

  describe('d6', () => {
    it('should return an integer between 1 and 6 when called with no arguments', () => {
      const roll = dice.d6()
      roll.should.be.a('number')
      roll.should.be.at.most(6)
      roll.should.be.at.least(1)
    })

    it('should return an integer between 1 and 6 when called with an argument that is not a positive integer', () => {
      const rolls = [
        dice.d6(''),
        dice.d6({}),
        dice.d6([]),
        dice.d6(false),
        dice.d6(NaN),
        dice.d6(Number.MIN_SAFE_INTEGER),
      ]
      rolls.forEach((roll) => {
        roll.should.be.a('number')
        roll.should.be.at.most(6)
        roll.should.be.at.least(1)
      })
    })

    it('should return an array of integers of LENGTH between 1 and 6 when called with an positive integer argument', () => {
      const rolls = dice.d6(Math.floor(Math.random() * (32)) + 1)
      rolls.forEach((roll) => {
        roll.should.be.a('number')
        roll.should.be.at.most(6)
        roll.should.be.at.least(1)
      })
    })
  })

  describe('d8', () => {
    it('should return an integer between 1 and 8 when called with no arguments', () => {
      const roll = dice.d8()
      roll.should.be.a('number')
      roll.should.be.at.most(8)
      roll.should.be.at.least(1)
    })

    it('should return an integer between 1 and 8 when called with an argument that is not a positive integer', () => {
      const rolls = [
        dice.d8(''),
        dice.d8({}),
        dice.d8([]),
        dice.d8(false),
        dice.d8(NaN),
        dice.d8(Number.MIN_SAFE_INTEGER),
      ]
      rolls.forEach((roll) => {
        roll.should.be.a('number')
        roll.should.be.at.most(8)
        roll.should.be.at.least(1)
      })
    })

    it('should return an array of integers of LENGTH between 1 and 8 when called with an positive integer argument', () => {
      const rolls = dice.d8(Math.floor(Math.random() * (32)) + 1)
      rolls.forEach((roll) => {
        roll.should.be.a('number')
        roll.should.be.at.most(8)
        roll.should.be.at.least(1)
      })
    })
  })

  describe('d10', () => {
    it('should return an integer between 1 and 10 when called with no arguments', () => {
      const roll = dice.d10()
      roll.should.be.a('number')
      roll.should.be.at.most(10)
      roll.should.be.at.least(1)
    })

    it('should return an integer between 1 and 10 when called with an argument that is not a positive integer', () => {
      const rolls = [
        dice.d10(''),
        dice.d10({}),
        dice.d10([]),
        dice.d10(false),
        dice.d10(NaN),
        dice.d10(Number.MIN_SAFE_INTEGER),
      ]
      rolls.forEach((roll) => {
        roll.should.be.a('number')
        roll.should.be.at.most(10)
        roll.should.be.at.least(1)
      })
    })

    it('should return an array of integers of LENGTH between 1 and 10 when called with an positive integer argument', () => {
      const rolls = dice.d10(Math.floor(Math.random() * (32)) + 1)
      rolls.forEach((roll) => {
        roll.should.be.a('number')
        roll.should.be.at.most(10)
        roll.should.be.at.least(1)
      })
    })
  })

  describe('d12', () => {
    it('should return an integer between 1 and 12 when called with no arguments', () => {
      const roll = dice.d12()
      roll.should.be.a('number')
      roll.should.be.at.most(12)
      roll.should.be.at.least(1)
    })

    it('should return an integer between 1 and 12 when called with an argument that is not a positive integer', () => {
      const rolls = [
        dice.d12(''),
        dice.d12({}),
        dice.d12([]),
        dice.d12(false),
        dice.d12(NaN),
        dice.d12(Number.MIN_SAFE_INTEGER),
      ]
      rolls.forEach((roll) => {
        roll.should.be.a('number')
        roll.should.be.at.most(12)
        roll.should.be.at.least(1)
      })
    })

    it('should return an array of integers of LENGTH between 1 and 12 when called with an positive integer argument', () => {
      const rolls = dice.d12(Math.floor(Math.random() * (32)) + 1)
      rolls.forEach((roll) => {
        roll.should.be.a('number')
        roll.should.be.at.most(12)
        roll.should.be.at.least(1)
      })
    })
  })

  describe('d20', () => {
    it('should return an integer between 1 and 20 when called with no arguments', () => {
      const roll = dice.d20()
      roll.should.be.a('number')
      roll.should.be.at.most(20)
      roll.should.be.at.least(1)
    })

    it('should return an integer between 1 and 20 when called with an argument that is not a positive integer', () => {
      const rolls = [
        dice.d20(''),
        dice.d20({}),
        dice.d20([]),
        dice.d20(false),
        dice.d20(NaN),
        dice.d20(Number.MIN_SAFE_INTEGER),
      ]
      rolls.forEach((roll) => {
        roll.should.be.a('number')
        roll.should.be.at.most(20)
        roll.should.be.at.least(1)
      })
    })

    it('should return an array of integers of LENGTH between 1 and 20 when called with an positive integer argument', () => {
      const rolls = dice.d20(Math.floor(Math.random() * (32)) + 1)
      rolls.forEach((roll) => {
        roll.should.be.a('number')
        roll.should.be.at.most(20)
        roll.should.be.at.least(1)
      })
    })
  })

  describe('d100', () => {
    it('should return an integer between 1 and 100 when called with no arguments', () => {
      const roll = dice.d100()
      roll.should.be.a('number')
      roll.should.be.at.most(100)
      roll.should.be.at.least(1)
    })

    it('should return an integer between 1 and 100 when called with an argument that is not a positive integer', () => {
      const rolls = [
        dice.d100(''),
        dice.d100({}),
        dice.d100([]),
        dice.d100(false),
        dice.d100(NaN),
        dice.d100(Number.MIN_SAFE_INTEGER),
      ]
      rolls.forEach((roll) => {
        roll.should.be.a('number')
        roll.should.be.at.most(100)
        roll.should.be.at.least(1)
      })
    })

    it('should return an array of integers of LENGTH between 1 and 100 when called with an positive integer argument', () => {
      const rolls = dice.d100(Math.floor(Math.random() * (32)) + 1)
      rolls.forEach((roll) => {
        roll.should.be.a('number')
        roll.should.be.at.most(100)
        roll.should.be.at.least(1)
      })
    })
  })
})
