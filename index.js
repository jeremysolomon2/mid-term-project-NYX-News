const express = require('express')
const axios = require('axios')
require('dotenv').load();
const PORT = process.env.PORT || 5000
const NYT_API_BASE = 'http://api.nytimes.com/svc/topstories/v2/'
const NYT_API_KEY =  process.env.NYT_API_KEY

const app = express()
app.listen(PORT, () => console.log(`listening on port ${PORT}`))

app.get('/', (req, res) => {
  res.send('hello world!')
})

// let sampleSelctions = ["sports","health","travel"]

// app.get('/:test', (req, res) => {
//   getNews(req.params.test, res)
// })
// // THIS WORKS
// const getNews = (section, res) => {
//   const url = `${NYT_API_BASE}${section}.json?api-key=${NYT_API_KEY}`
//   axios.get(url).then(api_response => {
//     res.send(api_response.data)
//   }).catch(api_error => {
//     console.log(api_error)
//     res.send('error!')
//   })
// }

app.get('/arts', (req, res) => {
    const url = `${NYT_API_BASE}arts.json?api-key=${NYT_API_KEY}`
    axios.get(url)
    .then((api_response) => {
        res.send(api_response.data)
    })
  })

  app.get('/business', (req, res) => {
    const url = `${NYT_API_BASE}business.json?api-key=${NYT_API_KEY}`
    axios.get(url)
    .then((api_response) => {
        res.send(api_response.data)
    })
  })

  app.get('/fashion', (req, res) => {
    const url = `${NYT_API_BASE}fashion.json?api-key=${NYT_API_KEY}`
    axios.get(url)
    .then((api_response) => {
        res.send(api_response.data)
    })
  })

  app.get('/health', (req, res) => {
    const url = `${NYT_API_BASE}health.json?api-key=${NYT_API_KEY}`
    axios.get(url)
    .then((api_response) => {
        res.send(api_response.data)
    })
  })

  app.get('/politics', (req, res) => {
    const url = `${NYT_API_BASE}politics.json?api-key=${NYT_API_KEY}`
    axios.get(url)
    .then((api_response) => {
        res.send(api_response.data)
    })
  })

  app.get('/science', (req, res) => {
    const url = `${NYT_API_BASE}science.json?api-key=${NYT_API_KEY}`
    axios.get(url)
    .then((api_response) => {
        res.send(api_response.data)
    })
  })

  app.get('/sports', (req, res) => {
    const url = `${NYT_API_BASE}sports.json?api-key=${NYT_API_KEY}`
    axios.get(url)
    .then((api_response) => {
        res.send(api_response.data)
    })
  })

  app.get('/technology', (req, res) => {
    const url = `${NYT_API_BASE}technology.json?api-key=${NYT_API_KEY}`
    axios.get(url)
    .then((api_response) => {
        res.send(api_response.data)
    })
  })

  app.get('/travel', (req, res) => {
    const url = `${NYT_API_BASE}travel.json?api-key=${NYT_API_KEY}`
    axios.get(url)
    .then((api_response) => {
        res.send(api_response.data)
    })
  })

  app.get('/world', (req, res) => {
    const url = `${NYT_API_BASE}world.json?api-key=${NYT_API_KEY}`
    axios.get(url)
    .then((api_response) => {
        res.send(api_response.data)
    })
  })

  


