# node-es6-unit-test


##Start Project
Command : $ npm run dev
```
Express started
```

###GET
#####http://localhost:3000/tasks 
Response
 ```
{
  "status": true,
  "data": [
    {
      "_id": "581a6e1d20ce551e64900b7d",
      "name": "initial project",
      "__v": 0,
      "date": "2016-11-02T22:52:13.149Z",
      "completed": false
    },
    {
      "_id": "581a6e2a20ce551e64900b7e",
      "name": "initial project",
      "__v": 0,
      "date": "2016-11-02T22:52:26.027Z",
      "completed": false
    }
  ]
}
  ```



###Post
#####https://localhost:3000/tasks
  Body Request
 ```
 {
   "name":"initial project"
 }
 ```
 Response
```
 {
   "status": true,
   "data": {
     "__v": 0,
     "name": "initial project",
     "_id": "581a6e2a20ce551e64900b7e",
     "date": "2016-11-02T22:52:26.027Z",
     "completed": false
   }
 }
 ```


## Run tests
Command : $ npm run test
```
  calc test
    ✓ should sum return 4
    ✓ stub func

  request test
    ✓ should request website and return status 200
    ✓ should have body not null

  Tasks
    ✓ should create a new task
    ✓ should remove one task by id
    ✓ should return all tasks
    ✓ should return error find

  Task Request
    ✓ should make a request and return a list of tasks
    ✓ should make a request and not send name form data
    ✓ should make a request and send name form data

  Task Mock Http Request
    ✓ should make a mock request and return a list of tasks
    ✓ should make a mock request and not send name form data
    ✓ should make a mock request and send name form data


  14 passing (2s)

```