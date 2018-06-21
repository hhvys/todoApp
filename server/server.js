import express from 'express';
import {MongoClient} from 'mongodb';
import bodyParser from 'body-parser';

const app = express();
const CLIENT_ADDRESS = "http://localhost:8080";
const FAILED = 1;
const OK = 0;
const dbUrl = "mongodb://localhost:27017";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', CLIENT_ADDRESS);
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	next();
});

app.get('/', (req, res) => {

	MongoClient.connect(dbUrl, function(err, db) {

		if (err) res.send(undefined);

		const dbo = db.db("mydb");
		dbo.collection("todoApp").find({}).toArray(function(err, result) {
			if (err) res.send(undefined);
			delete result[0]._id;
			db.close();
			res.send(result[0]);
		});

	});
});

app.post('/', (req, res) => {

	MongoClient.connect(dbUrl, function(err, db) {
		if (err) res.send(FAILED);

		const dbo = db.db("mydb");
		dbo.collection("todoApp").deleteMany({}, function(err, obj) {
			if (err) throw err;

			dbo.collection("todoApp").insertOne(JSON.parse(req.body.payload), function(err, res) {
				if (err) throw err;
				db.close();
			});

		});

	});

	res.send(OK);
});

app.listen(8081);
