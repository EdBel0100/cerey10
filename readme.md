## Frontend

This is the frontend and it is powered by expo/react native. The design is inspired by tinder.


## Tech Stack

- **Expo & React Native** - Mobile application development
- **RTK Query & Redux** — State management and communication with the backend API
- **Tailwind CSS & NativeWind** — Styling and UI development
- **AWS Cognito** — Authentication and user session management


--------------------------------

## BACKEND

The backend uses the MVC design pattern and uses 

## TechStack
  
- **NestJs - The actual backend utilizing the MVC design pattern
- **Prisma - Prisma is the object relational mapper allowing easy communication between the backend and the database
- **Postgres - Postgres is the database  

## Extra

- Guards, I used NestJs' guards with cognito to secure the whole backend


--------------------------------

## Ingestion scripts:

Each scripts are intended to scrape a supermarket, the goal was to store all of this data in a lake or unordered fashion and feed it to the ai model each week such that it can generate relevent recipes.


--------------------------------

## Infrastructures:

This part uses aws cdk to build the infrastructures needed to host this project.
