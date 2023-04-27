


const sumPairs = ( numbers, result ) => {

    let returnsito = []
    numbers.filter(( e , i, arr )=> {
        let arrayFiltrado = arr.filter((_, index)=> index !== i )
        let filtrado = arrayFiltrado.find(( element )=> element === (result - e))
        
        //Porque no puedo cambiar este if por un && o por un ternario  
        if( returnsito.length == 2 ){
            return undefined
        }
        
        (filtrado !== undefined) && returnsito.push(e , filtrado)            
        
        return returnsito
    })

    return (returnsito.length > 0) ? returnsito : null
}
console.log( "resultado ",sumPairs( [6, 7, 1, 2], 8 ) )


