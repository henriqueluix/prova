import conn from "../config/conn.js";
import { v4 as uuidv4 } from "uuid";

export const registrarPalestrantes = async (request, response) => {
    const { nome, expertise } = request.body;
   
    if (!nome) {
        response.status(400).json({ message: "O nome é obrigatório" });
        return;
    };
    if (!expertise) {
        response.status(400).json({ message: "A especialização é obrigatório" });
        return;
    };

    const id = uuidv4();
    const insertSql = /*sql*/` INSERT INTO palestrantes(??, ??, ??) VALUES (?, ?, ?)`;
    const insertSqlData = [
        "palestrante_id",
        "nome",
        "expertise",
        id,
        nome,
        expertise];

    conn.query(insertSql, insertSqlData, (err) => {
        if (err) {
            console.error(err);
            response.status(500).json({ Err: "Erro ao cadastrar usuário" });
            return;
        };

        response.status(201).json({ message: "Usuário cadastrado" });
    });
};

export const getPalestrantes = (request, response) => {
    const checkSql = /*sql*/ `SELECT * FROM palestrantes`

    conn.query(checkSql, (err, data) => {
        if(err){
            console.error(err)
            response.status(500).json({Err: "Erro ao buscar palestrantes"})
            return
        }

        if(data.length === 0){
            response.status(404).json({message: "Não consegui encontrar os palestrantes"})
            return
        }

        const palestrantes = data

        response.status(200).json(palestrantes)
    })
};

export const registrarParticipantes = async (request, response) => {
    const { nome, email } = request.body;
    
    if (!nome) {
        response.status(400).json({ message: "O nome é obrigatório" });
        return;
    };
    if (!email) {
        response.status(400).json({ message: "O Email é obrigatório" });
        return;
    };

    const id = uuidv4();
    const insertSql = /*sql*/` INSERT INTO participantes(??, ??, ??) VALUES (?, ?, ?)`;
    const insertSqlData = [
        "participante_id",
        "nome",
        "email",
        id,
        nome,
        email];

    conn.query(insertSql, insertSqlData, (err) => {
        if (err) {
            console.error(err);
            response.status(500).json({ Err: "Erro ao cadastrar usuário" });
            return;
        };

        response.status(201).json({ message: "Usuário cadastrado" });
    });
};

export const getParticipantes = (request, response) => {
    const checkSql = /*sql*/ `SELECT * FROM participantes`

    conn.query(checkSql, (err, data) => {
        if(err){
            console.error(err)
            response.status(500).json({Err: "Erro ao buscar participantes"})
            return
        }

        if(data.length === 0){
            response.status(404).json({message: "Não consegui encontrar os participantes"})
            return
        }

        const participantes = data

        response.status(200).json(participantes)
    })
};

export const CriarEventos = async (request, response) => {
    const { titulo, data, palestrante } = request.body;
    //validação
    if (!titulo) {
        response.status(400).json({ message: "O nome é obrigatório" });
        return;
    };
    if (!data) {
        response.status(400).json({ message: "O data é obrigatório" });
        return;
    };
    if (!palestrante) {
        response.status(400).json({ message: "O data é obrigatório" });
        return;
    };

    const id = uuidv4();
    const insertSql = /*sql*/` INSERT INTO eventos(??, ??, ??, ??) VALUES (?, ?, ?, ?)`;
    const insertSqlData = [
        "evento_id",
        "titulo",
        "data_evento",
        "palestrante_id",
        id,
        titulo,
        data,
        palestrante
    ];

    conn.query(insertSql, insertSqlData, (err) => {
        if (err) {
            console.error(err);
            response.status(500).json({ Err: "Erro ao cadastrar usuário" });
            return;
        };

        response.status(201).json({ message: "Usuário cadastrado" });
    });
};

export const AgendarEvento = (request, response) => {
    const checkSql = /*sql*/ `SELECT * FROM eventos`

    conn.query(checkSql, (err, data) => {
        if(err){
            console.error(err)
            response.status(500).json({Err: "Erro ao buscar participantes"})
            return
        }

        if(data.length === 0){
            response.status(404).json({message: "Não consegui encontrar os participantes"})
            return
        }

        const eventos = data

        response.status(200).json(eventos)
    })
};