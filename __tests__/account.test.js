const account = require('../account')

// data entered as 'DD/MM/YYY:[credit]:[debit]'
// transaction 1
const t1 = '10/01/2023:1000.00:0.00'

// returning data in defined format
const r1 = 'date || credit || debit || balance \n 14/01/2023 || || 500.00 || 2500.00'

test('entering t1 returns y', () => {
  expect(account.transaction(t1).toBe(r1)
  )
});