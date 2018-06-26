const config = require('./knexfile');
const env = 'development';
const knex = require('knex')(config[env]);

const first = process.argv[2];
const last = process.argv[3];
const birth = process.argv[4];

knex('famous_people')
.insert({first_name: first, last_name: last, birthdate: birth})
  .then(result => {
    console.log(result);
    console.log(`Inserting new famous person ${first} ${last}...`);
  })
  .catch(error => {
    console.log("Error: ", error);
    return Promise.resolve();
  })
  .finally(() => {
    console.log("Query is completed!");
    knex.destroy();
  });





