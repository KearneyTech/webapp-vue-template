export const state = () => ({
    list: [
        { title: "title", description: "desc", content: "something"},
        { title: "Brand New", description: "Get it while it's hot!", content: "Deal of the Century!!!"}
    ],
    blog: {
        entries: [
            { title: "title", description: "desc", content: "something",
            entry: "I want to create training material for a front end development project."
        }
        ]
    }
})

export const mutations = {
    add(state, item) {
        state.list.push(item)
    },
    delete(state, index ) {
        console.log("index", index)
        state.list.splice(index, 1)
    }
}
/**
var mysql = require('mysql')
var connection = mysql.createConnection({
  host: '192.168.1.239',
  user: 'root',
  password: 'password',
  database: 'item_db'
})

connection.connect()

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})

connection.end()*/