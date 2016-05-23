'use strict';

console.log('starting function');

exports.handle = (event, context, callback) => {
  console.log('processing event: %j', event);
  callback(null, { hello: process.env.WORLD });
};
