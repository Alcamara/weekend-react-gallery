const pg = require('pg');

const config = {
    host:'localhost',
    port: 5432,
    database:"react_gallery"
};

const pool = new pg.Pool(config)

pool.on('connect',()=>{
    console.log('Connected to postgres');
})

pool.on('error',()=>{
    console.log('Error connecting to postgres');
})


module.exports = pool;