const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/users.json');

const Usuario = {
	allUsers: function () {
        return JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
	},
}

console.log(Usuario.getData())

module.exports = Usuario;

