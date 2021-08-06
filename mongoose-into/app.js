const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/w2-into', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("Conected MongoDB..."))
.catch((err) => console.log('Error connect MongoDB...', err));

const bookSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now},
    price: Number
});

const Book = mongoose.model('Book', bookSchema);

async function createBook(){
    const _book = new Book({
        name: "LA divina comedia",
        author: "Herni Alvarez",
        tags: ['Ficción', 'Tiempo libre'],
        price: 15000
    });

    const savedBook = await _book.save();

    console.log(savedBook);
}

// createBook();

async function listBooks(){
    // api/usurios?numeroPagina=2&sizePage=2
    const numPage = 2;
    const sizePage = 2;
    // eq (equal)
    // ne (not equal)
    // gt (Greater than)
    // gte (Greater than or equal)
    // lt (less than)
    // lte (Less than or equal)
    // in 
    // nin (not in)
    // or 
    // and
    const books = await Book
                            // .find({ author: 'Lupe Maria' })
                            // .limit(1)
                            // .find({ name: /intersante$/ })
                            // .find({ 
                            //     price: { $in: [10000, 25000, 4000]},
                            //  })
                            .find()
                            .skip((numPage - 1) * sizePage)
                            .limit(sizePage)
                            .sort({ name: 1 })
                            .select({ author: 1, name: 1, price: 1 });

    console.log(books);
}

// listBooks();

async function updateBook(id){
    // const book = await Book.findById(id);
    // if(!book){
    //     console.log('Libro no existe');
    //     return;
    // }
    // book.price = 30000;
    // book.author = 'Lupe Caballero'
    // book.set({
    //     author: 'Lupe Caballero',
    //     price: 30000
    // })
    // const _book = await book.save();
    // console.log(_book);

    const _book = await Book.findByIdAndUpdate(id,  { 
        $set: { name: 'La divina comedia' }
    })
    console.log(_book);
}

// updateBook('610c7a689359b905c46b6693');

async function deleteBook(id){
    const result = await Book.deleteOne({ _id: id });
    console.log(result);
}

deleteBook('610c7a689359b905c46b6693');