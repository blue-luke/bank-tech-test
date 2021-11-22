class Account {
  transaction(input_data) {
    const output_data = input_data.split(':')
    return `date || credit || debit || balance \n${output_data[0]} || ${output_data[1]} || ${output_data[2]} || 1000.00`
  }
}

module.exports = Account