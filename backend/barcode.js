const mysql = require('mysql');

/**
 * Query the database and return if barcode exists.
 * @param {string} barcode 
 * @param {*} callback 
 */
const GetBarcodesFromDBAndCompareBarcodes = (barcode, callback) => {

    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'db_teste'
    });

    connection.connect();

    connection.query('SELECT * FROM `barcodes` where `barcode` = ?', [barcode], function (error, results, fields) {
        if (error)
            callback(error, null);
        else
            callback(null, results);
    });

    connection.end();
}

module.exports = { GetBarcodesFromDBAndCompareBarcodes }