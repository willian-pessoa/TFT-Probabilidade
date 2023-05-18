// {championCost: [number of champions, number of champion copys]}
const POOL = { 1: [13, 29], 2: [13, 22], 3: [13, 18], 4: [12, 12], 5: [8, 10] }

// {levelShop: [odd_T1, odd_T2, odd_T3, odd_T4, odd_T5]}
const SHOP_ODDS = {
  1: [1, 0, 0, 0, 0],
  2: [1, 0, 0, 0, 0],
  3: [0.75, 0.25, 0, 0, 0],
  4: [0.55, 0.30, 0.15, 0, 0],
  5: [0.45, 0.33, 0.20, 0.02, 0],
  6: [0.25, 0.40, 0.30, 0.05, 0],
  7: [0.19, 0.30, 0.35, 0.15, 0.01],
  8: [0.16, 0.20, 0.35, 0.25, 0.04],
  9: [0.09, 0.15, 0.30, 0.30, 0.16]
}

export const formatPercentage = (number) => {
  return (number * 100).toFixed(2) + " %"
}

export const computeOneChamp = (cost, level, rolls = 1, sameOutPool = 0, costOutPool = 0) => {
  let champChance = (POOL[cost][1] - sameOutPool) / ((POOL[cost][0] * POOL[cost][0]) - costOutPool)
  let shopChance = SHOP_ODDS[level][cost - 1] * 5
  let totalChance = champChance * shopChance
  if (rolls === 1) return totalChance

  for (let i = 1; i < rolls; i++) {
    let chanceNotFind = 1 - totalChance
    totalChance = totalChance + (chanceNotFind * champChance * shopChance)
  }

  return totalChance
}

export const tableOfOdds = (cost, level, size = 25, sameOutPool = 0, costOutPool = 2 * 8) => {
  let TABLE_OF_ODDS = {}

  for (let i = 1; i <= size; i++) {
    const key = "roll_" + i
    TABLE_OF_ODDS[key] = formatPercentage(computeOneChamp(cost, level, i, sameOutPool, costOutPool))
  }

  return TABLE_OF_ODDS
}

export const simuladorJogo = (nJogos, rolls, cost, level, foraDaPool = 0, custoForaPool = 0) => {
  // {jogo: numero de copias}
  let JOGOS = {}

  for (let i = 1; i <= nJogos; i++) {
    let key = "Jogo_" + i
    let copias = 0
    let total_rolls = rolls
    let current_roll = 1
    let rolls_whithout_find = 1

    while (current_roll <= total_rolls) {
      let chance = computeOneChamp(cost, level, rolls_whithout_find, copias + foraDaPool, custoForaPool)
      let isFound = chance > Math.random()

      if (isFound) {
        rolls_whithout_find = 1
        copias++
      } else {
        rolls_whithout_find++
      }

      current_roll++
    }

    JOGOS[key] = copias
  }

  return JOGOS
}

const TOTAL_JOGOS = 500
const RESULT = {}

Object.values(simuladorJogo(TOTAL_JOGOS, 40, 3, 7, 6, 6 * 8)).forEach(copias => RESULT[copias] ? RESULT[copias]++ : RESULT[copias] = 1)
console.log(RESULT)

const menosDuasCopias = Object.keys(RESULT).reduce((acc, key) => {
  if (key < 3) {
    return acc += RESULT[key]
  }
  return acc += 0
}, 0)
const maisTresCopias = TOTAL_JOGOS - menosDuasCopias
const maisNoveCopias = Object.keys(RESULT).reduce((acc, key) => {
  if (key >= 9) {
    return acc += RESULT[key]
  }
  return acc += 0
}, 0)

console.log("SIMULAÇÂO DE " + TOTAL_JOGOS + " JOGOS")
console.log("Jogos com menos de duas cópias: ", menosDuasCopias, " isto é ", formatPercentage(menosDuasCopias / TOTAL_JOGOS))
console.log("Jogos com mais de três cópias: ", maisTresCopias, " isto é ", formatPercentage(maisTresCopias / TOTAL_JOGOS))
if (RESULT[0]) console.log(`Low Roll Extremo em ${RESULT[0]} jogos, achando 0 copias`)
if (maisNoveCopias > 0) console.log(`High Roll Extremo em ${maisNoveCopias} jogos, achando bunecão 3 estrelas`)