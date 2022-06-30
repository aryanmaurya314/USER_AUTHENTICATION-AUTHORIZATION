# AUTH APP [User Authentication and Authorization]
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
### 1. Create a new user
```
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
2. Get all the movies
GET /mba/api/v1/movies/

Sample response body :
[
    {
        "_id": "6245ef3fbddfa2ae0d2bba4e",
        "name": "Bachhan Pandey",
        "description": "Comedy Masala Movie",
        "casts": [
            "Akshay Kumar",
            "Jacqueline Fernandiz"
        ],
        "trailerUrl": "http://bacchanpandey/trailers/1",
        "posterUrl": "http://bacchanpandey/posters/1",
        "language": "Hindi",
        "releaseDate": "18-03-2022",
        "director": "Farhad Samji",
        "releaseStatus": "RELEASED",
        "updatedAt": "2022-03-31T18:13:19.828Z",
        "__v": 0
    },
    {
        "_id": "6245ef3fbddfa2ae0d2bba50",
        "name": "Jalsa",
        "description": "Intense Drama Movie",
        "casts": [
            "Vidya Balan",
            "Shefali Shah"
        ],
        "trailerUrl": "http://jalsa/trailers/1",
        "posterUrl": "http://jalsa/posters/1",
        "language": "Hindi",
        "releaseDate": "18-03-2022",
        "director": "Suresh Triveni",
        "releaseStatus": "RELEASED",
        "updatedAt": "2022-03-31T18:13:19.873Z",
        "__v": 0
    },
    {
        "_id": "6245ef3fbddfa2ae0d2bba52",
        "name": "Jhund",
        "description": "Comedy Drama Movie",
        "casts": [
            "Amitabh Bachchan",
            "Abhinay Raj"
        ],
        "trailerUrl": "http://jhund/trailers/1",
        "posterUrl": "http://jhund/posters/1",
        "language": "Hindi",
        "releaseDate": "04-03-2022",
        "director": "Nagraj Manjule",
        "releaseStatus": "RELEASED",
        "updatedAt": "2022-03-31T18:13:19.876Z",
        "__v": 0
    }
]
3. Get the movies based on name
GET /mba/api/v1/movies?name=Jalsa

Sample response body :
[
    {
        "_id": "6245ef3fbddfa2ae0d2bba50",
        "name": "Jalsa",
        "description": "Intense Drama Movie",
        "casts": [
            "Vidya Balan",
            "Shefali Shah"
        ],
        "trailerUrl": "http://jalsa/trailers/1",
        "posterUrl": "http://jalsa/posters/1",
        "language": "Hindi",
        "releaseDate": "18-03-2022",
        "director": "Suresh Triveni",
        "releaseStatus": "RELEASED",
        "updatedAt": "2022-03-31T18:13:19.873Z",
        "__v": 0
    }
]
4. Get the movies based on movie id
GET /mba/api/v1/movies/6245ef3fbddfa2ae0d2bba50

Sample response body :
[
    {
        "_id": "6245ef3fbddfa2ae0d2bba50",
        "name": "Jalsa",
        "description": "Intense Drama Movie",
        "casts": [
            "Vidya Balan",
            "Shefali Shah"
        ],
        "trailerUrl": "http://jalsa/trailers/1",
        "posterUrl": "http://jalsa/posters/1",
        "language": "Hindi",
        "releaseDate": "18-03-2022",
        "director": "Suresh Triveni",
        "releaseStatus": "RELEASED",
        "updatedAt": "2022-03-31T18:13:19.873Z",
        "__v": 0
    }
]
5. Update the movies based on movie id
PUT /mba/api/v1/movies/6245ef3fbddfa2ae0d2bba50

Sample request body :
{
        "name": "Sharmaji Namkeen",
        "description": "Comedy Masala Movie : Updated",
        "casts": [
            "Rishi Kapoor",
            "Juhi Chawla"
        ],
        "trailerUrl": "http://sharmajinamkeen/trailers/1",
        "posterUrl": "http://sharmajisamkeen/posters/1",
        "language": "Hindi",
        "releaseDate": "31-03-2022",
        "director": "Hitesh Bhatia",
        "releaseStatus": "UNRELEASED"
}
Sample response body :
{
    "_id": "6245f0babddfa2ae0d2bba5d",
    "name": "Sharmaji Namkeen",
    "description": "Comedy Masala Movie : Updated",
    "casts": [
        "Rishi Kapoor",
        "Juhi Chawla"
    ],
    "trailerUrl": "http://sharmajinamkeen/trailers/1",
    "posterUrl": "http://sharmajisamkeen/posters/1",
    "language": "Hindi",
    "releaseDate": "31-03-2022",
    "director": "Hitesh Bhatia",
    "releaseStatus": "RELEASED",
    "updatedAt": "2022-03-31T18:19:38.983Z",
    "__v": 0
}
5. Update the movies based on movie id
DELETE /mba/api/v1/movies/6245ef3fbddfa2ae0d2bba50
Sample response body :
{
    "message": "Successfully delete movie with id [ 6245f0babddfa2ae0d2bba5d ]"
}
POSTMAN collection link

Development
Want to improve? Great! Make the changes and raise a PR. Reach out to me over kankvish@gmail.com
