import express from 'express';
const app = express();
import fs from 'fs'
import cors from 'cors'
const Port = process.env.PORT || 4000


app.use(express.json())
//handdle cores
app.use(cors())


//Read AllMovi from Json Data
app.get('/movie', (req, res) => {
    try {
        //read file
        fs.readFile('./moviData.json', (err, data) => {
            if (err) return res.status(400).json({ msg: err })
            const AllMoviData = JSON.parse(data)
            res.status(200).json({ AllMoviData })
        })

    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
})


//if know route match
app.use('*', (req, res) => {
    res.send({ msg: 'No Route exist' })
})


app.listen(Port, () => {
    console.log('server is listening on port 4000')
})