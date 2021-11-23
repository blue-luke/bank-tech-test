class Account {

  constructor() {
    this.balance = 0.00
    this.column_headings = 'date || credit || debit || balance'
    this.transaction_record = this.column_headings
    this.column_headings_length = this.column_headings.length
  }

  transaction(input_data) {
    // extract and name data from the raw string input data which must be of the format 'DD/MM/YYYY:[credit]:[debit]'
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
    // amounts need to be formatted, because if they are 0.00, they should be displayed as an empty string, not as 0.00
    credit_amount = this.format_amount(credit_amount)
    debit_amount = this.format_amount(debit_amount)

    // this is the line to be added to the transaction record
    const new_transaction_line = `\n${date} || ${credit_amount}|| ${debit_amount}|| ${this.balance.toFixed(2)}`

    // insert the new transaction line after the column headings at index position 34 (this.column_headings_length = 34) but before older transactions after index position 34
    this.transaction_record = [this.transaction_record.slice(0, this.column_headings_length), new_transaction_line, this.transaction_record.slice(this.column_headings_length)].join('')
  }

  format_amount(amount) {
    return ( amount == 0.00 ? '' : String(amount.toFixed(2)) + ' ' )
  }

  print_statement() {
    return this.transaction_record
  }

}

module.exports = Account