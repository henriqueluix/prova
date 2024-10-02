import { Router } from "express";
import { CriarEventos, registrarPalestrantes, getPalestrantes, getParticipantes, CriarEventos, AgendarEvento, registrarParticipantes } from "../controllers/palestranteControllers.js"

const router = Router();

router.post("/palestrante/registrar", registrarPalestrantes)
router.get("/palestrante/listar", getPalestrantes)
router.post("/participante/registrar", registrarParticipantes)
router.get("/participante/listar", getParticipantes)
router.post("/criar", CriarEventos)
router.get("/agenda", AgendarEvento)

export default router