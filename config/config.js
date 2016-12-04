module.exports = {
    "development": {
        "username": "dev",
        "password": "dev",
        "database": "timebarter_development",
        "host": "127.0.0.1",
        "dialect": "postgres",
        "uri": "postgres://localhost:5432/timebarter_development"
    },
    "test": {
        "username": "root",
        "password": null,
        "database": "timebarter_test",
        "host": "127.0.0.1",
        "dialect": "postgres",
        "uri": "postgres://localhost:5432/timebarter_test"
    },
    "production": {
        "username": process.env.POSTGRESS_USERNAME,
        "password": process.env.POSTGRES_PASSWORD,
        "database": process.env.POSTGRES_DATABASE,
        "host": process.env.POSTGRES_HOST,
        "dialect": "postgres",
        "uri": process.env.DATABASE_URL
    }
}
