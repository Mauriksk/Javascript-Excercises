const frase = 'bici coche balón _playstation bici coche peluche'

function listGifts(letter) {
    let obj = {}
    const filtro = letter.split(' ').map( x => {
        if(x.charAt(0) !== '_'){
            return x
        }
    }) 
    filtro.map( x => {
        if( x !== undefined ){
            if(obj.hasOwnProperty(x)){
                return obj = { ...obj, [x]: obj[x] + 1 }
            }else{
                return obj = { ...obj, [x]: 1 }
            }
        }
    })
    return obj
}

const obj = listGifts(frase)
console.log(obj)


