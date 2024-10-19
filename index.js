import express from "express"
import cors from "cors"
import chat from "./chat.js"

const app = express()
app.use(cors({origin: "https://chatbot-datahack-847s.vercel.app"}))
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.listen(4000, () => {
    console.log(`http://localhost:4000`)
    console.log("Started Listening !!")
})

app.get('/', async (req, res) => {
    res.send("Server Connected")

})

app.post('/chat', chat)
