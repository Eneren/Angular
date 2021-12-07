var Category;
(function (Category) {
    Category["Analyst"] = "Business analyst";
    Category["Developer"] = "Developer";
    Category["Designer"] = "Designer";
    Category["QA"] = "QA";
    Category["Scrum"] = "Scrum master";
})(Category || (Category = {}));
function prizeReal(str) {
    console.log(str);
}
function getAllworkers() {
    let workers = [
        { id: 1, Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.Analyst, markPrize: prizeReal },
        { id: 2, Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Analyst, markPrize: prizeReal },
        { id: 3, Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.Scrum, markPrize: prizeReal },
        { id: 4, Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.Developer, markPrize: prizeReal }
    ];
    return workers;
}
function getWorkerByID(id) {
    return getAllworkers().find(el => el.id == id);
}
function printWorker(worker) {
    console.log(`${worker.Name} ${worker.surname}, ${worker.salary}`);
}
let logPrize = prizeReal;
console.log(logPrize("You have been trolled"));
/*Оголосіть змінну favoriteAuthor використовуючи інтерфейс Author, задайте значення у вигляді літерала об'єкта.*/
let favoriteAuthor = { name: "Black", email: "Lives@mat.ter", numBooksPublished: 1936 };
/*let favoriteLibrarian:Librarian =
{name:"White", email:"lives@stop.what", department:"twitter", assistCustomer:function tmp(name:string) {
    console.log("vsem privet mne 0 let i ya za fe...."+name);
}}*/
//Закоментуйте код, який відноситься до змінної favoriteLibrarian
/*Створіть клас UniversityLibrarian, який реалізує інтерфейс Librarian і реалізуйте всі необхідні
властивості. Метод assistCustomer повинен виводити в консоль рядок `$ {this.name} is assisting $ {custName}`*/
class UniversityLibrarian {
    assistCustomer(custName) {
        console.log(`${this.name} is assisting ${custName}`);
    }
}
/*Оголосіть змінну favoriteLibrarian використовуючи інтерфейс Librarian і проініціалізуйте її
за допомогою об'єкта, створеного класом UniversityLibrarian(). Ніяких помилок при цьому не повинно виникати.
Проініціалізіруйте властивість name і викличте метод assistCustomer().*/
let favoriteLibrarian = new UniversityLibrarian();
favoriteLibrarian.name = "Masons";
favoriteLibrarian.assistCustomer("Trump");
/*Створіть клас ReferenceItem, який містить:*/
class ReferenceItem {
    constructor(title, year) {
        this.title = title;
        this.year = year;
    }
    publisherGetter() {
        return this.__publisher.toUpperCase();
    }
    publisherSetter(newPublisher) {
        this.__publisher = newPublisher;
    }
    printItem() {
        console.log(`${this.title} was published in ${this.year} by ${ReferenceItem.department}`);
    }
}
ReferenceItem.department = "Patrik Starfish";
/*Створіть клас Encyclopedia як нащадка класу ReferenceItem. Додайте одну додаткову числову публічну
властивість edition. Використовуйте параметри конструктора.*/
class Encyclopedia extends ReferenceItem {
    constructor(title, year, edition) {
        super(title, year);
        this.edition = edition;
    }
    /*Перевизначіть метод printItem(). Нехай він робить те, що робив і додатково виводить рядок в консоль
    «Edition: edition (year)».*/
    printItem() {
        console.log(`${this.title} was published in ${this.year} by ${ReferenceItem.department}`);
        console.log(`Edition:${this.edition}`);
    }
    /*Додайте реалізацію методу printCitation в клас Encyclopedia. Метод повинен виводити в консоль рядок «title - year».*/
    printCitation() {
        console.log("title - year");
    }
}
/*let ref = new ReferenceItem("im leg", 1111);
ref.publisherSetter("bob");
ref.printItem();
console.log(ref.publisherGetter());*/ //Невозможно создать экземпляр абстрактного класса
/*Оголосіть змінну refBook і створіть об'єкт Encyclopedia. Викличте метод printItem ();*/
let refBook = new Encyclopedia("Crabsburger secret recipe", 123, 100000);
refBook.printItem();
