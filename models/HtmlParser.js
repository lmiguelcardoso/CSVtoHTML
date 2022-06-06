const ejs = require('ejs')

class HtmlParser{
    static async Parse(table){
        return await ejs.renderFile("./models/table.ejs", {header: table.header, body: table.body})
    }
}

module.exports = HtmlParser