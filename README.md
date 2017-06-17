# Flapper-News-Continued
Continuing work from the original Flapper News tutorial from Thinkster.io




# Create a mongodb database called 'mongo'

docker run -p 27017:27017 -d --name mongo mongo


# Build and run flapper-news-continued image, linked to 'mongo'

docker build -t colinccook/flapper-news-continued .

docker run -p 3000:3000 --name flapper --link mongo:mongo -d colinccook/flapper-news-continued




(the above command spits out an ID which you can use docker logs {id} to view output)




Things I'm following while progressing
https://alexanderzeitler.com/articles/docker-machine-and-docker-compose-developer-workflows/

https://www.youtube.com/watch?v=Qw9zlE3t8Ko - docker compose v3


Stop and remove all local docker images
=======================================

docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)