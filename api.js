const axios = require("axios")
const pdf = require('html-pdf')
const fs = require('fs')
// const fs = require('fs')
// const html = fs.readFileSync('index.html', )

const api = {
  async getUser(username) {
    const url = `https://api.github.com/users/${username}`;
    const res = await axios.get(url)
    return res.data
  },
  async getStars(username) {
    const url = `https://api.github.com/users/${username}/starred`;
    const res = await axios.get(url)
    return res.data.length
  },
  async createPdf(html, options, login) {
    if (html.length) {
      await pdf.create(html, options).toFile(`./pdf/${login}.pdf`, function(err){
        if (err) return console.log(err);
        console.log(res);
      })
    // return res
    } else {
      return console.log('file not ready')
  // this.createPDF(html, options, login)
    }
},
async writeToFile(filename, data) {
  console.log('creating')
  await fs.writeToFile(filename, data, function (err, res) {
      if (err) {
        return console.log(err)
      }
      return (res)
    })
  }
}

module.exports = api;
