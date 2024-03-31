const express = require('express')
const app = express()
const port = 8080
app.use(express.json());
app.use('/', express.static('static'));

app.get('/api/getProducts', (req, res) => {
    products=[
        {
        "price": 10000,
        "name": "Монитор",
        "id": "000000003"
        },
        {
        "price": 10000,
        "name": "Пылесос",
        "id": "000000001"
        },
        {
        "price": 15000,
        "name": "Смартфон",
        "id": "000000002"
        }
        ];

  res.send(products)
})

app.post('/api/postOrder', (req, res) => {
    res.send('Привет'+req.body.firstName)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})