# ctse_assignment3_microservices
BSc (Hons) in Information Technology Year 4  Assignment 3 - Microservices SE4010– Current Trends in Software Engineering 

Instructions
      • Assignment is an open-ended group assignment. Creativity is up to you to decide.
      • The same group details (group members, group ID) used for Flutter project should be used.
      • You will have to develop and integrate your own microservices. One member should
      develop one or more microservice.
      • Marks will be allocated for given deliverables, and marking scheme is given below.
      • You will have to submit the implementation before the deadline. (Late submissions are not
      accepted; 50% marks will be decreased from overall marks for any delays).
      • There are two main components in the assignment.
      
o Detailed report (Individual)
You should write a complete report describes your part in the assignment (If four
members in the group, four reports should be submitted)
        - Your component
        - Expected outcomes (mentioned under each task below.)
Name the answer sheet with your ID number and submit in pdf format.

o Viva (Compulsory)
Viva session provide further assessment of your assignment, testing your
knowledge on microservices.


Question
ABC Company sells a range of exclusive products across Sri Lanka through online. The existing
system used by the company has developed using legacy technologies. Currently, ABC Company is
facing issues with their existing architecture. Major issue is the deployment time taken for monolith
webservices, which is impacting other functionalities to non-available during the deployment. As a
decision made by the leadership, it has decided to rewrite the system using modern technologies
and architecture which solves their existing issues with deployment and development.
Implement and integrate (three/four) microservices using spring boot/react or any other language
for any four components listed above. [If you implemented more than four microservices, you
would get additional marks for creativity]


Task 3:
• Create a CICD pipeline using github actions to automatically build and deploy the
microservices into your kubernetes cluster on a commit to ‘main’ branch.
• Expected outcome per microservice:
Github action yaml
Screenshot of a successful action job run log.
if your group has 4 members, the below tasks are expected to be carried out for 4 microservices,
one per each group member.

Task 1:
• Dockerize the microservices and push the builds into your dockerhub. (Each member will
have to dockerize one microservice and push to their own docker hub). Commit the
changes to github.
• Expected outcome per microservice
Dockerfile
Link of the image in dockerhub
Task 2:
• Go to Google cloud or whatever cloud you can get free credit to. (Google offers 300USD
free credits for new signups). Create a Kubernetes cluster and deploy the dockerized
microservices in Task 1. Once deployed, commit the files to github.
• Expected outcome per microservice:
Deployment.yaml
Service.yaml
Screenshot of pods running in Kubernetes cluster taken via kubectl.
