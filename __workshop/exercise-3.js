// Exercise 3
// ----------

const doublesLater = (num) => {
  return new Promise((resolve) => {
  // 1. waits 2 seconds (You could console a message here. It might make the 2 second wait easier ;)
  setTimeout(() => {
    resolve(num * 2) }, 2000);
  // 2. returns the double of the num
})}

const handleSum = async (num) => {
try {
  firstNum = await doublesLater(num)
  secondNum = await doublesLater(firstNum)
  result = await doublesLater(secondNum)
  return result
}
catch(error) {
  console.error(error)
}
}
// 3. handleSum function (async/await)

// 4. verification
handleSum(10).then((ans) => console.log(ans));
