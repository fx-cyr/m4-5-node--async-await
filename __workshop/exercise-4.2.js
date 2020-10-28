const request = require('request-promise');

const getTronaldDumpQuote = async () => {
  // write write write
  try {
    const theDonald = {
      uri: "https://api.tronalddump.io/random/quote",
      headers: {"Accept":"application/json"}
    }
    const response = await request(theDonald)
    const parsedResponse = await JSON.parse(response)
    // console.log(parsedResponse)
    const quote = parsedResponse.value
    return quote
  }
  catch(error) {
    console.error(error)
  }
};

getTronaldDumpQuote().then((data) => console.log(data));

module.exports = {getTronaldDumpQuote}
