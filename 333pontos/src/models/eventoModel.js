import conn from "../config/conn.js                       ";

const tabelaEvento = /*sql*/`
    CREATE TABLE IF NOT EXISTS eventos(
       evento_id VARCHAR(60) PRIMARY KEY,
       titulo VARCHAR(255) NOT NULL,
       data_evento date NOT NULL,
       palestrante_id VARCHAR(60) NOT NULL,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
       updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
       FOREIGN KEY (palestrante_id) REFERENCES palestrantes(palestrante_id)
)`;

conn.query(tabelaEvento, (err) => {
    if (err) {
        console.error(err);
        return;
    };
    console.log("Tabela [eventos] criada com sucesso");
});