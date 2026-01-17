const player1 = {
    NOME: "Mario",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 0
}

const player2 = {
    NOME: "Luigi",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 0
}

function rollDice() {
    return Math.floor(Math.random() * 6) + 1
}

function getRandomBlock() {
    let random = Math.random()
    let result

    switch (true) {
        case random < 0.33:
            result = "RETA"
            break;
        case random < 0.66:
            result = "CURVA"
            break;
        default:
            result = "CONFRONTO"
            break;
    }

    return result
}

async function logRollResult(characterName, block, diceResult, attribute) {
    console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`)
}

function drawAttackItem() {
    let random = Math.random()
    let result
    //sortear se o perdedor do confronto é atingido por um casco ou uma bamba
    switch (true) {
        case random < 0.50:
            result = "casco"
            break;
    
        default:
            result = "bomba"
            break;
    }

    return result
    
}

function tryAwardTurbo() {
    //sortear se o vencedor do confronto ganha turbo ou não
    return random = Math.random() < 0.5
}


async function playRaceEngine(character1, character2) {
    for(let round = 1; round <= 5; round++) {
        console.log(`🏁 Rodada ${round}`)

        //sortear bloco
        let block = getRandomBlock()
        console.log(`Bloco: ${block}`)

        //rolar os dados
        let diceResult1 = rollDice()
        let diceResult2 = rollDice()

        //teste de habilidade
        let totalTestSkill1 = 0
        let totalTestSkill2 = 0

        if (block === "RETA") {
            totalTestSkill1 = diceResult1 + character1.VELOCIDADE
            totalTestSkill2 = diceResult2 + character2.VELOCIDADE

            await logRollResult(character1.NOME, "velocidade", diceResult1, character1.VELOCIDADE)
            await logRollResult(character2.NOME, "velocidade", diceResult2, character2.VELOCIDADE)
        }
        if (block === "CURVA") {
            totalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE
            totalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE

            await logRollResult(character1.NOME, "manobrabilidade", diceResult1, character1.MANOBRABILIDADE)
            await logRollResult(character2.NOME, "manobrabilidade", diceResult2, character2.MANOBRABILIDADE)
        }
        if (block === "CONFRONTO") {
            let powerResult1 = diceResult1 + character1.PODER
            let powerResult2 = diceResult2 + character2.PODER

            console.log(`${character1.NOME} confrontou com ${character2.NOME} 🥊`)

            await logRollResult(character1.NOME, "poder", diceResult1, character1.PODER)
            await logRollResult(character2.NOME, "poder", diceResult2, character2.PODER)

            let vencedor = null
            let perdedor = null

            if (powerResult1 > powerResult2) {
                vencedor = character1
                perdedor = character2
            }

            else if (powerResult2 > powerResult1) {
                vencedor = character2
                perdedor = character1
            }

            else {
                console.log("Confronto empatado! Nenhum ponto foi perdido")
            }

            if(!vencedor || !perdedor) {
                //empate, não faz mais nada
            } else {
                if (perdedor.PONTOS <= 0) {
                    console.log(`${perdedor.NOME} não tinha pontos para perder`)
                }

                console.log(`${vencedor.NOME} venceu o confronto!`)

                let cascoBomb = drawAttackItem()
                let penalidade = cascoBomb === "casco" ? 1 : 2

                let pontosAntes = perdedor.PONTOS
                perdedor.PONTOS = Math.max(0, perdedor.PONTOS - penalidade)

                console.log(`${perdedor.NOME} foi atingido por um ${cascoBomb} e perdeu ${pontosAntes - perdedor.PONTOS} ponto(s)`)

                if(tryAwardTurbo()) {
                    console.log(`${vencedor.NOME} ativou um turbo e ganhou 1 ponto extra! 🔥`)
                    vencedor.PONTOS++
                }

                else {
                    console.log(`${vencedor.NOME} não ganhou ponto extra!`)
                }
            }
        }

        //verificando o vencedor
        if(block !== "CONFRONTO") {
            if (totalTestSkill1 > totalTestSkill2) {
                console.log(`${character1.NOME} marcou um ponto!`)
                character1.PONTOS++
            } 
        
            else if (totalTestSkill2 > totalTestSkill1) {
                console.log(`${character2.NOME} marcou um ponto!`)
                character2.PONTOS++
            }
        }
        
        console.log("----------------------------------")
    }
}

async function declareWinner(character1, character2) {
    console.log("Resultado final:")
    console.log(`${character1.NOME}: ${character1.PONTOS} ponto(s)`)
    console.log(`${character2.NOME}: ${character2.PONTOS} ponto(s)`)

    if(character1.PONTOS > character2.PONTOS) {
        console.log(`\n${character1.NOME} venceu a corrida! Parabéns 🏆`)
    }

    else if (character2.PONTOS > character1.PONTOS) {
        console.log(`\n${character2.NOME} venceu a corrida! Parabéns 🏆`)
    }

    else {
        console.log("A corrida terminou em empate")
    }
}

(async function main() {
    console.log(`🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando ... \n`)

    await playRaceEngine(player1, player2)
    await declareWinner(player1, player2)
})()