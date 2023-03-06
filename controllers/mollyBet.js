var axios = require("axios").default;

var options = {
  method: 'POST',
  url: 'https://api.mollybet.com/v1/sessions/',
  headers: {'Content-Type': 'application/json'},
  data: {username: 'doctort', password: 'Dubai123'}
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});