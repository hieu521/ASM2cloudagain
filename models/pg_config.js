const Pool = require('pg').Pool;
const pg_conn = new Pool (
    {
        user:'nrwmsqhxfivpst',
        password:'52600808eae93efbc5bb250191bbed61581b7f321a9de0ffa7e42dd88299afd2',
        host:'ec2-54-163-34-107.compute-1.amazonaws.com',
        database:'dig8rncr5hug1',
        port:5432,
        ssl: {
            rejectUnauthorized: false
        },
    });

module.exports = pg_conn;