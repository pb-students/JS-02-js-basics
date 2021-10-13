const r = prompt('r = ?') || 0

console.log(...[
  Math.PI * r * 2,
  Math.PI * r ** 2
].map(i => i.toFixed(2)))
