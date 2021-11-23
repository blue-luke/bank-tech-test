# Bank tech test

## Context 

See bank_tech_test.md for overview of the initial task

## Structure of code

Functionality is provided the account class.
Accounts are created with 0 balance and a transaction record that contains only the column headings.
Transaction information is passed as a a string (see below) to the account class using .transaction.
Internally, this string is parsed. Then, the balance and transaction record are updated.
Transaction record can be printed using print_statement.

## How to use

Below is how to interact with the code in a repl. It duplicates what the automated tests accomplish.

Open account.js in a javascript runtime environment such as node:
```
$ node
> .load [filepath for account.js]
```

Create a bank account:
```
> my_bank_account = new Account()
```

Add a transaction, in the format 'DD/MM/YYYY:[credit]:[debit]'. Credit and debit amounts must be to 2 decimal places:
```
> my_bank_account.transaction('10/01/2023:1000.00:0.00')
```

Print your bank statement:
```
> my_bank_account.print_statement()
```

## How to test

```
$ npm install jest
$ jest
```

