// objects, object iteration, map(), bom, alert, prompt, confirm
// class

// let user = {
//     firstname: 'Ivan',
//     lastname: 'Williams',
//     age: 18
// }

// for(let key in user){
//     console.log(user[key])
// }

// let animals = [{'0':'cat'}, 'dog', 'rabbit']

// for (let animal in animals){
//     console.log(animals[animal])
// }

// let mass = [1, 2, 3, 4, 5]

// let mass2 = mass.map((num, i) => `index: ${i}, num: ${num}`)

// console.log(mass2)



// let book1 = {
//     name: 'Убийство в восточном экспрессе',
//     author: 'Агата Кристи',
//     published: '1933'
// }

// let book2 = {
//     name: 'Лето в пионерском галстуке',
//     author: 'Роман, Елена Малисова и Катерина Сильванова',
//     published: '2021'
// }

// let book3 = {
//     name: 'Мальчик в полосатой пижаме',
//     author: 'Джон Бойн',
//     published: '2006'
// }

// class Library {
//     constructor(id, name, books) {
//         this.id = id
//         this.name = name
//         this.books = books
//     }

//     removeBook(id) {
//         this.books = this.books.filter(book => book.id !== id)
//     }
// }

// class Book {
//     constructor(id, name, author, published) {
//         this.id = id
//         this.name = name
//         this.author = author
//         this.published = published
//     }

//     info() {
//         console.log(`Name: ${this.name}, author: ${this.author}`)
//     }
// }

// const books = []

// const book1 = new Book(1, 'Убийство в восточном экспрессе', 'Агата Кристи', '1933')
// const book2 = new Book(2, 'Name 2', 'Author 2', '1999')

// books.push(book1, book2)
// const library = new Library('1', 'Alisher Navoi', books)

// console.log(library.books)
// library.removeBook(1)
// console.log(library.books)

// let mass = [2, 3, 4, 5, 6, 3, 4, 1]
// mass = mass.filter(e => e !== 3)
// console.log(mass)

// console.dir(window)

// let alert = alert("Hello")
// let prompt = prompt("Whats your name?")
// let confirm = confirm("HHHh")

// let a = +prompt("Num 1")
// let b = +prompt("Num 2")

// function sum(a, b) {
//     return a + b
// }

// console.log(sum(a, b))