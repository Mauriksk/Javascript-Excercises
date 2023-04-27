const cartaBuena = "(muñeca) consola bici"
const cartaMala = "(()) bici"


function isValid(letter) {
    
    const firstP = letter.search("[(]")
    const secondP = letter.search("[)]") 

    if( firstP > -1 && secondP > -1 && ( firstP < secondP ) ){
        const content = letter.substring( (firstP + 1), secondP )
        console.log(content)
        if( content.includes('{') ||
            content.includes('}') ||
            content.includes('[') ||
            content.includes(']') ||
            content.includes('(') || 
            content.includes(')') ||
            content.trim() == ''
        ){
            return false
        } 

        return true
    }

    return false
}

const resultado = isValid(cartaMala)
console.log(resultado)