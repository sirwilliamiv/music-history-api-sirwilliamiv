#### Music History API
Try your hand at building an API for an existing database. Included in this project is the music history db you worked with back in the first milestone. You will setup your API to query the db and return JSON representations of the data to the client. It will require a slightly different setup from the TV Shows project we live coded, the most obvious thing being a lack of need to create migrations, since the db and tables already exist. 

### Instructions
+  use the included musichistory.db
    + Note that it's SQLite, not postgres
+ Look through every file for hints/instructions for how to proceed
+ Remember to run npm install first
+ Dont worry about testing. Just focus on really understanding all the moving parts of this app
+ DO NOT copy and paste from the TV shows API. Reference it for sure, but type the code so you take the time to understand it
+ If you get this error when running `git add`, "CRLF would be replaced by LF in knexfile.js":
    + brew install dos2unix
    + Then in root directory run `find knexfile.js -type f -exec dos2unix {} +`
