const Transaction = require("../src/Transaction.js")

class BankAccount {
    constructor() {
        this.transactions = []
    }

    addTransaction(transaction) {
        this.transactions.unshift(transaction)
    }

    deposit(date, num) {
      this.addTransaction(new Transaction(date, num, 0, 0))
    }

    withdrawal(date, num) {
        this.addTransaction(new Transaction(date, 0, num, 0))
    }

    orderTransactions() {
        this.transactions.sort((a, b) => b.date - a.date)
    }

    calculateBalances() {
        this.transactions.sort((a, b) => a.date - b.date)
        for(let i = 0; i < this.transactions.length; i++) {
            for(let j = 0; j <= i; j++) {
            this.transactions[i].balance += this.transactions[j].credit
            this.transactions[i].balance -= this.transactions[j].debit
            }  
        }
    }

}

module.exports = BankAccount

