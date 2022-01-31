const Transaction = require("../src/Transaction.js")
const BankAccount = require("../src/BankAccount.js")

class PrintStatement {
    constructor(transactions) {
        this.transactions = transactions
    }

    orderTransactions() {
        this.transactions.sort((a, b) => b.date - a.date)
    }

    cloneTransactions() {
        const clone = []
        for (let transaction of this.transactions){
        clone.push(transaction.clone())   
        }   
        return clone
    }

    formatDates(array) {
        for (let transaction of array){
        transaction.date = transaction.date.toLocaleDateString() 
        }
    }

    printTransactions() {
        let clone = this.cloneTransactions()
        this.formatDates(clone)

        let printed = ``

        for (let transaction of clone){
        if(transaction.isCredit()) {
        printed += `${transaction.date} || £${transaction.credit.toFixed(2)}  ||          || £${transaction.balance.toFixed(2)}\n`
        }
        if(transaction.isDebit()) {
            printed += `${transaction.date} ||           || £${transaction.debit.toFixed(2)}  || £${transaction.balance.toFixed(2)}\n`
            }
        }

        return printed
    }

    print() {
        return `date       || credit    || debit    || balance\n${this.printTransactions()}`
    }

}

module.exports = PrintStatement

const account = new BankAccount()

account.deposit(new Date(2012, 0, 10),1000)
account.withdrawal(new Date(2012, 0, 14),500)
account.deposit(new Date(2012, 0, 13),2000)
account.calculateBalances()


const statement = new PrintStatement(account.transactions)
statement.orderTransactions()

console.log(statement.print())
console.table(statement.transactions)
