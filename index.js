#!usr/bin/env node

import chalk from 'chalk'; // importing chalk module
import {Command}  from 'commander' // importing commander module 
import clipboard from 'clipboardy';
const program = new Command()

const log = console.log

import createPassword from './utils/createPassword.js'
import savePassword from './utils/savePassword.js'

program.version('1.0.0').description('Simple Password Generator')

program
    .option('-l, --length <number>', 'length of password', '8')
    .option('-s, --save', 'save passwords to a text file')
    .option('-nd, --no-digits', 'remove digits')
    .option('-ns, --no-symbols', 'remove symbols')
    .parse()

const {length, save, digits, symbols} = program.opts()

// Get Generated Password
const generatedPassword = createPassword(length, digits, symbols)

// Save to file
if(save){
    savePassword(generatedPassword)
}

// Copy to clipboard
clipboard.writeSync(generatedPassword)

//Output Generated
log(chalk.blue('Password generated: '))
log(chalk.yellow('Password copied to Clipboard!'))
