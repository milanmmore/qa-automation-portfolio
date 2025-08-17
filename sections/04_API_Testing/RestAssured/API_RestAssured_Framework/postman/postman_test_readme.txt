Install node
install json-server using following terminal command
npm install -g json-server
Create a db.json file with the following content
{
  "posts": [
    { "id": 1, "title": "Post 1", "author": "Author 1" },
    { "id": 2, "title": "Post 2", "author": "Author 2" }
  ]
}
Start the json-server using the following terminal command
npx json-server db.json



