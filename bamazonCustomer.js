var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Maxfam123",
  database: "bamazondb"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
  if (err) throw err;
  console.log("You are now connected to the Bamazon!!\n")
  listSaleItems();
  connection.end();
});

function listSaleItems() {
  var query = connection.query("SELECT item_id, product_name, price FROM products", function (err, result) {
    console.log(result);

    inquirer
      .prompt({
        name: "item_id",
        type: "input",
        message: "\nWhat is the ID number of the product you would like to buy?",
        // trying to push the information to the database.
        options: function () {
          var shopItem = [];
          for (var i = 0; i < results.length; i++) {
            shopItem.push(results[i].item_name);
            console.log("item available");
          }
          return shopItem;
          console.log("item available");
        },
    });
  })
};

// PSEUDO CODE-- CHALLEGE #1: CUSTOMER VIEW

// once the user selected the desired item by ID, create a
// function that would log the input.

// Ask user how many of the selected item do they wish to purchase?
// create a funtion that would verify if quantity of of items selected 
// are still available. 

// using if and else statement, console log results if items available 
// to confirm the purchase. 
// list total sales price.
// console log if items selected are not available. then prompt user to 
// select a different item.