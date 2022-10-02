function requestValidator(obj) {
  const methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
  const versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
  const uriPattern = /^([\w\.]+|\*{1})$/;
  const messagePattern = /^[^<>\\&'"]*$/;

  if (!methods.includes(obj.method)) {
    throw new Error('Invalid request header: Invalid Method');
  }

  if (!obj.uri || !uriPattern.test(obj.uri)) {
    throw new Error('Invalid request header: Invalid URI');
  }

  if (!versions.includes(obj.version)) {
    throw new Error('Invalid request header: Invalid Version');
  }

  if (!obj.hasOwnProperty('message') || !messagePattern.test(obj.message)) {
    throw new Error('Invalid request header: Invalid Message');
  }

  return obj;
}

requestValidator({
  method: 'GET',
  uri: 'svn.public.catalog',
  version: 'HTTP/1.1',
  message: '',
});

console.log(`----------------------`);

// requestValidator({
//   method: 'OPTIONS',
//   uri: 'git.master',
//   version: 'HTTP/1.1',
//   message: '-recursive',
// });

// // console.log(`----------------------`);

// requestValidator({
//   method: 'POST',
//   uri: 'home.bash',
//   message: 'rm -rf /*',
// });
