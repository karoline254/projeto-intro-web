// ATIVIDADES DA SEMANA 01: 

// // ChampionsLeague 22/23

const nome01 = "Barcelona"
const qtdGanhouBarcelona = 5
const jogadoresDoAtaqueB = [" Lewandowski", " Raphinha", "Depay", " Ansu Fati", " Ferran"]
const classificacaoB = true

const nome02 = "Manchester City"
const qtdGanhouManchesterC = 7
const jogadoresDoAtaqueMC = [" Haaland", " Mahrez", " Julián"]
const classificacaoMC = true

const nome03 = "Chelsea"
const qtdGanhouChelsea = 2
const jogadoresDoAtaqueC = [" Armando", " Omarin", " Mitchy", " Sterling"]
const classificacaoC = false

// console.log(`Time: ${nome01.toLocaleUpperCase()}`, `\nQuantas vezes campeão: ${qtdGanhouBarcelona}`, `\nJogadores do Ataque: ${jogadoresDoAtaqueB}`, `\nSe classificou: ${classificacaoB}`)
// console.log(`Time: ${nome02.toLocaleUpperCase()}`, `\nQuantas vezes campeão: ${qtdGanhouManchesterC}`, `\nJogadores do Ataque: ${jogadoresDoAtaqueMC}`, `\nSe classificou: ${classificacaoMC}`)
// console.log(`Time: ${nome03.toLocaleUpperCase()}`, `\nQuantas vezes campeão: ${qtdGanhouChelsea}`, `\nJogadores do Ataque: ${jogadoresDoAtaqueC}`, `\nSe classificou: ${classificacaoC}`)

// const valorMedio = ((qtdGanhouBarcelona + qtdGanhouManchesterC + qtdGanhouChelsea) / 3)
// console.log("Média de vezes que foram campeões: " + valorMedio)
// const verificarClassificacao = classificacaoB && classificacaoMC && classificacaoC
// console.log("Os três foram classificados? " + verificarClassificacao)

//----------------------------------------------------------------------------------------------------------------//

// ATIVIDADES DA SEMANA 02

const barcelona = {
    nome: "Barcelona",
    tecnico: "Xavi",
    jogadoresDoAtaque: [" Raphinha", " Ferran", " Lewandowski"],
    estadio: "Camp Nou",
    classificacao: true
}
const manchester = {
    nome: "Manchester City",
    tecnico: "Josep Guardiola",
    jogadoresDoAtaque: [" Haaland", " Julián", " Mahrez"],
    estadio: "Etihad Stadium",
    classificacao: true
}
const chelsea = {
    nome: "Chelsea",
    tecnico: "Graham Potter",
    jogadoresDoAtaque: ["Pulisic", "Sterling",  "Aubameyang"],
    estadio: "Stamford Bridge",
    classificacao: true
}
const psg = {
    nome: "Paris Saint-Germain",
    tecnico: "Christophe Galtier",
    jogadoresDoAtaque: ["Messi", "Neymar", "Mbappé"],
    estadio: "Parc des Princes",
    classificacao: true
}
const bayern = {
    nome: "Bayern de Munique",
    tecnico: "Franz John",
    jogadoresDoAtaque: ["Mané", "Coman", "Müller"],
    estadio: "Allianz Arena",
    classificacao: true
}
const borussia = {
    nome: "Borussia Dortmund",
    tecnico: "Edin Terzic",
    jogadoresDoAtaque: ["Adeyemi", "Hazard", "Moukoko"],
    estadio: "Signal Iduna Park",
    classificacao: true
}

// const championsLeague = []
// championsLeague.push(barcelona, manchester, chelsea)
// console.log(championsLeague)

// const championsLeague = []

// if (barcelona.classificacao) {
//     console.log("Este time está classificado: " + nome01)
//     championsLeague.push(barcelona)
// } else {
//     alert("Este time não foi classificado: " + nome01)
// }
// if (manchester.classificacao) {
//     console.log("Este time está classificado: " + nome02)
//     championsLeague.push(manchester)
// } else {
//     alert("Este time não foi classificado: " + nome02)
// }
// if (chelsea.classificacao) {
//     console.log("Este time está classificado: " + nome03)
//     championsLeague.push(chelsea)
// } else {
//     alert("Este time não foi classificado: " + nome03)
// }

// console.log("Classificados para a Champions League: ", championsLeague)
//----------------------------------------------------------------------------------------------------------------//


/// ATIVIDADE 01 // SEMANA 03
console.log("--------- EXERCICIO 01 // SEMANA 03 ----------")

const time = [barcelona, manchester, chelsea, psg, bayern, borussia]

for (let objeto of time) {
    objeto.jogadoresDoAtaque = objeto.jogadoresDoAtaque.join(", ")
}

console.log(barcelona)
console.log(manchester)
console.log(chelsea)
console.log(psg)
console.log(bayern)
console.log(borussia)


// ATIVIDADE 02 // SEMANA 03
console.log("--------- EXERCICIO 02 // SEMANA 03  ----------")
for (let objeto of time) {
    for (let i in objeto) {
        console.log(objeto[i])
    }
}

// ATIVIDADE 03 /// SEMANA 03
console.log("--------- EXERCICIO 03 // SEMANA 03  ----------")
function receberTime(time) {
    let stringDoObjeto = ""
    for (let i in time) {
        stringDoObjeto = stringDoObjeto + `${i}: ${time[i]}. \n`
    }
    console.log(stringDoObjeto)
    return
}

receberTime(time[0])

// ATIVIDADE 04 /// SEMANA 03
console.log("--------- EXERCICIO 04 // SEMANA 03  ----------")

const time1 = [barcelona, manchester, chelsea, psg, bayern, borussia]
// const timeEscolhido = prompt("0 = Barcelona, 1 Manchester City, 2 = Chelsea. Escolha seu time: ")
// let novoArray = []

const receberObjString = (time1, timeEscolhido) => {
    const resultado = time1.filter((time1) => {
        return time1.nome === timeEscolhido
    })
//     if(resultado.length > 0){
//         console.log(resultado)
//     }else{
//         alert("Nenhum time foi encontrado!")
//     }
// }

receberObjString(time1, timeEscolhido)
