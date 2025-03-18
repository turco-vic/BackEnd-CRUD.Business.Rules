const pool = require("../config/database");

const getTickets = async () => {
    const result = await pool.query("SELECT * FROM tickets");
    return result.rows;
};

const getTicketById = async (id) => {
    const result = await pool.query("SELECT * FROM tickets WHERE id = $1", [id]);
    return result.rows[0];
};

const createTicket = async (evento, local, data_evento, categoria, preco, quantidade_disponivel) => {
    const result = await pool.query(
        "INSERT INTO tickets (evento, local, data_evento, categoria, preco, quantidade_disponivel) VALUES ($1, $2) RETURNING *",
        [evento, local, data_evento, categoria, preco, quantidade_disponivel]
    );
    return result.rows[0];
};

const updateTicket = async (id, evento, local, data_evento, categoria, preco, quantidade_disponivel) => {
    const result = await pool.query(
        "UPDATE tickets SET evento = $1, local = $2, data_evento = $3, categoria = $4, preco = $5, quantidade_disponivel = $6 WHERE id = $7 RETURNING *",
        [evento, local, data_evento, categoria, preco, quantidade_disponivel, id]
    );
    return result.rows[0];
};

const deleteTicket = async (id) => {
    const result = await pool.query("DELETE FROM tickets WHERE id = $1 RETURNING *", [id]);

    if (result.rowCount === 0) {
        return { error: "Ingresso não encontrado!" };
    }

    return { message: "Ingresso deletado com sucesso!" };
};

module.exports = { getTickets, getTicketById, createTicket, updateTicket, deleteTicket };