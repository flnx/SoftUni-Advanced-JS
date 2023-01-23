function argumentInfo(...args) {
    const data = {};

    args.forEach((x) => {
        let type = typeof x;
        if (!data[type]) {
            data[type] = 0;
        }
        data[type]++;
        console.log(`${type}: ${x}`);
    });

    const sorted = Object.entries(data)
        .sort((a, b) => b[1] - a[1])
        .forEach((x) => console.log(`${x[0]} = ${x[1]}`));
}

argumentInfo('cat', 'cat', 42, function () {
    console.log('Hello world!');
});

// output:
// `------------------`
// 2
// string: cat
// number: 42
// function: function () { console.log('Hello world!'); }
// string = 2
// number = 1
// function = 1
