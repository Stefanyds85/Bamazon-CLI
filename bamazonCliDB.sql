-- CREATING THE DATABASE--
CREATE DATABASE bamazondb;

-- LIST DATABASE THAT IS TO BE USED--
USE bamazondb;

-- CREATING THE TABLE AND LISTING THE DESIRED COLUMNS--
CREATE TABLE products(
	item_id INT NOT NULL AUTO_INCREMENT,
    product_name varchar (150) not null,
    department_name varchar (100) not null,
	price decimal (10,3) null,
	stock_quantity decimal(10,3) null,
	primary key (item_id)

);

-- INSERTING THE DATE TO THE TABLE--
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Childrens Bike', 'Toys', 200.00, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Toaster', 'Appliances', 20.00, 300);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Sprinkler', 'Gardening', 10.00, 500);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Headphones', 'Electronics', 150.00, 200);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('TV', 'Electronics', 650.00, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Dresser', 'Furniture', 135.00, 75);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Car Seat', 'Childrens', 225.00, 170);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Comforter Set', 'Bedding', 55.00, 130);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Dog Chew Toy', 'Pets', 15.00, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Tires', 'Auto', 150.00, 100);
