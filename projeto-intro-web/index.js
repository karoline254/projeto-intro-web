// ATIVIDADES DA SEMANA 01: 

// // ChampionsLeague 22/23

// const nome01 = "Barcelona"
// const qtdGanhouBarcelona = 5
// const jogadoresDoAtaqueB = [" Lewandowski", " Raphinha", "Depay", " Ansu Fati", " Ferran"]
// const classificacaoB = true

// const nome02 = "Manchester City"
// const qtdGanhouManchesterC = 7
// const jogadoresDoAtaqueMC = [" Haaland", " Mahrez", " Julián"]
// const classificacaoMC = true

// const nome03 = "Chelsea"
// const qtdGanhouChelsea = 2
// const jogadoresDoAtaqueC = [" Armando", " Omarin", " Mitchy", " Sterling"]
// const classificacaoC = false

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
    atacantes: [" Raphinha", " Ferran", " Lewandowski"],
    estadio: "Camp Nou",
    classificacao: "Sim",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/4/43/FCBarcelona.svg/1200px-FCBarcelona.svg.png"
}
const manchester = {
    nome: "Manchester City",
    tecnico: "Josep Guardiola",
    atacantes: [" Haaland", " Julián", " Mahrez"],
    estadio: "Etihad Stadium",
    classificacao: "Sim",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/0/02/Manchester_City_Football_Club.png"
}
const chelsea = {
    nome: "Chelsea",
    tecnico: "Graham Potter",
    atacantes: ["Pulisic", "Sterling",  "Aubameyang"],
    estadio: "Stamford Bridge",
    classificacao: "Sim",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/c/cc/Chelsea_FC.svg/1200px-Chelsea_FC.svg.png"
}
const psg = {
    nome: "Paris Saint-Germain",
    tecnico: "Christophe Galtier",
    atacantes: ["Messi", "Neymar", "Mbappé"],
    estadio: "Parc des Princes",
    classificacao: "Sim",
    imagem: "https://images.psg.media/media/2874/psg_logo_seul_volume_rvb.png"
}
const bayern = {
    nome: "Bayern de Munique",
    tecnico: "Franz John",
    atacantes: ["Mané", "Coman", "Müller"],
    estadio: "Allianz Arena",
    classificacao: "Sim",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/640px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png"
}
const borussia = {
    nome: "Borussia Dortmund",
    tecnico: "Edin Terzic",
    atacantes: ["Adeyemi", "Hazard", "Moukoko"],
    estadio: "Signal Iduna Park",
    classificacao: "Sim",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Borussia_Dortmund_logo.svg/800px-Borussia_Dortmund_logo.svg.png"
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
    objeto.atacantes = objeto.atacantes.join(", ")
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

// const receberObjString = (time1, timeEscolhido) => {
//     const resultado = time1.filter((time1) => {
//         return time1.nome === timeEscolhido
//     })
// }
//     if(resultado.length > 0){
//         console.log(resultado)
//     }else{
//         alert("Nenhum time foi encontrado!")
//     }
// }

// receberObjString(time1, timeEscolhido);

let buscarTime = document.getElementById("txtBusca")
let novoTime2 = [...time1]
const buscar = () => {
    // console.log(buscarTime.value)
    if(buscarTime.value === ""){
      alert("Nenhum time encontrado!");  
    }
    if(time1.nome !== buscarTime.value){
        novoTime2 = time1.filter((time) => {
        return time.nome.toLocaleLowerCase().includes(buscarTime.value.toLocaleLowerCase()) || time.tecnico.toLocaleLowerCase().includes(buscarTime.value.toLocaleLowerCase())
    }) }
   
    let limpa = document.getElementsByClassName("blocoTime")
    const tamanho = limpa.length
    imprime(novoTime2)
    for(let i = 0; i < tamanho; i++){
        console.log(novoTime2)
        limpa[0].remove()
    }

};

let section = document.getElementsByClassName("section")
    const arrayNomesCorretos = ["Nome", "Técnico", "Atacantes", "Estádio", "Classificação"]
const imprime = (novoTime2) => {

    for(let i in novoTime2){
        let contador = 0;
        let novoArticle = document.createElement("article")
        let novoUl = document.createElement("ul")
        novoArticle.appendChild(novoUl)
        for(let j in novoTime2[i]){
            if(j !== "imagem"){
            let novoLi = document.createElement("li")
            let conteudoLi = document.createTextNode(`${arrayNomesCorretos[contador]}: ${novoTime2[i][j]}`)
            novoLi.appendChild(conteudoLi)
            novoUl.appendChild(novoLi)
            contador++
        }else{
            let novoImagem = document.createElement("img")
            novoImagem.setAttribute("src", novoTime2[i][j])
            novoArticle.insertAdjacentElement("beforeend", novoImagem)
        }
        }
        section[0].insertAdjacentElement("beforeend", novoArticle).setAttribute("class", "blocoTime")
    }
    
}

imprime(novoTime2)
