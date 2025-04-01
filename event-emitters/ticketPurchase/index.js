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
ticketManager.buyTicket("test@email.com", 10);
ticketManager.buyTicket("test@email.com", 10);
ticketManager.buyTicket("test@email.com", 10);
ticketManager.buyTicket("test@email.com", 10);

