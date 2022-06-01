# express typescript boilerplate

A Library to provide common functionalities across microservices

Table of Contents
-----------------

- [Features](#features)
- [Getting Started](#getting-started)
- [List of Packages](#list-of-packages)
- [Useful Tools and Resources](#useful-tools-and-resources)

Features
--------

- File Storage using AWS S3
- Message bus using RabbitMQ (SOON)
- Arango DB connection
- Mongo DB connection (SOON)
- Caching using Redis
- HTTP Requests 
- Environmental Variables 
- Logger


Getting Started
---------------

The easiest way to get started is to clone the repository:

```bash
# Get the latest snapshot
git clone https://github.com/patrickwehbe/express-typescript-boilerplate.git

# Change directory
cd express-typescript-boilerplate

# Install NPM dependencies
npm install

# Launch example `example/index.ts`
npm run start

# Build library (Make sure to build the library before linking.)
npm run build 
```

List of Packages
----------------

| Package                         | Description                                                             |
| ------------------------------- | ------------------------------------------------------------------------|
| @aws-sdk/client-s3              | AWS SDK for S3 Client .                                                 |
| @aws-sdk/s3-request-presigner   | AWS library generate signed url for S3.                                 |
| arangojs                        | ArangoDB JavaScript client.                                             |
| mongoose                        | MongoDB  JavaScript client                                              |
| async-retry                     | Library for retring asynchronously.                                     |
| bcrypt                          | Library for hashing and salting user passwords.                         |
| class-transformer               | Library allow to transform plain object to some instance of class.      |
| class-validator                 | Library for decorator and non-decorator based validation.               |                                         
| redis                           | Redis Client.                                                           |
| reflect-metadata                | Library for Metadata Reflection API.                                    |
| winston                         | Logging library.                                                        |
| prettier                        | Opinionated Code Formatter.                                             |
| tslint                          | Linter TypeScript.                                                      |
| tslint-config-prettier          | Configuration tslint with prettier.                                     |
| typescript                      | TypeScript library.                                                     |
| ts-node                         | TypeScript execution library.                                           |

Useful Tools and Resources
--------------------------
- [TypeScript](https://www.typescriptlang.org/docs/handbook/intro.html) - TypeScript Documentation
- [TypeScript Do's and Don'ts](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html) - Typescript best practice.
- [ArangoDB with NodeJs in 10 Minutes](https://www.arangodb.com/tutorials/tutorial-node-js/) - A short tutorial to get started with ArangoDB using Node.js.
