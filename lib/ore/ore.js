const { d10 } = require('../dice')

const roll = (number) => {
  const rolls = d10(number).sort((a,b) => { return a - b })

  const counts = Array.from(rolls.reduce((rollCount, roll) => {
    rollCount[roll] = ++rollCount[roll] || 1
    return rollCount
  }, [])).map((item) => {
    return item || 0
  })

  const sets = counts.map((count, roll) => {
    return {width: count || 0, height: roll} || 0
  }).filter((roll) => {
    return roll.width > 1
  }).sort((a,b) => {
    a.height - b.height
  })

  const widestWidth = Math.max(...counts)
  const widestSets = sets.filter((roll) => {
    return roll.width === widestWidth
  })

  const tallestSet = sets.slice(-1)[0]

  return { rolls, counts, sets, widestSets, tallestSet }
}

module.exports = { roll }
