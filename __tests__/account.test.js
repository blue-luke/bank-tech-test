const Account = require('../model/account');
const TransactionRecordDummy = require("../mocks/transaction_record_dummy");

// data entered as 'DD/MM/YYY:[credit]:[debit]'
const transaction1 = '10/01/2023:1000.00:0.00';

// returning data in defined format
const result1 = 'date || credit || debit || balance\n10/01/2023 || 1000.00 || || 1000.00';

test('entering transaction1 returns result1', () => {
  account = new Account(injected_transaction_record = TransactionRecordDummy);
  account.transaction(transaction1);
  expect(account.print_statement()).toBe(result1);
});

const transaction2 = '13/01/2023:2000.00:0.00';
const result2 = 'date || credit || debit || balance\n13/01/2023 || 2000.00 || || 3000.00\n10/01/2023 || 1000.00 || || 1000.00';

test('entering transaction1 and transaction2 returns result2', () => {
  account.transaction(transaction2);
  expect(account.print_statement()).toBe(result2);
});

const transaction3 = '14/01/2023:0.00:500.00';
const result3 = 'date || credit || debit || balance\n14/01/2023 || || 500.00 || 2500.00\n13/01/2023 || 2000.00 || || 3000.00\n10/01/2023 || 1000.00 || || 1000.00';

test('entering transaction1 and transaction2 and transaction3 returns result3', () => {
  account.transaction(transaction3);
  expect(account.print_statement()).toBe(result3);
});