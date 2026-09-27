import express from "express";
import { connectDB } from "./infra/database/mogoose/connection";
import { ProjetoController } from "./presentation/controllers/ProjetoController";

const app = express();
app.use(express.json());

const projetoController = new ProjetoController();

app.post('/projetos', projetoController.criar.bind(projetoController));
app.get('/projetos', projetoController.buscarTodos.bind(projetoController));
app.get('/projetos/:id', projetoController.buscarPorId.bind(projetoController));
app.put('/projetos/:id', projetoController.atualizar.bind(projetoController));
app.delete('/projetos/:id', projetoController.excluir.bind(projetoController));

const iniciarServidor = async () => {
    await connectDB();

    app. listen(3000, () => {
        console.log('Servidor rodando na porta 3000');
    });
};

iniciarServidor();