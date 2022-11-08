const Pool = require('pg').Pool;
const pg_conn = new Pool (
    {
        user:'elwfaelnivrujn',
        password:'d681d9f459bfd205ba40f557d57afbc09be6e2c895e64f1ddc2ca70e843759da',
        host:'ec2-44-208-236-253.compute-1.amazonaws.com',
        database:'daeukfaoqkd4o1',
        port:5432,
        ssl: {
            rejectUnauthorized: false
        },
    });

module.exports = pg_conn;