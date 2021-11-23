const Account = require('../account')

// data entered as 'DD/MM/YYYY:[credit]:[debit]'
// t1 = transaction 1
const t1 = '10/01/2023:1000.00:0.00'
// returning data in defined format
// r1 = return value 1
const r1 = 'date || credit || debit || balance\n10/01/2023 || 1000.00 || || 1000.00'

test('entering t1 returns r1', () => {
  account = new Account()
  account.transaction(t1)
  expect(account.print_statement()).toBe(r1)
});

const t2 = '13/01/2023:2000.00:0.00'
const r2 = 'date || credit || debit || balance\n13/01/2023 || 2000.00 || || 3000.00\n10/01/2023 || 1000.00 || || 1000.00'

test('entering t1 and t2 returns r2', () => {
  account.transaction(t2)
  expect(account.print_statement()).toBe(r2)
});

const t3 = '14/01/2023:0.00:500.00'
const r3 = 'date || credit || debit || balance\n14/01/2023 || || 500.00 || 2500.00\n13/01/2023 || 2000.00 || || 3000.00\n10/01/2023 || 1000.00 || || 1000.00'

test('entering t1 and t2 and t3 returns r3', () => {
  account.transaction(t3)
  expect(account.print_statement()).toBe(r3)
});