const config = require('./knexfile');
const env = 'development';
const knex = require('knex')(config[env]);
//const moment = require('moment');

function getArgument() {
  return process.argv[2]; //
}

const displayResult = result => {
  console.log(`Found ${result.length} person(s) by the name '${process.argv[2]}': `);
  result.forEach(function (info, index) {
    let count = index ++;
    let firstName = info.first_name;
    let lastName = info.last_name;
    let birthdate = info.birthdate;
    console.log(`- ${index}: ${firstName} ${lastName}, born '${birthdate}' `);
  });
};

//knex select statement
knex
.select("first_name", "last_name", "birthdate")
.from("famous_people")
.where({first_name: process.argv[2]})
.orWhere({last_name: process.argv[2]})
.then(result => {
  displayResult(result);
})
.catch(error => {
  console.log("Error: ", error);
  return Promise.resolve();
})
.finally(() => {
  console.log("Query is completed!");
  knex.destroy();
});