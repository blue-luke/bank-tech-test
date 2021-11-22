class Account {
  transaction(input_data) {
    const output_data = input_data.split(':')
    const date = output_data[0]
    const debit_amount = output_data[1]
    const credit_amount = output_data[2]
    const column_headings = 'date || credit || debit || balance \n'
    `${column_headings}${date} || ${debit_amount} || ${credit_amount} || 1000.00`
  }
}

module.exports = Account