import dotenv from "dotenv";
dotenv.config();

// Import dinâmico: só carrega app.js (e toda a cadeia que cria o pool do MySQL)
// depois que dotenv.config() já rodou e populou process.env.
const { default: app } = await import("./app.js");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    
});