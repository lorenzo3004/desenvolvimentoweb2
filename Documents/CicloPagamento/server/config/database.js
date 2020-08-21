const mongoose = require("mongoose");

const db = mongoose.connect("mongodb+srv://devweb2:devweb2@ciclospagamento.obffv.gcp.mongodb.net/CiclosPagamento?retryWrites=true&w=majority", 
{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
}
);

mongoose.connection.on("connected", () => {
    console.log("Conexão estabelecida com o banco de dados...");
})

mongoose.connection.on("error", (error) => {
    console.log(`Algum erro aconteceu com a conexão do banco. \n${error}`);
})

mongoose.connection.on("disconnected", () => {
    console.log("Desconectamos com o banco de dados...");
})

module.exports = db;