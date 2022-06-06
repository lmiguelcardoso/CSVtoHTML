class Table{
    constructor(data){
        this.header = data[0];
        data.shift()
        this.body = data;
    }
    
    get RowCount(){
        return this.body.length 
    }
    
    get ColumnCount(){
        return this.header.length
    }
}

module.exports = Table