// const args = process.argv.slice(2);
// console.log(process.env[args[0]]);

const args = process.argv.slice(2);

args.forEach((arg) => {

    let argValue = process.env[arg]; // get the variable value

    if (argValue === undefined) { // check if available
        console.log(`Environmental variable ${arg} not found`);
    }
    else {
        console.log(argValue);
    }
});