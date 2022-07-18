const db = require('../dbConfig');

class User {
    constructor(data) {
        this.username = data.username
        this.password = data.password
    }

    static get all() {
        return new Promise(async (resolve, reject) => {
            try {
                const usersData = await db.query(`SELECT * FROM users;`)
                const users = usersData.rows.map(d => new User(d))
                resolve(users)
            } catch (err) {
                reject("Error retrieving users")
            }
        })
    }

    static create({ username, password }) {
        return new Promise(async (resolve, reject) => {
            try {
                let usersData = await db.query(`INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *;`, [username, password])
                let user = new User(usersData.rows[0])
                resolve(user)
            } catch (err) {
                reject("Error retrieving users")
            }
        })
    }

    static findByUsername(username) {
        return new Promise(async (resolve, reject) => {
            try {
                const usersData = await db.query(`SELECT * FROM users WHERE username = $1;`, [username])
                const user = new User(usersData.rows[0])
                resolve(user)
            } catch (err) {
                reject("User not found")
            }
        })
    }
}

module.exports = User
