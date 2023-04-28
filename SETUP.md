# Project Setup Instructions

## Environment Variables Setup
Create a file named ".env" in the root directory, and add the following variables:
```
PORT=<backend port (3001 suggested)>
MONGO_URI=<Mongo Database URI connection string>
```

Either use a local MongoDB instance, or use a service online such as [MongoDB Atlas](https://www.mongodb.com/atlas).

## Back End
```bash
cd server
npm i
node server.js
```

## Front End
```bash
cd client
npm i
npm start