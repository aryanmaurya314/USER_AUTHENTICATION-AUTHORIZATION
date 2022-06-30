# AUTH-APP : User Authentication and Authorization
## *Learning the development of RESTful APIs for backend*
This code base contains logic/structure for creating the Restful APIs for the auth app

## Features
- Setting up project structure and database
- Setting up data models for user resource
- API for CRUD operation on user resource :
  - Ability to create and update it's user resource
  - Ability to read, update and delete user resource by admin only.
## How is the code organized in this repo ?
The whole repo is placed in main branch with multiple folders. 
Each folder contains code for a specific concept.
For example models has the code base for user resource. 


## Prerequisite
- Understanding of Node.js
- Understanding of Async Await
- Mongo DB locally installed and running
## Tech stacks
- Node.js
- Mongodb
## Installation
This app requires Node.js v14+ to run.

Install the dependencies and devDependencies and start the server.
```
cd auth-app
npm install
npm run devStart
```
## REST endpoints
### 1. Register a new user
```json
POST /api/auth/register/

Sample request body :

{
    "name":"Aryan",
    "username":"Aryan10",
    "email":"aryan10@gmail.com",
    "password":"aryan",
    "age":22,
    "address":{
        "city":"Varanasi",
        "pincode":110045
    }
}

Sample response body :

{
    "name": "ARYAN",
    "username": "Aryan10",
    "email": "aryan10@gmail.com",
    "age": 22,
    "isAdmin": false,
    "address": {
        "city": "VARANASI",
        "pincode": 110045
    },
    "_id": "62bde034625f37ca7f4b273d",
    "createdAt": "2022-06-30T17:41:08.235Z",
    "updatedAt": "2022-06-30T17:41:08.235Z",
    "__v": 0
}
```
### 2. Login a existing user
```json
POST /api/auth/login/

Sample request body :

{
    "username":"Aryan10",
    "password":"aryan"
}

Sample response body :

{
    "address": {
        "city": "VARANASI",
        "pincode": 110045
    },
    "_id": "62bde034625f37ca7f4b273d",
    "name": "ARYAN",
    "username": "Aryan10",
    "email": "aryan10@gmail.com",
    "age": 22,
    "isAdmin": false,
    "createdAt": "2022-06-30T17:41:08.235Z",
    "updatedAt": "2022-06-30T17:41:08.235Z",
    "__v": 0,
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmRlMDM0NjI1ZjM3Y2E3ZjRiMjczZCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTY2MTE5MzMsImV4cCI6MTY1NjYxNTUzM30.aC8suY6QjStX29FeO392_kOdzOaqg_xS9kNwuHgJcd0"
}
```

### 3. Get user details by admin only using object id
```json
GET /api/users/find/62bde034625f37ca7f4b273d

Sample request body :
*admin access token must be passed in headers.

Sample response body :

{
    "address": {
        "city": "PUNE",
        "pincode": 110045
    },
    "_id": "62bc639f6016541563b3a351",
    "name": "RAHUL",
    "username": "Aryan02",
    "email": "aryan02@gmail.com",
    "age": 22,
    "isAdmin": false,
    "createdAt": "2022-06-29T14:37:19.228Z",
    "updatedAt": "2022-06-29T14:37:19.228Z",
    "__v": 0
}
```

### . Get all 5 new users by admin only
```json
GET /api/users?new=true           - gives 5 newly registered user like this
GET /api/users?name="ary"         - gives all the users with name containing query letters
GET /api/users?city="delhi"       - gives all the users of query city

Sample request body :
*admin access token must be passed in headers.

Sample response body :

{
    "address": {
        "city": "PUNE",
        "pincode": 110045
    },
    "_id": "62bc639f6016541563b3a351",
    "name": "RAHUL",
    "username": "Aryan02",
    "email": "aryan02@gmail.com",
    "age": 22,
    "isAdmin": false,
    "createdAt": "2022-06-29T14:37:19.228Z",
    "updatedAt": "2022-06-29T14:37:19.228Z",
    "__v": 0
}
```
### 4. Update user by itself and admin only using object id
```json
PUT /api/users/62bde034625f37ca7f4b273d

Sample request body :
*access token must be passed in headers.
*One or more fields can be updated.

{
    "name":"Mohan",
    "password":"aryan"
}

Sample response body :

{
    "address": {
        "city": "VARANASI",
        "pincode": 110045
    },
    "_id": "62bde034625f37ca7f4b273d",
    "name": "MOHAN",
    "username": "Aryan10",
    "email": "aryan10@gmail.com",
    "age": 22,
    "isAdmin": false,
    "createdAt": "2022-06-30T17:41:08.235Z",
    "updatedAt": "2022-06-30T18:00:50.089Z",
    "__v": 0
}
```
### 5. Delete a user by admin only using object id
```json
DELETE /api/users/62bde034625f37ca7f4b273d

Sample request body :
*admin access token must be passed in headers.

Sample response body :

{
    "message": "User deleted successfully."
}
```

### POSTMAN collection [link](https://www.getpostman.com/collections/b3f56b7ea21119befd9d)

## Development
Want to improve? Great! Make the changes and raise a PR. Reach out to me over aryanmaurya314@gmail.com
