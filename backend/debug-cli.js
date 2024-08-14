#!/usr/bin/env node

const knexCli = require('knex/lib/cli');

knexCli.cli.parse(process.argv.slice(2));