// Exercise 2 - `getIssPosition`
// -----------------------------

const { get } = require('request-promise');
const request = require('request-promise');

const getIssPosition = async () => {
  try {
    const response = await request("http://api.open-notify.org/iss-now.json");
    const issLocation = await JSON.parse(response);
    const lat = issLocation.iss_position.latitude;
    const lng = issLocation.iss_position.longitude;
    console.log(lat, lng)
    return {
      lat: lat,
      lng: lng
    }; 
  } catch (err) {
    console.log('Error: ', err);
  }
};

//  async await option to log the result
// const log = async () =>{
//   const issposition = await getIssPosition()
//   console.log(issposition)
// }
// log()

getIssPosition().then((result) => { console.log(result)})
