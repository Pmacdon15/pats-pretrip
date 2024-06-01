# Pat's Pre-Trips
<img alt="TypeScript" src="https://ziadoua.github.io/m3-Markdown-Badges/badges/TypeScript/typescript2.svg"/> <img alt="Next JS" src="https://ziadoua.github.io/m3-Markdown-Badges/badges/NextJS/nextjs2.svg"/> <img alt="Postgres" src ="https://ziadoua.github.io/m3-Markdown-Badges/badges/PostgreSQL/postgresql1.svg"/> <img alt="Vercel" src="https://ziadoua.github.io/m3-Markdown-Badges/badges/Vercel/vercel2.svg"/> <img alt="JWT" src="https://ziadoua.github.io/m3-Markdown-Badges/badges/JWT/jwt2.svg"/> <img alt="MUI" src="https://img.shields.io/badge/MUI-007FFF.svg?style=for-the-badge&logo=MUI&logoColor=white"/>

# Table of Contents
- [Description](#Description)
- [Disclaimer](#Disclaimer)
- [Deployments](#Deployments)
- [Features](#Features)
  - [Current Features](#Current-Features) 
  - [Coming Soon](#Coming-Soon) 
- [Cloning](#Cloning)
- [Setup](#Setup)
- [Start Up](#Start-Up)
- [Usage](#Usage)

# Description
Conduct and document pre-trip inspections for commercial vehicles with ease. View current and past trips, and create new ones quickly and efficiently Get started today!

# Disclaimer
Pat's Pre-Trips is currently in development and is provided free of charge. As such, we disclaim any liability for damages or issues incurred while using the app. Our service is intended to be used as a convenience and not relied upon as the sole means of conducting pre-trip inspections. We are not responsible for any consequences resulting from its use.
By using Pat's Pre-Trips, you acknowledge that it is a beta product and may contain errors or inaccuracies. We are continually working to improve the app, but we make no warranties or guarantees regarding its performance or reliability.
Pat's Pre-Trips is a fun project created to explore the feasibility of a pre-trip inspection app. We hope you find it helpful, but please use it at your own risk.
Let me know if you'd like me to make any adjustments!
# Deployments
Here you can try the app for your self(still in development)
```https
https://pats-pretrip.vercel.app/
```

# Features
## Current Features
1. Security
- User passwords are hashed.
- Authentication is achieved through Json Web tokens and cookies.
2. Trip Management
- Ability to see current trips less than 24 hours old.
- Ability to see past trips more than 24 hours old.
3. Defect Management
- Ability to add on route defects.
- Ability to add remarks to defects on route.
# Coming Soon
1. Defect Management
- Ability to correct defects and list invoice number (Potentially take photo of invoice).
2. Automation
- Location automatically selected by device.
- Time automatically selected by device.

# Cloning
1. Clone repository run this command: 
```bash
git clone https://github.com/Pmacdon15/pats-pretrip.git
```

# Setup
After cloning run: 
```Bash
cd pats-pretrip
```

Once you are inside of the project directory you will have to run a few commands from the root directory to set the project up.
The commands are:
1. Install dependencies:
```Bash
npm i
```
2. Set up .env.local with Vercel Postgres info as while as Pepper phrase and Jwt phrase:
```env
# Created by Vercel CLI
NX_DAEMON=""
PEPPER_PHRASE="ThisCanBeAnything"
POSTGRES_DATABASE=""
POSTGRES_HOST=""
POSTGRES_PASSWORD=""
POSTGRES_PRISMA_URL=""
POSTGRES_URL=""
POSTGRES_URL_NON_POOLING=""
POSTGRES_URL_NO_SSL=""
POSTGRES_USER="default"
SECRET_KEY_JWT="ThisToCanBeAnything"
TURBO_REMOTE_ONLY=""
TURBO_RUN_SUMMARY=""
VERCEL=""

# Needed for authkit-nextjs library example, defined in WorkOS dashboard
WORKOS_REDIRECT_URI="http://localhost:3000/auth/callback"

# Needed for authkit-nextjs library example. Must be at least 32 characters long
WORKOS_COOKIE_PASSWORD=""

WORKOS_CLIENT_ID=""
WORKOS_API_KEY=""

```
it might be easiest to associate your fork with your Vercel Postgres database with your project and add these two Variables to your projects .env:
```env
SECRET_KEY_JWT="NewPassWordHere"
PEPPER_PHRASE="NewPhraseHere"

# Needed for authkit-nextjs library example, defined in WorkOS dashboard
WORKOS_REDIRECT_URI="http://localhost:3000/auth/callback"

# Needed for authkit-nextjs library example. Must be at least 32 characters long
WORKOS_COOKIE_PASSWORD="Obtained through sign up of workos.com"

WORKOS_CLIENT_ID="Obtained through sign up of workos.com"
WORKOS_API_KEY="Obtained through sign up of workos.com"
```
Then download a copy of your env file from vercel for your project.
> **Note**
> This project was meant to be used with a Vercel Postgres database, Work os Auth Kit and I use the Vercel Sdk to communicate with the database.

3. If you want to run it in development run:
```Bash
npm run dev
```

Other words we have to build the project, which is easily done by running:
```Bash
npm run build
```

4. Setup port forwarding on your router for both port 3000 and the answer you gave during setup.

# Start up
Project can be easily started from the root by running:
```Bash
npm run start
```

# Usage
Then you can go to:
```Bash
http://localhost:3000
```
To register.

> **Note**
> This project is still in development and is not meant to be relied upon as your daily driver but can be for free in a pinch.
