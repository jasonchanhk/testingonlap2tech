DROP TABLE IF EXISTS dishes;

CREATE TABLE dishes (
    dishid INT,
    dishname VARCHAR(100),
    flavor VARCHAR(100),
    price FLOAT
);

DROP TABLE IF EXISTS chefs;

CREATE TABLE chefs (
    chefid INT,
    chefname VARCHAR(100),
    title VARCHAR(100)
);

DROP TABLE IF EXISTS cooks;

CREATE TABLE cooks (
    chefid INT,
    dishid INT
);

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    username VARCHAR(100),
    password VARCHAR(100)
);
