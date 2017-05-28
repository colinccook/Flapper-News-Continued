# Flapper-News-Continued
Continuing work from the original Flapper News tutorial from Thinkster.io




#Running mongo with docker

docker run -p 27017:27017 -d --name db mongo


# Build and run flapper-news-continued iamge

docker build -t “colinccook/flapper-news-continued“ .

docker run -p 3000:3000 -d —name flapper colinccook/flapper-news-continued 

(the above command spits out an ID which you can use docker logs {id} to view output)