import app from './app';

app.listen(process.env.PORT_SERVER || 3000, () => {
    console.info(`API Fx-finances rodando na porta : ${process.env.PORT_SERVER}`)
});