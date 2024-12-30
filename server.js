// server.js
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const { createHandler } = require("graphql-http/lib/use/express")
const { buildSchema } = require("graphql")
require('dotenv').config();

const app = express();
const PORT = 3500;

// Middleware
app.use(cors());
app.use(express.json());

// MySQL Database Connection
const db = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
});

db.connect(err => {
	if (err) {
		console.error('Error connecting to MySQL:', err.message);
		return;
	}
	console.log('Connected to MySQL Database');
});

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
	type Query {
		getCards(aid: Int!): [Card]
	}
	type Card {
		pid: Int
		filename: String
		filepath: String
		title: String
		caption: String
		user1: String
	}
	type Variables {
		aid: Int
	}
`)

// Resolver to fetch data by "aid"
const resolvers = {
	getCards: (params) => {
		return new Promise((resolve, reject) => {
			const query = `SELECT pid,filename,filepath,title,caption,user1 FROM cpg14x_pictures WHERE aid = ${params.aid} ORDER BY ctime DESC`;
			db.query(query, (err, results) => {
				if (err) {
					console.error('Database query error:', err.message);
					reject(err);
				} else {
					resolve(results);
				}
			});
		});
	}
}


// Server
app.all(
	'/api/graphql',
	createHandler({
		schema,
		rootValue: resolvers,
		graphiql: true, // Enable GraphiQL for testing queries
	})
);

// Start Server
app.listen(PORT, () => {
	console.log(`GraphQL MySQL Server running at //localhost:${PORT}`);
});
