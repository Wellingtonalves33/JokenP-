// const list =[
//     {name:'Pedro',vip:2},
//     {name:'thiago',vip:false},
//     {name:'Neto',vip:true},
//     {name:'Junior',vip:true},
//     {name:'Roberto',vip:true},
//     {name:'Nagyla',vip:false},
//     {name:'Nicolas',vip:false},
//     {name:'Tiffany',vip:true},
//     {name:'Raquel',vip:false},
//     {name:'Beuqueolj',vip:false},

// ]
// const newListar= list.map (user =>{
//     const newUser = {
//         name: user.name, 
//         braceletColor: user.vip ? 'grenn': 'Black'

//     }
//     return newUser
// })

// console.log(newListar)

// const students =[
//     {name:'Pedro',testGrade:4},
//     {name:'thiago',testGrade:5},
//     {name:'Neto',testGrade:6},
//     {name:'Junior',testGrade:10},
//     {name:'Roberto',testGrade:9},
//     {name:'Nagyla',testGrade:7},
//     {name:'Nicolas',testGrade:1},
//     {name:'Tiffany',testGrade:8},
//     {name:'Raquel',testGrade:10},
//     {name:'Beuqueolj',testGrade:4.9},

// ]
// const resultStudants = students.map( student =>{
//     const newstudent = {
//         name: student.name, 
//        Results: student.testGrade >= 5 ? 'Aprovado': 'Reprovado'

//     }
//     return newUser
// })
// console.log(resultStudants)





// const cart = [
//     { productName:'Arroz', pricePerKg:5 , kg:2 },
//     { productName:'Pepino', pricePerKg:3.55 , kg:3.9 },
//     { productName:'Cebola', pricePerKg:3.40, kg: 3},
//     { productName:'Morango', pricePerKg: 23, kg:1 },
//     { productName:'Peixe ', pricePerKg: 2.33, kg:3 },
//     { productName:'Limão', pricePerKg:2.24, kg:3 },
//     { productName:'Linguiça', pricePerKg:39 , kg:2 }

// ]

// const sum = cart.reduce((acc, value)=>{
//    const resultado = value.pricePerKg * value.kg
//    return acc + resultado


// },0)

// console.log(`Sua compra ficou no Total de:${sum.toFixed([2])}`)

const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundeOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundeOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundeOn: 1968 },
    { name: 'Facabook', marketValue: 383, CEO: 'Mark Zuckerberg', foundeOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundeOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim cook', foundeOn: 1976 },
    { name: 'Wel-comece', marketValue: 145, CEO: 'Wellington Alves', foundeOn: 2026 },
]
const desvalorizacaoDasEmpresas = companies.map (company =>{
    company.marketValue = company.marketValue - (company.marketValue / 10)
    return company
})
.filter(company=> company.foundeOn >1980)
.reduce((acc, company) =>acc + company.marketValue,0)

 console.log(desvalorizacaoDasEmpresas)




// const add10porcet = company => {
//     company.marketValue = company.marketValue + (company.marketValue / 10)
//     return company
// }
// const filtro = company => company.foundeOn < 1990
// const totalvalue =(acc, company) => acc + company.marketValue

// const marketValueOldCompanies = companies
// .map(add10porcet)
// .filter(filtro)
// .reduce(totalvalue, 0)
// console.log(marketValueOldCompanies)