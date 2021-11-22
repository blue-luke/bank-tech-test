class Account {

  constructor() {
    this.balance = 0.00
    this.transaction_record = 'date || credit || debit || balance'
  }

  transaction(input_data) {
    const output_data = input_data.split(':')
    const date = output_data[0]
    const credit_amount = output_data[1]
    const debit_amount = output_data[2]
    this.balance = this.balance + parseInt(credit_amount) - parseInt(debit_amount)
    // this.transaction_record = this.transaction_record.concat(`\n${date} || ${credit_amount} || ${debit_amount} || 1000.00`)
    // this.transaction_record = this.transaction_record.splice(34, 0, `\n${date} || ${credit_amount} || ${debit_amount} || ${this.balance}`)
    this.transaction_record = [this.transaction_record.slice(0, 34), `\n${date} || ${credit_amount} || ${debit_amount} || ${this.balance.toFixed(2)}`, this.transaction_record.slice(34)].join('')
  }


  print_statement() {
    return this.transaction_record
  }

}

module.exports = Account