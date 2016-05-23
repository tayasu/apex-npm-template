var fs = require('fs');
var env = require('../../../project.json').environment;
try {
  var env_function = require('../function.json').environment;
  for (var key in env_function) {
    env[key] = env_function[key];
  }
} catch (err) {
  // ignore
}

fs.writeFileSync('./.env_local.json', JSON.stringify(env));
