const products = 'jajka, mleko, masło, chleb'
const priceTable = products.split(',').map(p => ({ name: p.trim(), price: +Math.random().toFixed(2) }))
console.log(priceTable)

const bought = []

while (bought.length < priceTable.length / 2) {
  const i = Math.random() * priceTable.length ^ 0
  if (bought.some(({ name }) => name === priceTable[i].name)) {
    continue
  }

  const { name, price } = 
  bought.push({
    ...priceTable[i],
    quantity: Math.random() * 10 + 1 ^ 0
  })
}

console.log(bought)
console.log(+bought.reduce((a, { price, quantity }) => a + price * quantity, 0).toFixed(2))
