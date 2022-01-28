const Transaction = require("../src/Transaction.js")
const BankAccount = require("../src/BankAccount.js")

class PrintStatement {
    constructor(transactions) {
        this.transactions = transactions
    }

    orderDates() {
        const orderedDates = []
        for (let transaction of this.transactions){
        // orderedDates.push(Object.assign(Object.create(Object.getPrototypeOf(transaction)), transaction))
        orderedDates.push(transaction.clone())
        }   
        return orderedDates.sort((a, b) => b.date - a.date)
    }

    formatDates(array) {
        for (let transaction of array)
       transaction.date = transaction.date.getDate()+'/'+ String((transaction.date.getMonth()+1)).padStart(2, "0") +'/'+ transaction.date.getFullYear(); 
    }

    printTransactions() {
        let ordered = this.orderDates()
        this.formatDates(ordered)

        let printed = ``

        for (let transaction of ordered){
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

const statement = new PrintStatement(account.transactions)
console.log(statement.print())
console.log(statement.print())
