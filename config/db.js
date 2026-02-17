const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgresql://ims:jXpVFvYMTr8iA4toEhgtFxREtY46Lcoj@dpg-d69il7emcj7s738ppf4g-a.oregon-postgres.render.com/finalproject_db_1bv6',
  ssl: {rejectUnauthorized: false}
});


module.exports = pool;