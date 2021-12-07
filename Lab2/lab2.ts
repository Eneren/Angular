enum Category {Analyst = "Business analyst", Developer ="Developer",Designer = "Designer",QA = "QA",Scrum = "Scrum master"}


interface PrizeLogger /*2.2 Визначіть інтерфейс PrizeLogger, який буде описувать тип для функції, що приймає один 
                            строковий параметр і нічого не повертає.*/
{
    (str:string):void; 
}

function prizeReal(str:string) {
    console.log(str)
}

interface Workers{                  /*1.	Визначіть інтерфейс Worker, який містить наступні поля:*/
    id:number;
    Name:string;
    surname:string;
    available:boolean;
    salary:number;
    category:Category;
    markPrize:PrizeLogger;
}

function getAllworkers() 
{
    let workers:Workers[] = [
        {id: 1, Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.Analyst, markPrize:prizeReal},
        {id: 2, Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Analyst, markPrize:prizeReal},
        {id: 3, Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.Scrum, markPrize:prizeReal},
        {id: 4, Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.Developer, markPrize:prizeReal}
    ]
    return workers;
}
 

function getWorkerByID (id:number) /*3.	Створіть функцію getWorkerByID(), вкажіть тип отримуваного значення, 
                                        використовуючи оголошений вище інтерфейс. Можливо, понадобиться додати об'єднання типів 
                                        undefined, оскільки метод find, якщо не знайде елемент, поверне undefined.*/
{

    return getAllworkers().find(el => el.id==id)

}

function printWorker(worker:Workers)            /* 4.	Створіть функцію PrintWorker(), яка на вход приймає робітника і виводить
                                                     в консоль фразу worker.name + worker.surname + ‘got salary’ + worker.salary. 
                                                     Для типа параметра используйте интерфейс Worker.*/
{

    console.log(`${worker.Name} ${worker.surname}, ${worker.salary}`)

}

let logPrize:PrizeLogger= prizeReal;
console.log(logPrize("You have been trolled"));


interface Person                        /*Оголосіть інтерфейс Person, який містить дві властивості - name і email.*/
{

    name:string;
    email:string;

}

interface Author extends Person         /*Об'явіть інтрефейс Author на основі інтерфейсу Person, який розширює вказаний
                                         інтерфейс числоою властивістю numBooksPublished.*/
{

    numBooksPublished:number;

}

interface Librarian extends Person              /*Оголосіть інтерфейс Librarian на основі інтерфейсу Person, який розширює вказаний інтерфейс двома властивостями:
                                                            a. Строкова властивість department
                                                            b. Функція assistCustomer, яка приймає строковий параметр custName 
                                                            і нічого не повертає.*/

{

    department:string;
    assistCustomer(custName:string):void;

}


/*Оголосіть змінну favoriteAuthor використовуючи інтерфейс Author, задайте значення у вигляді літерала об'єкта.*/

let favoriteAuthor:Author = 
{name:"Black", email:"Lives@mat.ter", numBooksPublished:1936}

/*let favoriteLibrarian:Librarian = 
{name:"White", email:"lives@stop.what", department:"twitter", assistCustomer:function tmp(name:string) {
    console.log("vsem privet mne 0 let i ya za fe...."+name);
}}*/

//Закоментуйте код, який відноситься до змінної favoriteLibrarian




/*Створіть клас UniversityLibrarian, який реалізує інтерфейс Librarian і реалізуйте всі необхідні 
властивості. Метод assistCustomer повинен виводити в консоль рядок `$ {this.name} is assisting $ {custName}`*/

class UniversityLibrarian implements Librarian
{
    name:string;
    email:string;
    department:string;
    assistCustomer(custName:string):void
    {
        console.log(`${this.name} is assisting ${custName}`);
    }
}


/*Оголосіть змінну favoriteLibrarian використовуючи інтерфейс Librarian і проініціалізуйте її 
за допомогою об'єкта, створеного класом UniversityLibrarian(). Ніяких помилок при цьому не повинно виникати. 
Проініціалізіруйте властивість name і викличте метод assistCustomer().*/ 


let favoriteLibrarian:Librarian = new UniversityLibrarian();
favoriteLibrarian.name = "Masons";
favoriteLibrarian.assistCustomer("Trump")


/*Створіть клас ReferenceItem, який містить:*/

abstract class ReferenceItem{

/*title:string;
year:number;
constructor(newTitle:string, newYear:number)
{
    this.title = newTitle;
    this.year=newYear;
    console.log("boooooo")
}*/

    private __publisher:string;     //Створіть приватну властивість _publisher: string.
    static department:string = "Patrik Starfish";

    publisherGetter():string        //Додайте геттер publisher, який перетворює властивість _publisher в верхній регістр і повертає його.
    {
        return this.__publisher.toUpperCase();
    }

    publisherSetter(newPublisher:string):void           /*Додайте сетер publisher, який приймає рядковий параметр newPublisher і 
                                                            встановлює значення властивості _publisher в значення цього параметра.*/
    {
        this.__publisher = newPublisher;
    }


    constructor(public title:string, protected year:number){}
    printItem() {
        console.log(`${this.title} was published in ${this.year} by ${ReferenceItem.department}`);
    }
    /*Додайте абстрактний метод printCitation(), який не приймає параметрів і не повертає значення.
    У цього методу не повинно бути реалізації. Після цього Ви отримаєте помилку в класі Encyclopedia,
    яка повідомить, що не реалізований абстрактний метод.*/
    abstract printCitation():void;
}


/*Створіть клас Encyclopedia як нащадка класу ReferenceItem. Додайте одну додаткову числову публічну 
властивість edition. Використовуйте параметри конструктора.*/

class Encyclopedia extends ReferenceItem{

    constructor(title:string, year:number, public edition:number)
    {
        super(title, year);
    }


/*Перевизначіть метод printItem(). Нехай він робить те, що робив і додатково виводить рядок в консоль 
«Edition: edition (year)».*/

    printItem() {
        console.log(`${this.title} was published in ${this.year} by ${ReferenceItem.department}`);
        console.log(`Edition:${this.edition}`);
    }



/*Додайте реалізацію методу printCitation в клас Encyclopedia. Метод повинен виводити в консоль рядок «title - year».*/
    printCitation(){

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