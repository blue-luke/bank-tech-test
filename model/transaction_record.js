class TransactionRecord {
	constructor() {
		this.column_headings = 'date || credit || debit || balance';
		this.statement = this.column_headings;
		this.column_headings_length = this.column_headings.length;
	}

	update(date, credit_amount, debit_amount, balance) {
  	// amounts need to be formatted, because if they are 0.00, they should be displayed as an empty string, not as 0.00
		credit_amount = this.format_amount(credit_amount);
		debit_amount = this.format_amount(debit_amount);
  
		// this is the line to be added to the transaction record
		const new_transaction_line = `\n${date} || ${credit_amount}|| ${debit_amount}|| ${balance.toFixed(2)}`;
  
		// insert the new transaction line after the column headings at index position 34 (this.column_headings_length = 34) but before older transactions after index position 34
		return this.statement = [this.statement.slice(0, this.column_headings_length), new_transaction_line, this.statement.slice(this.column_headings_length)].join('');
	}

	format_amount(amount) {
		return ( amount == 0.00 ? '' : String(amount.toFixed(2)) + ' ' );
	}
}

module.exports = TransactionRecord;
