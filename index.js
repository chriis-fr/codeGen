import inquirer from "inquirer";
import qr from "qr-image"
import fs from "fs"

inquirer
    .prompt([{
         message: "Type in your URL",
         name: "URL"
    }])
    .then((answers) => {
        const url = answers.URL
        let qr_svg = qr.image(url)
        qr_svg.pipe(fs.createWriteStream("qr_img.png"))

        fs.writeFile("qrRequest.txt", url, (err) => {
            if(err) throw err
            console.log(url + ' has been saved to the file')
        })
    })
    .catch((error) => {
        if(error.isTyyError){

        } else {

        }
    })