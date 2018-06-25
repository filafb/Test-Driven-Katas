const { expect } = require('chai')
const wrap = require('./wrap')

describe('wrap', () => {
  it ('Returns empty string if empty string was provided',() =>{
    expect(wrap('', 10)).to.equal("")
  })
  it('Returns a one word string no matter the column line when passing a string with one word', () =>{
    expect(wrap('Zach',0)).to.equal("Zach");
    expect(wrap("Zach", 10)).to.equal("Zach")
  })
})

