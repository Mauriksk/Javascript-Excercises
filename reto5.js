const date = new Date
const diaMili = 86400000
const navidad = new Date('Dec 25, 2021')
const otroDIa = new Date('Dec 20, 2022 03:24:00')


const getDays = (date) => {
    const diaMili = 86400000;
    const navidad = new Date('Dec 25, 2022')
    const diasRestantes = (navidad - date.getTime())/diaMili

    return Math.ceil(diasRestantes)
}


console.log(getDays(otroDIa))
