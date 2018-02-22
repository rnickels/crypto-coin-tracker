function* doSomething() {
  yield 'You are a spiketail...'
  yield '...so we will call you spike'
}
var gen = doSomething()

function* adding() {
  var result = 1 + 1
  return 20 + (yield result)
}

var sum = adding()

console.log(sum.next())
console.log(sum.next(5))