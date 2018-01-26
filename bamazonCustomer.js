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
        message:"\nWhat is the ID number of the product you would like to buy?"
      }).then(function (result) {
        console.log("result:", result.item_id);
      })

  })
};

  