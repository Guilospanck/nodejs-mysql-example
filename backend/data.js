const mysql = require('mysql');

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
            callback(err, null);
        else
            callback(null, results);
    });

    connection.end();
}

module.exports = { GetBarcodesFromDBAndCompareBarcodes }