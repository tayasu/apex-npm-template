# Apex with npm Template

## Description

This is an initial project for AWS Lambda to use [Apex](http://apex.run/) with [npm](https://www.npmjs.com/). Some of the features of this project are npm package sysytem, implements Node.js 4.3.2 and ES2015, testing locally with environment variables of Apex.

## Requirement

* Node.js 4.3.2
* Apex 0.9.0

## Usage

### Setup

```sh
$ git clone https://github.com/tayasu/apex-npm-template.git
```

### Deploy & Invoke

```sh
$ cd apex-npm-template
$ apex deploy
$ apex invoke hello
```

### Testing locally & Deploy

```sh
$ cd functions/hello
$ npm install
$ npm test
$ npm run apex deploy #run-script for apex commands by npm dir
```

## LICENSE

[MIT License](LICENSE)
