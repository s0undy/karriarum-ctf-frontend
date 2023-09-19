# Karriarum-CTF-Frontend

![CTF-Leaderboard](images/ctfleaderboard.png)

Frontend for the App "Karriarum CTF" - Intended to be used together with [Karriarum-CTF-Backend](https://github.com/s0undy/karriarum-ctf-backend)

## Introduction

Small website built with React that displays a leaderboard on the index page and also has a page, /newscore, to input new scores. Container built contains a nginx that makes the page available on port 80.

## Usage

Important to remember that this is ONLY the frontend porportion of "Karriarium CTF". It has no backend or database. It should always be used together with [Karriarum-CTF-Backend](https://github.com/s0undy/karriarum-ctf-backend)

### Docker Compose

See examples in [examples/compose](https://github.com/s0undy/karriarum-ctf-frontend/tree/main/examples/compose)

## Configuration

| Environment Variable | Description                               | Default | Required |
|----------------------|-------------------------------------------|---------|----------|
| `API_URL`            | Hostname+port of the API-backend          |         | ✅       |
