# <p align="center">SocialFollower</p>
 <p align="center">SocialFollower is an application that gives insightful feedback on the user's social media growth</p>
 <br>
 <p align="center"> <img src="https://ziadoua.github.io/m3-Markdown-Badges/badges/TypeScript/typescript1.svg"> <img src="https://ziadoua.github.io/m3-Markdown-Badges/badges/React/react1.svg"> <img src="https://ziadoua.github.io/m3-Markdown-Badges/badges/Docker/docker1.svg"> <img src="https://ziadoua.github.io/m3-Markdown-Badges/badges/NodeJS/nodejs1.svg"> <img src="https://ziadoua.github.io/m3-Markdown-Badges/badges/Storybook/storybook1.svg"> <img src="https://ziadoua.github.io/m3-Markdown-Badges/badges/TailwindCSS/tailwindcss1.svg"> <img src="https://ziadoua.github.io/m3-Markdown-Badges/badges/ViteJS/vitejs1.svg"></p>
<p align="center"> <img src="https://skillicons.dev/icons?i=appwrite,tauri"> </p>
<hr>

> [!WARNING]
> SocialFollower is currently put on hold due to certain necessities required to access analytics and/or oAuth APIs in social media.

## 🤔 How to use it
You can head over to ```socialfollower.xyz/register``` to make an account and look at the platform. Otherwise, you can also clone the repo and run a self-hosted appwrite instance.

### Register and Login
Because the landing page hasn't been designed yet, you will need to head to ```socialfollower.xyz/register``` or ```socialfollower.xyz/login``` respectively

### How to navigate
Once you have an account, you can head over to ```socialfollower.xyz/dashboard``` to have access to the main section of the platform. Because a registered businesss is required to access data from APIs, there is currently no possibility to have dynamic data. Despite this, you can still try the LinkedIn login for yourself that is fully functional.

## 🤨 How it was made

### Frontend
The frontend was made using React, Typescript, Tailwind, shadcn, and Storybook to customize individual components

### Backend
The backend is achieved using Appwrite, which is responsible for most of the authentication, the database etc. I used react-router-dom as the router for the application
Some extra logic is made seperatly in appwrite functions for authentication token exchanges that require a call from the backend.

# ⚖️ License
SocialFollower is licensed under the [MIT License](LICENSE)
