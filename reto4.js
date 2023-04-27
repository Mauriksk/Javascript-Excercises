function createXmasTree(height) {
    const ancho = 1 + ( (height - 1 ) * 2 )
    let arbol = ''
    let espacios = '_'

    for( let i = 1 ; i <= height ; i++ ){
        let espacios = '_'
        let asteriscos = '*'

        asteriscos = asteriscos.repeat( i + (i - 1) )
        espacios = espacios.repeat( (ancho - asteriscos.length)/2 )
        arbol = arbol + `${ espacios }${asteriscos}${ espacios }\n`
    }

    arbol = arbol + `${ espacios.repeat((ancho - 1)/2) }#${espacios.repeat((ancho - 1)/2)}\n`
    arbol = arbol + `${ espacios.repeat((ancho - 1)/2) }#${espacios.repeat((ancho - 1)/2)}`

    return arbol
}

console.log(createXmasTree(40))



