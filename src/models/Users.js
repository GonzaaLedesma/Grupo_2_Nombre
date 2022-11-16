const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/users.json');

const Usuario = {
	// lista de usuarios
	allUsers: function () {
        return JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
	},
	// ejemplo: 2
	findUser: function (id) {
		let users = this.allUsers();
		let userFound = users.find(oneUser => oneUser.id === id);
		return userFound;
	},
	// ejemplo: 'email' + algo@gmail.com
	findField: function (field, text) {
		let users = this.allUsers();
		let userFound = users.find(oneUser => oneUser[field] === text);
		return userFound;
	},
	// ingresar lo q nos envia el form register
	create: function (userData) {
		let users = this.allUsers();
		let newUser = {
			id : Date.now(),
			...userData
		}
		users.push(newUser);
		fs.writeFileSync(usersFilePath, JSON.stringify(users, null,  ' '));
		return newUser;
	},
	// ejemplo: 2
	delete: function (id) {
		let users = this.allUsers();
		let deleteUsers = users.filter(oneUser => oneUser.id !== id);
		fs.writeFileSync(usersFilePath, JSON.stringify(deleteUsers, null, ' '));
		return true;
	}
}


module.exports = Usuario;

