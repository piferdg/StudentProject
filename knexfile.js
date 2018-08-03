module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/g90_crud_project'
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL
}

}
