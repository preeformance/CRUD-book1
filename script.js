var app = new function(){
    this.el = document.getElementById('books')
    this.books=[]

    this.FetchAll = function(){
        var data='';

        if(this.books.length>0){
            for(i=0; i<this.books.length;i++){
                data += '<tr>'
                data += '<td>'+(i+1)+'. '+this.books[i]+'<td>'
                data += '<td><button onclick="app.Edit('+i+')" class="btn btn-warning">Edit</button></td>'
                data += '<td><button onclick="app.Delete('+i+')" class="btn btn-danger">Delete</button></td>' 
                data += '<td>'
            }
        }
        this.Count(this.books.length);
        return this.el.innerHTML = data
    };

    this.Add = function(){
        el = document.getElementById('addBook')
        var book = el.value
        if(book){
            this.books.push(book.trim())
            el.value=''
            this.FetchAll()
        }

    }; 

    this.Edit = function(item){
        el = document.getElementById('editBook');
        el.value = this.books[item]
        document.getElementById('edit-box').style.display = 'block'
        self=this; 

        document.getElementById('save-edit').onsubmit = function(){
            var book = el.value
            if(book){
                self.books.splice(item, 1, book.trim())
                self.FetchAll()
                CloseInput() 
            }
        }
    };

    this.Delete = function(item){
        this.books.splice(item,1)
        this.FetchAll()
    };

    this.Count = function(data){
        var el = document.getElementById('counter')
        var name = 'Books'
        if(data){
            if(data ==1){
                name="Book"
            }
            el.innerHTML = data+ ' '+name
        }
        else{
            el.innerHTML = "No "+name 

        }
    };
}

app.FetchAll();

function CloseInput(){
    document.getElementById('edit-box').style.display ='none';
}