## Description

[Nest](https://github.com/nestjs/nest)
This application using sqlite database.

## Installation

```bash
$ npm install
```

## Config
Duplicate .env.example file then rename it to .env  
Put value for GEO_API_KEY and HOST_PORT  
GEO_API_KEY is for ipgeolocation 3rd party API (https://ipgeolocation.io/)
HOST_PORT is for on which port the app will be running  


## Do a migration
```bash
# start migration & seed
$ npm run migration:run
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## API Documentation
root path is swagger documentation
/hadir/:username to create new transaction
/report?date=yyyy-MM-dd to generate report, if date query param is empty then generate today report

## License

Nest is [MIT licensed](LICENSE).
