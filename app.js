const express = require('express')
const app = express()

app.get('/', (req, res) => {
	res.send("It works baby!")
})

app.listen(3000, () =>{
	console.log('listening')
})

