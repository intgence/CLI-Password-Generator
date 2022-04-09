const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const dig = '0123456789'
const symbols = '!@#$%^&*_-+='

const createPassword = (length=8, hasDigits=true, hasSymbols=true) =>  {
    let chars = alpha
    hasDigits ? (chars) += dig : ' '
    hasSymbols ? (chars) += symbols : ' '
    return generatePassword(chars, length)
}

const generatePassword = (chars, length) => {
    let password = ''
    for(let i = 0; i< length;++i){
        password += chars.charAt(Math.floor(Math.random()*chars.length))
    }
    return password
}


export default createPassword