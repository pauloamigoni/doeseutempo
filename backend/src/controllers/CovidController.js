const axios = require("axios");

module.exports = {
  async index(request, response) {

axios({
    "method":"GET",
    "url":"https://covid-19-data.p.rapidapi.com/country",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"covid-19-data.p.rapidapi.com",
    "x-rapidapi-key":"hQOnoYWCCQmshc1IinAKZ3MFBreZp1qs1mcjsnksGjtWj83iVs"
    },"params":{
    "format":"json",
    "name":"Italy"
    }
    })
    .then((response)=>{
      console.log(response)
    })
    .catch((error)=>{
      console.log(error)
    })

  }
}