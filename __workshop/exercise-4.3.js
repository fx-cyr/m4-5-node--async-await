const request = require('request-promise');

const getGeekJoke = async () => {
  // ha hahahh
  try {
    let options = {
      url: 'https://geek-jokes.sameerkumar.website/api?format=json',
      method: 'GET'
  }
  
  const response = await request(options, (err, response, body) => {
      if(!err && response.statusCode == 200)
    
          return body
  });
  const parsedResponse = JSON.parse(response)
  return parsedResponse.joke
  }
  catch(error) {
   
    console.log(error)
  }
};

getGeekJoke().then((data) => console.log(data));