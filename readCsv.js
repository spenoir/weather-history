#! /usr/bin/env node

var fs = require('fs');
var parse = require('csv-parse/lib/sync');
var minimist = require('minimist');

var readCsv = function (filename){

  var filepath = __dirname + '/src/assets/'+ filename._.shift();
  fs.readFile(filepath + '.csv',"utf-8", (err, data) => {
    if (err) {
      throw err;
    } else {

      var records = parse(data, {columns: true, delimiter: ' '});
      console.log(records[0]);
      fs.writeFile(filepath + '.json', JSON.stringify(records), {encoding: 'utf8'});
    }

  })

};

exports = (function (argv) {
  "use strict";

  if (argv) {
    readCsv(argv);
  }


}(minimist(process.argv.slice(2))));