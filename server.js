import express from 'express'

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 2000
const appServer = app.listen(PORT, () => {
    console.log('Server listening on port', PORT);
});
