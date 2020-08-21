const mongoose = require("mongoose");

const debit = new mongoose.Schema({
    name : { type: String, required: [true, "O campo data do dédito é obrigatório"], },
    value : { type: Number, min: [0, "Valor mínimo de R$ 1,00"], required: [true, "O campo valor do dédito é obrigatório"], },
    status : { type: String, required: [true, "O Campo do débito é obrigatório"], uppercase: true, enum: ["PAGO, PENDENTE, AGENDADO"], },
});

module.exports = debit;