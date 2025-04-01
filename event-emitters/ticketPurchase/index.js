const TicketManager = require("./ticketManager");
const EmailService = require("./emailService");
const DatabaseService = require("./databaseService");

// instantiate classes objects
const ticketManager = new TicketManager(3);
const emailService = new EmailService();
const databaseService = new DatabaseService();

ticketManager.on("buy", (email, price, timestamp) => {

	emailService.send(email);
	databaseService.save(email, price, timestamp);
});

ticketManager.on("welcomeMsg", (msg) => {
	
	console.log(msg);
	console.log("=========================");
});

ticketManager.on("error", (error) => {
	console.log(`Gracefully handling an error: ${error}`);
});

ticketManager.welcome();
/*ticketManager.buyTicket("test@email.com", 10);
ticketManager.buyTicket("test@email.com", 10);
ticketManager.buyTicket("test@email.com", 10);
ticketManager.buyTicket("test@email.com", 10);
*/
console.log(`We have ${ticketManager.listenerCount("buy")} listener(s) for the buy event`);
console.log(`We have ${ticketManager.listenerCount("error")} listener(s) for the error event`);

const onBuy = () => {
	console.log("I will be removed soon");
};

console.log(`We added a new event listener bringing our total
count for the buy event to: ${ticketManager.listenerCount("buy")}`);

ticketManager.on("buy", onBuy);
ticketManager.removeAllListeners("buy");

console.log(`We have ${ticketManager.listenerCount("buy")} listeners for the buy event`);

ticketManager.buyTicket("test@email", 20);

console.log("The last ticket was bought");
