const express = require("express");
const router = express.Router();
const ticketController = require("../controllers/ticketController");

router.get("/ticket", ticketController.getAllTickets);
router.get("/ticket/:id", ticketController.getTicket);
router.post("/ticket", ticketController.createTicket);
router.put("/ticket/:id", ticketController.updateTicket);
router.delete("/ticket/:id", ticketController.deleteTicket);

module.exports = router;