const pgp = require("pg-promise")

module.exports = pgp()('postgres://postgres:12345@localhost:5432/ccca')