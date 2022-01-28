const BankAccount = require("../src/BankAccount.js")
const Transaction = require("../src/Transaction.js")

describe("ListTransactions", () => {
  let account

  beforeEach(() => {
    account = new BankAccount()
  })

  
  it("Blank list when created", () => {
    const expected = []
    const test = account.transactions
    expect(test).toEqual(expected)
  })

  it("can add transaction", () => {
    const expected = [new Transaction(new Date(2012, 0, 10), 100, 0, 100)]
    account.addTransaction(new Transaction(new Date(2012, 0, 10), 100, 0, 100))
    const test = account.transactions
    expect(test).toEqual(expected)
  })

  it("can desposit - new transaction added", () => {
    const expected = [new Transaction(new Date(2012, 0, 10), 10, 0, 0)]
    account.deposit(new Date(2012, 0, 10), 10)
    const test = account.transactions
    expect(test).toEqual(expected)
  })

  it("can desposit - new transaction added", () => {
    const expected = [new Transaction(new Date(2012, 0, 10), 0, 10, 0)]
    account.withdrawal(new Date(2012, 0, 10), 10)
    const test = account.transactions
    expect(test).toEqual(expected)
  })
})