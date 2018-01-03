# acrux-app
web application template based on Domain Driven Design (DDD) and SOA concept 

## Solution structure

### Infrastructure
    This folder contains solutions regarding buisness libraries, custom ui components, Logging, security, Domain seedwork etc. which are going to be used by all other solutions in project

### Server
    Server application whichserves as middelware between different client applications (like web, windows or mobile application) and our services.
    It is also responsible for authentication and security purpose

### Web client
    SPA web application which then is going to communicate to Server application

### Services
    This folder contains all the services which this project is going to provide. Every service is going to get hosted on their own.