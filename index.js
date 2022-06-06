const Reader = require('./models/Reader')
const Processor = require('./models/Processor')
const Table = require('./models/Table')
const HtmlParser = require('./models/HtmlParser')
const Writer = require('./models/Writer')


var leitor = new Reader()
var escritor = new Writer()


async function main(){
    
    let dados = await leitor.Read('./planilha.csv')
    let dadosProcessador = Processor.Process(dados)

    let users = new Table(dadosProcessador)
    let html = await HtmlParser.Parse(users)

    escritor.Write(Date.now() + ".html", html)
}

main()