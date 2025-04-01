const { spawn } = require('child_process');


const child = spawn('find', ['.']);

// since the spawn is an event emitter
// add event listeners to the child variable
child.stdout.on('data', data => {
	console.log(`stdout:\n${data}`);
});

child.stderr.on('data', data => {
	console.error(`stderr: ${data}`);
});

child.on('error', (error) => {

	console.error(`error: ${error.message}`);
});

child.on('close', (code) => {

	console.log(`child process exited with code ${code}`);
});
