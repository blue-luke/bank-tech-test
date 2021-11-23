const TransactionRecord = require('../model/transaction_record')

const date = '10/01/2023';
const credit_amount = 1000.00;
const debit_amount = 0.00;
var balance = 1000.00;

// returning data in defined format
// r1 = return value 1
const r1 = 'date || credit || debit || balance\n10/01/2023 || 1000.00 || || 1000.00'

test('entering t1 returns r1', () => {
	transaction_record = new TransactionRecord()
	expect(transaction_record.update(date, credit_amount, debit_amount, balance)).toBe(r1)
});