
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('famous_people').del()
    .then(function () {
      // Inserts seed entries
      return knex('famous_people').insert([
        {first_name: 'Rihanna',
         last_name: 'Rihanna',
         birthdate: '1986-12-01'
      },
        {first_name: 'Justin',
         last_name: 'Bieber',
         birthdate: '1988-11-25'
       },
        {first_name: 'Beyonce',
         last_name: 'Knowles',
         birthdate: '1985-01-01'
       },
       {first_name: 'Paul',
         last_name: 'Rudd',
         birthdate: '1981-06-22'
       },
       {first_name: 'Paul',
         last_name: 'Giamatti',
         birthdate: '1945-07-13'
       }
      ]);
  });
};
