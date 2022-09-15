// --------SOL 1 --------//

function listProcessor(commands) {
  let result = [];

  const processing = () => {
    const add = (str) => result.push(str);
    const remove = (text) => (result = result.filter((x) => x !== text));
    const print = () => console.log(result);
    return { add, remove, print };
  };

  commands.forEach((x) => {
    const [command, txt] = x.split(' ');
    let functionCall = processing.call();
    functionCall[command](txt);
  });
}
// --------SOL 2 --------//

function listProcessor(commands) {
  let result = [];

  const obj = {
    add(str) {
      result.push(str)
    },
    remove(str) {
      result = result.filter(x => !x.includes(str))
    },
    print() {
      console.log(result);
    }
  }

  commands.forEach(x => {
    const [command, txt] = x.split(' ');
    obj[command](txt);
  });
  
}

// output ['again', 'again']

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
