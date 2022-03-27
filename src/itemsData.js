const database = require("./database")

exports.getItems = () =>{
  return database.query('select * from item')
}