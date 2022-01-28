const Transaction = require("../src/Transaction.js")

class BankAccount {
    constructor() {
        this.balance = 0
        this.transactions = []
    }

    addTransaction(transaction) {
        this.transactions.unshift(transaction)
    }

    deposit(date, num) {
      this.balance += num
      this.addTransaction(new Transaction(date, num, 0, this.balance))
    }

    withdrawal(date, num) {
        this.balance -= num
        this.addTransaction(new Transaction(date, 0, num, this.balance))
    }

}

module.exports = BankAccount

