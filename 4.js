const names = ['Kazimierz', 'Boguslaw', 'Gniewomir', 'Kasper', 'Olaf']
console.log(names.map(n => n.replace(/[aA]/g, 4).replace(/[eE]/g, 3).replace(/^(...)(.+)(...)$/, '$1...$3')))
