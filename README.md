# TGA-exercise_6_QuizRT_Question

## to start server

npm start

##To install redis:

brew install redis

## To start redis

redis-server /usr/local//etc/redis.conf

##access the server

http://localhost:3000/

## apis:
/job/

/questions/ - get
/questions/add-question -post
/questions/update-question -post
/questions/update-question-analytics -post   // this is for future usage if required.
/questions/add-questions-from-stub - post


/sparql/sparql-to-json

/stub/ - get
/stub/add-stub - post