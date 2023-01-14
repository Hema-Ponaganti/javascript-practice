const https = require('node:https');

let x = https.get('https://encrypted.google.com/', (res) => {
    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);

    res.on('data', (d) => {
        process.stdout.write(d);
    });

})
console.log("===========",x)
console.log("===========",typeof(x))

console.log("===========",typeof(x.on))

x.on('error', (e) => {
    console.error(e);
});