const db = require('../dbConfig');

class Dish {
    constructor(data) {
        this.dishid = data.dishid
        this.dishname = data.dishname
        this.flavor = data.flavor
        this.price = data.price
    }

    static get all() {
        return new Promise(async (resolve, reject) => {
            try {
                const dishesData = await db.query(`SELECT * FROM dishes;`)
                const dishes = dishesData.rows.map(d => new Dish(d))
                resolve(dishes)
            } catch (err) {
                reject("Error retrieving dish")
            }
        })
    }

    static findById(id){
        return new Promise(async (resolve, reject) => {
            try {
                const dishesData = await db.query(`SELECT * FROM dishes WHERE dishid = $1;`, [ id ])
                const dish = new Dish(dishesData.rows[0])
                resolve(dish)
            } catch (err) {
                reject("Dish not found")
            }
        })
    }

    static create(data){
        return new Promise (async (resolve, reject) => {
            try {
                let dishesData = await db.query(`INSERT INTO dishes (dishid, dishname, flavor, price) VALUES ($1, $2, $3, $4) RETURNING *;`, [ data.dishid, data.dishname, data.flavor, data.price ]);
                let newDish = new Dish(dishesData.rows[0]);
                resolve (newDish);
            } catch (err) {
                reject('Error creating new Dish');
            }
        });
    }

    update(value){
        return new Promise (async (resolve, reject) => {
            try {
                let dishesData 
                if(value == 'add'){ 
                    dishesData = await db.query(`UPDATE dishes SET price = price + 1 WHERE dishid = $1 RETURNING *;`, [ this.dishid ]);
                }else{
                    dishesData = await db.query(`UPDATE dishes SET price = price - 1 WHERE dishid = $1 RETURNING *;`, [ this.dishid ]);
                }
                let newDish = new Dish(dishesData.rows[0]);
                resolve (newDish);
            } catch (err) {
                reject('Error creating new Dish');
            }
        });
    }

    destroy(){
        return new Promise (async (resolve, reject) => {
            try {
                await db.query(`DELETE FROM dishes WHERE dishid = $1 RETURNING *;`, [ this.dishid ]);
                resolve ('Dish was deleted');
            } catch (err) {
                reject('Error creating new Dish');
            }
        });
    }
}

module.exports = Dish
