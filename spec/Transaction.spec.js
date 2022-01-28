const Transaction = require("../src/Transaction.js")


describe("Transaction", () => {
  let transaction

  beforeEach(() => {
    transaction = new Transaction("10/12/2022", 100, 0, 100)
  })

  
  it("Correct balance after instance", () => {
    const expected = 100
    const test = transaction.balance
    expect(test).toEqual(expected)
  })

  it("Correct credit after instance", () => {
    const expected = 100
    const test = transaction.credit
    expect(test).toEqual(expected)
  })

  it("Correct debit after instance", () => {
    const expected = 0
    const test = transaction.debit
    expect(test).toEqual(expected)
  })

})