# devops-assessment
 
### Description
* This exercise is to test your skills with Node.js, Docker, and Kubernetes. You will need to dockerize a Node.js app, build out the image, and deploy it to Kubernetes.
 
### Tasks
* Build an endpoint in the Node.js app to return fake data
* Build dockerfile to containerize the repository
* Build the docker image from that dockerfile
* Upload that image to docker registry
* Build the Kubernetes files to deploy the application
* Deploy the application to Kubernetes cluster
* Update Nginx to support port to the deployed application
* Build CI/CD pipeline files (your preference)
* In the home directory include the following files for our review:
   * Dockerfile
   * Kubernetes deployment files
   * Pipeline files
* Bonus deploy something else to the cluster
 
### Access Info
* SSH
   * User: ubuntu
   * Host: firstInitialLastName.edifyops.dev
       * Example: jsmith.edifyops.dev
   * Key: link to bucket included the email from us
 
### Environment
* Ubuntu
* Minikube
* Docker Registry
* Nginx

### Source Code
* This repo will be located in the home folder of your server

### Services
| Service | Port |
| ------ | ------ |
| Minikube | 9443 |
| Docker Registry | 7000 |
| App | 443 |
 
### IMPORTANT NOTE!!
* Currently there is an issue with kubectl remote access. Changes will need to be made on the box.
 
### Questions
* Email devops-assessment@edify.cx