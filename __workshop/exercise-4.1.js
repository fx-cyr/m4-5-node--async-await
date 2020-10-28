const request = require("request-promise");

const getDadJoke = async () => {
    try {
        const jokeObj = {
            uri: "https://icanhazdadjoke.com/",
            headers: {"Accept":"application/json"}
        }      
        const response = await request(jokeObj)
        const parsedResponse = await JSON.parse(response)
        // console.log(parsedResponse)
        const joke = parsedResponse.joke
        return joke
    } 
    catch (err) {
      console.log('Error: ', err);
    }
  };

getDadJoke().then((data) => console.log(data));
