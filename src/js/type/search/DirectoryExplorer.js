const os = require('os');
const fs = require('fs');

const Fuzzaldrin = require('fuzzaldrin-plus');

let homedir = os.homedir();
let fileList = fs.readdirSync(homedir);

/*function init () {
    return new Promise(function (resolve, reject) {
        if (fileList) {
            resolve(fileList);
            return;
        }
        fs.readdir(homedir, null, function (error, data) {
            alert('Gooda?');
            if (error) {
                reject(error);
            } else {
                fileList = data;
                resolve(data);
            }
        });
    });
}*/

function filter (fileList, query) {
    return Fuzzaldrin.filter(fileList, query);
}

module.exports = {
    filter: function (query) {
        return filter(fileList, query);
    }
}
