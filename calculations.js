function increment(x) {
  return x = ++ x
}
console.log(increment(1000))

function decrement (x) {
  return x = -- x
}
console.log(decrement(2000))

function increaseBalance(x, y) {
    return x += y 
  }
console.log(increaseBalance(3000, 700))

function decreaseBalance(x, y) {
  return x -= y
  }
  console.log(decreaseBalance(3000, 700))

function divideBalanceByAccounts(x, y) {
return x /= y
}
console.log(divideBalanceByAccounts(3000, 2))

function getRestAfterDivision(x, y) {
  return x %= y
}
console.log(getRestAfterDivision(7000, 3))
