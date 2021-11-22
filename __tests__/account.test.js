const Account = require('../account')

// data entered as 'DD/MM/YYY:[credit]:[debit]'
// transaction 1
const t1 = '10/01/2023:1000.00:0.00'

// returning data in defined format
const r1 = 'date || credit || debit || balance \n10/01/2023 || 1000.00 || 0.00 || 1000.00'

test('entering t1 returns y1', () => {
  account = new Account()
  expect(account.transaction(t1)).toBe(r1)
});