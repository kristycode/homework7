const fs = require('fs')
// const axios = require('axios')
const inquirer = require('inquirer')
const open = require('open');
// const pdf = require('html-pdf');
const generateHTML = require('./generateHTML')
const api = require('./api')

// const html = fs.readFileSync('index.html', 'utf8');



// const options = { format: 'Letter' };

// console.log(api.getUser("dg"))

const questions = [
  {
      type: 'input',
      message: 'what is your github name',
      name: 'username'
  },
  { 
      type: 'input',
      message: 'what is your favorite color',
      name: 'color'
    }
];

async function writeToFile(data) {
    await fs.writeFile('index.html', data, function (err) {
        if (err) {
            return console.log(err)
        }
    })
 
}

// fs.readFileSync()

async function init() {
    try {
         // const html = await fs.readFileSync('index.html', 'utf8');
        // const options = { format: 'Letter'};
        const inquiry = await inquirer.prompt(questions)
        const user = await api.getUser(inquiry.username)
        const star = await api.getStars(inquiry.username)
        const generate = await generateHTML(inquiry.color, user, star)
        await cb()
        async function cb() {
           if (fs.existsSync('index.html')) {

               await api.writeToFile(`index.html`, generate)
               const html = fs.readFileSync(`index.html`, 'utf8');
               const optioons = { format: 'Letter' };
               await api.createPDF(html, options, user.login)
               await open(`./pdf/${user.login}.pdf`, {wait: true})

            } else {
                console.log('file does not exist')
                await api.writeToFile(`index.html`, generate)
                await cb()
            }
        }    
    } catch (error) {
    console.error(error)
    }

}

init()

        // const { name, login, blog, location, public_repos, followers, avatar_url } = resName
        // await writeToFile(generate)
        // await api.createPdf(html, options, user.login)
        // const openPDF = await open(`${user.login}.pdf`, {wait: true})

    
        // console.log(user)
        // console.log(star)
        
        // const data = {...inquiry}
        // await api.getUser.username
        // // const urlUsername = `https://api.github.com/users/${data.username}`;
        // const urlStarred = `https://api.github.com/users/${data.username}/starred`;
        // // const resName = await axios.get(urlUsername)
        // const resStar = await axios.get(urlStarred)
        // await api.getUser(data.username)
        // const { name, login, blog, location, public_repos, followers, avatar_url } = resName
        // const count = resStar.data.length
        // const file = await writeToFile(generateHtml(data.color, resName.data))

        // await pdf.create(html, options).toFile(`${data.login}.pdf`, function (err, res) {
        //     if (err) return console.log(err);
        //     console.log(res);
        // });

        // await open(`${login}.pdf`, { wait: true });

//     } catch (error) {
//         console.log(error)
//     }
// }

//     async () => {
//     await open('index.pdf', { wait: true});
//     console.log('the image viewer app quit');
// })();

