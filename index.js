function calculate(arr) {
  const operands = []
  let operation = null
  const findOperation = ['+', '-', '*', '/']


  for (let i = 0; i < arr.length; i++) {
    if (Number.isInteger(arr[i]) || Number.isInteger(parseInt(arr[i]))) {
      operands.push(arr[i])
    }
    else if (arr[i] === null) {
      operands.push(0)
    }
    else if (isOperation(findOperation, arr[i])) {
      operation = arr[i]
    }
  }

  if (findOperation.indexOf(operation) === -1) {
    return NaN
  }

  switch (operation) {
    case '*':
      return operands[0] * operands[1]

    case '/':
      return operands[0] / operands[1]

    case '+':
      return operands[0] + operands[1]

    case '-':
      return operands[0] - operands[1]
  }
}

function isOperation(findOperation, symbol) {
  for (let i = 0; i < findOperation.length; i++) {
    if (findOperation[i] === symbol) return true
  }

  return false
}

module.exports = calculate
