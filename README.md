# Simple TODO Front

![](https://img.shields.io/github/license/1mpossible-code/simple-todo-front?color=green)

Front part of Simple TODO Application. Needs [api](https://github.com/1mpossible-code/simple-todo-api) to work.

* [Description](#description)
* [Installation](#installation)
  * [Dependencies](#dependencies)
  * [Configuration](#configuration)
* [Usage](#usage)
* [Contributing](#contributing)
* [Credits](#credits)
* [License](#license)

----

## Description

Simple TODO Front is a part of SPA application that manage your tasks.
It uses [Simple TODO Api](https://github.com/1mpossible-code/simple-todo-api#simple-todo-api) to work.

## Installation

* Clone this repo

```shell
git clone https://github.com/1mpossible-code/simple-todo-front
```

* Clone [api](https://github.com/1mpossible-code/simple-todo-api#simple-todo-api) repo
```shell
git clone https://github.com/1mpossible-code/simple-todo-api
```

## Usage

### Dependencies:

* [docker-compose](https://docs.docker.com/compose/)
* [npm](https://www.npmjs.com/)
* [vue-cli](https://cli.vuejs.org/)

After cloning repos do:

```shell
# Go to simple-todo-api directory in another
# terminal or tmux or screen (command) maybe
cd simple-todo-api
# Run docker-compose.yml file
docker-compose up -d

# Go to simple-todo-front directory
cd ../simple-todo-front
# Copy .env file
cp .env.example .env
# Install package.json dependencies
npm install
# Run server
npm run serve
```

> You will have front on http://localhost:8080/
> And api on http://localhost:3000/tasks/

### Configuration

You can specify your own api url in `.env` file. [Example](.env.example)

## Contributing

Feel freely to contribute this project. [Issues](https://github.com/1mpossible-code/simple-todo-front/issues)
and [PRs](https://github.com/1mpossible-code/simple-todo-front/pulls) are welcome!

## Credits

You can mail to `linme00p@gmail.com` to contact the author

# License

Copyright © 2021 [1mpossible-code](https://github.com/1mpossible-code). This project
is [GPLv3](https://www.https://www.gnu.org/licenses/gpl-3.0.htmlgnu.org/licenses/gpl-3.0) licensed.
