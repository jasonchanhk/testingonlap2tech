INSERT INTO dishes (dishid, dishname, flavor, price) 
VALUES
    (1001, 'Sweet and sour Shrimp', 'Sweet and sour', '9.5' ),
    (1002, 'Salty beef sandwich', 'Salty', '6.5' ),
    (1003, 'Spicy chicken', 'Spicy', '11.5' ),
    (1004, 'Sour dough with avocado and cheese', 'Sour', '8.5' );

INSERT INTO chefs (chefid, chefname, title) 
VALUES
    (101, 'James', 'Director' ),
    (102, 'Jason', 'Senior' ),
    (103, 'Amy', 'Junior' ),
    (104, 'Irene', 'Porter' );

INSERT INTO cooks (chefid, dishid) 
VALUES
    (101, 1001 ),
    (101, 1002 ),
    (101, 1003 ),
    (101, 1004 ),
    (102, 1002 ),
    (102, 1003 ),
    (102, 1004 ),
    (103, 1001 ),
    (103, 1004 );

