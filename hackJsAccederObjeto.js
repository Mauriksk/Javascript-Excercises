const data = {
    nombre: 'Mauricio',
    apellido: 'Torres',
    edad: 22
}
const validData = {
    nombre: [ (value) => value.length > 6, 'Nombre muy corto.' ],
    apellido: [ (value) => value.length > 6, 'Apellido muy corto.' ],
    edad: [ (value) => value < 18, 'Menor de edad.' ]
}

//Para recorrer los keys de un objeto
const recorrerKeyObject = () => {
    for (const keyObject of Object.keys(data)) {
        console.log( data[keyObject] )
    }
}

//Recorrer objeto y recopilar sus valores y resultados
const recopilarResultados = () => {
    const validationValues = {}
    for (const key of Object.keys( validData )) {
        const [ fn, error ] = validData[key]
        validationValues[ `${key}` ] = fn( data[key] ) ? 'Sin Error' : error
    }
    return validationValues
}

recorrerKeyObject()
console.log(recopilarResultados())