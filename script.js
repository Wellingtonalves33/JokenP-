const resultado = document.querySelector('.resultado')
const meuPontos = document.querySelector('#ponto-meu')
const pontosDaMaquina = document.querySelector('#ponto-do-tiao')

let pontoMeu = 0
let pontoMaquina = 0

function playhumano(escolhaDoUsoario){
   jogaOJogo(escolhaDoUsoario, maquina())
}
function maquina(){
    const opcoes = ['pedra', 'papel','tesoura']
    const numeroSoteardo = Math.floor(Math.random() * 3)
    return opcoes[numeroSoteardo]
}

function jogaOJogo ( humano, maquina ){
    if( humano === maquina){
        resultado.innerHTML = 'Deu impate'
    } else if(humano === 'pedra' && maquina === 'tesoura' ||
        humano === 'tesoura' && maquina === 'papel' || 
        humano === 'papel' && maquina === 'pedra'){
            pontoMeu++
            meuPontos.innerHTML = pontoMeu
            resultado.innerHTML = 'Voce ganhou'
        } else{
            pontoMaquina++
            pontosDaMaquina.innerHTML = pontoMaquina
            resultado.innerHTML = 'Voce perdeu para Tião'
        }
}












// const resultado = document.querySelector('.resultado')
// const meuPontos = document.querySelector('#ponto-meu')
// const pontosDaMaquina = document.querySelector('#ponto-do-tiao')

// let numeroMeu = 0
// let numeroDaMaquina = 0


// function playhumano (escolhaDoUsoario){

//     jogaOJogo(escolhaDoUsoario, maquina ())
// }
// function maquina (){
//     const opcoes = ['papel', 'pedra', 'tesoura']
//     const numeroSoteardo = Math.floor( Math.random() * 3)
//     return opcoes[numeroSoteardo]
// }
// function jogaOJogo ( humano, maquina){
//     if( humano===maquina){
//         resultado.innerHTML = "Deu impate"
//     } else if (humano ==='papel' && maquina === 'pedra' ||
//          humano=== 'pedra' && maquina==='tesoura'||
//           humano ===' tesoura'&& maquina ==='papel'){
//             numeroMeu++
//             meuPontos.innerHTML =numeroMeu
//             resultado.innerHTML = "Voce ganhou"
//          }
     
//          else{
//             numeroDaMaquina++
//             pontosDaMaquina.innerHTML = numeroDaMaquina
//             resultado.innerHTML = "Voce perdeu para Tiao "
//          }
// }

// 
// let numeroMeu = 0
// let numeroDaMaquina = 0 


// function playhumano(escolhadousoario) {

//     jogaOJogo(escolhadousoario, maquina())
// }

// function maquina() {
//     const opcoes = ['pedra', 'papel', 'tesoura']
//     const numeroSoteardo = Math.floor(Math.random() * 3)

//     return opcoes[numeroSoteardo]

// }
// function jogaOJogo(humano, maquina) {
  
//     if (humano === maquina) {
//         resultado.innerHTML = 'Deu empate'

//     } else if (humano === 'papel' && maquina === 'pedra' ||
//          humano === 'pedra' && maquina === 'tesoura' ||
//          humano === 'tesoura'&& maquina === 'papel'
//     ) { numeroMeu++
//         meuPontos.innerHTML = numeroMeu
//         resultado.innerHTML = 'Você ganhou'

//     } else {
//         numeroDaMaquina++
//         pontosDaMaquina.innerHTML = numeroDaMaquina
//         resultado.innerHTML = 'Você Perdeu Para Tiao'
//     }

// }

