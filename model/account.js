const TransactionRecord = require("./transaction_record");

class Account {

	constructor() {
		this.balance = 0.00;
		this.transaction_record = new TransactionRecord();
	}

	transaction(input_data) {
		// extract and name data from the raw string input data which must be of the format 'DD/MM/YYYY:[credit]:[debit]'
		const output_data = input_data.split(':');
		const date = output_data[0];
		var credit_amount = parseInt(output_data[1]);
		var debit_amount = parseInt(output_data[2]);

		this.update_balance(credit_amount, debit_amount);
		this.update_transaction_record(date, credit_amount, debit_amount);
	}

	update_balance(credit_amount, debit_amount) {
		this.balance = this.balance + credit_amount - debit_amount;
	}

	update_transaction_record(date, credit_amount, debit_amount) {
		this.transaction_record.update(date, credit_amount, debit_amount, this.balance)
	}

	print_statement() {
		return this.transaction_record.statement;
	}

}

module.exports = Account;