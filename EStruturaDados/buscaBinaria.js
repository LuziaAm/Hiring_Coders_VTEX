let valores = [5, 8, 10, 22, 38, 45, 60, 90, 100, 120]

function buscaBinaria(num) {
  let inicio, meio, fim, passo
  inicio = 0
  fim = 9
  passo = 0

  while (inicio < fim) {
    meio = parseInt((inicio + fim) / 2)
    passo = passo + 1
    if (num == valores[meio]) {
      console.log('Achei em ' + passo + ' passos')
      return meio
    } else {
      if (num > valores[meio]) {
        inicio = meio + 1
      } else {
        fim = meio - 1
      }
    }
  }
  console.log('Não achei em ' + passo + ' passos')
  return -1
}

console.log(buscaBinaria(10))

console.log(buscaBinaria(50))

console.log(buscaBinaria(60))
