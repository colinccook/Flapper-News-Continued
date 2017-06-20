# Flapper News Continued
This project is a continuation of the excellent MEAN tutorial provided by Thinkster.io. 

Specifically I wanted to:
* Separate the UI and the service layer
* Dockerize the app
* Finish the suggested improvements to further my understanding of AngularJS and ExpressJS
* Get Continuous Integration running across Github, Docker Cloud and an Azure VM

# How to run locally

The only pre-requisite is to install Docker on your favourite OS. I've been developing on macOS so Windows may be hit or miss.

* Clone the repository to your local machine, go to it
* Ensure Docker is installed and running
* Run "./srbu" in a terminal (read below first)
* Once built, navigate to http://localhost:8090

And use <kbd>CTRL</kbd> + <kbd>Z</kbd> to stop, as you would any long running terminal process.

# The srbu script

The srbu script is shorthand for stopping all local containers, removing them, rebuilding the project containers then running them. You MAY NOT want to remove all local Docker Contains.

If you simply want to rebuild and run the app, use the following commands:

```bash
docker-compose build
docker-compose up
```