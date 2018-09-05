const express = require('express')
const axios = require('axios')

const PORT = process.env.PORT || 5000
const NYT_API_BASE = 'http://api.nytimes.com/svc/topstories/v2/'
const NYT_API_KEY = process.env.NYT_API_KEY

const app = express()
app.listen(PORT, () => console.log(`listening on port ${PORT}`))

app.get('/', (req, res) => {
  res.send('hello world!')
})

// let sampleSelctions = ["sports","health","travel"]

app.get('/:test', (req, res) => {
  getNews(req.params.test, res)
// getNews(sampleSelctions, res)
})

// THIS WORKS
const getNews = (section, res) => {
  const url = `${NYT_API_BASE}${section}.json?api-key=${NYT_API_KEY}`
  axios.get(url).then(api_response => {
    res.send(api_response.data)
  }).catch(api_error => {
    console.log(api_error)
    res.send('error!')
  })
}

// const getNews = (section, res) => {
//     let articles = [];
//     section.forEach(async (v, i) => {
//         const url = `${NYT_API_BASE}${v}.json?api-key=${NYT_API_KEY}`
//         let { data } = await axios.get(url).catch(api_error => {
//           console.log(api_error)
//         res.send('error!')
//         })
//         articles.push(data)
//     })
//    console.log(articles)
//    res.send(articles, "Request Done")

//   }