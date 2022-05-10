import express from 'express'
import cors from 'cors'
import { routes } from './routes';

const app = express();

// METODO GET - BUSCAR INFORMAÇÕES
// METODO POST - CADASTRAR INFORMAÇÕES
// PUT - ATUALIZAR INFORMAÇÕES DE UMA ENTIDADE (MUDAR INFORMAÇÕES DE PERFIL)
// PATCH - ATUALIZAR UMA INFORMAÇÃO ÚNICA DE UMA ENTIDADE (RECEBER OU NÃO NEWSLETTER)
// METODO DELETE - DELATAR INFORMAÇÃO


/* REQUISITION = TUDO QUE CHEGA PARA O SERVER, USUARIO BLA BLA BLA */
/* TUDO QUE EU QUERO DEVOLVER PARA O USUARIO */
app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(routes)

app.listen(process.env.PORT || 3333, () => {
    console.log('HTTP SERVER RUNNING!')
})

