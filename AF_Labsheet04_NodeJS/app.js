
//1.Hello World
console.log('Hello World!');


//2.Use OS system library
const os = require('os');

console.log('Architecture: ' + os.arch()); //To obtain system architecture from the OS module
console.log('CPUs: ' + os.cpus().length); //To obtain number of CPUs from the OS module
console.log('OS: ' + os.platform()); //To obtain platform from the OS module


//3.Read a file
const fs = require('fs');

const fileName = __dirname + '/test.txt';

fs.readFile(fileName, (err, data) => {
    if(err){
        console.error(err);
    }

    console.log(data.toString());
});


//To read the file synchronously
const fs = require('fs');

const fileName = __dirname + '/test.txt';

const data = fs.readFileSync(fileName);
console.log(data.toString());


//4.Use streams to copy content of a file
const fs = require('fs');

const fileName = __dirname + '/test.txt';
const outFileName = __dirname +'/test-copy.txt';

const readStream = fs.createReadStream(fileName);
const writeStream = fs.createWriteStream(outFileName);

readStream.pipe(writeStream);

readStream.on('data', data => {
    console.log(data.toString());
});


//5.Http Server
const http = require('http');

http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hello World</h1>');
    res.end();
}).listen(3000);


//POST request that accepts form field name and return HTML with Hello {name}
const http = require('http');

http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/html');

    switch (req.method) {
            case 'GET':
                res.write('<h1>Hello World</h1>');
                res.end();
                break;
            case 'POST':
                req.on('data', data => {
                    res.write('<h1>Hello ' + data + '</h1>');
                    res.end();
                });
                break;
    }

}).listen(3000, (err) => {
    console.log('Server is listening to port 3000')
});





