class Transaction {
    constructor(date = new Date(), credit, debit, balance) {
        this.date = date
        this.credit = credit
        this.debit = debit
        this.balance = balance
    }

    isCredit() {
        return this.debit === 0
    }
    
    isDebit() {
        return this.credit === 0
    }
    

}


module.exports = Transaction