function cars(data) {
  const result = {};

  const funcs = {
    create: (name, inherit, name2) => {
      if (inherit) {
        result[name] = Object.create(result[name2]);
      } else {
        result[name] = {};
      }
    },
    set: (name, key, prop) => (result[name][key] = prop),
    print: (name) => {
      let output = [];
      for (let key in result[name]) {
        output.push(`${key}:${result[name][key]}`);
      }
      console.log(output.join(','));
    },
  };

  data.forEach((x) => {
    let [action, key, prop, value] = x.split(' ');
    let command = funcs[action];
    command(key, prop, value);
  });
}
// output:
// color:red
// model:new,color:red


cars([
  'create c1',
  'create c2 inherit c1',
  'set c1 color red',
  'set c2 model new',
  'print c1',
  'print c2',
]);
