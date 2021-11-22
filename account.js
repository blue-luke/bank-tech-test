class Account {

  constructor() {
    this.balance = 0.00
    this.transaction_record = 'date || credit || debit || balance'
  }

  transaction(input_data) {
    // extract and name data from the raw string input data
    const output_data = input_data.split(':')
    const date = output_data[0]
    var credit_amount = parseInt(output_data[1])
    var debit_amount = parseInt(output_data[2])

    this.update_balance(credit_amount, debit_amount)
    this.update_transaction_record(date, credit_amount, debit_amount)
  }

  update_balance(credit_amount, debit_amount) {
    this.balance = this.balance + credit_amount - debit_amount
  }

  update_transaction_record(date, credit_amount, debit_amount) {
    // update transaction record
    // complicated because 0.00 credit needs to be represented as an empty string when displayed, not as 0.00
    if (credit_amount == 0.00) {
      credit_amount = ''
    } else {
      credit_amount = String(credit_amount.toFixed(2)) + ' '
    }

    if (debit_amount == 0.00) {
      debit_amount = ''
    } else {
      debit_amount = String(debit_amount.toFixed(2)) + ' '
    }

    const new_transaction_line = `\n${date} || ${credit_amount}|| ${debit_amount}|| ${this.balance.toFixed(2)}`

    // insert the new transaction line after the column headings at index position 34 but before older transactions after index position 34
    this.transaction_record = [this.transaction_record.slice(0, 34), new_transaction_line, this.transaction_record.slice(34)].join('')
  }

  print_statement() {
    return this.transaction_record
  }

}

module.exports = Account