enum Category { Business_analyst = 0, Developer, Designer, QA, Scrum_master }

function getAllworkers() {
    let workers = [
    {Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, Category: Category[0], id: 1},
    {Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, Category: Category[1], id: 2 },
    {Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, Category: Category[1], id: 3},
    {Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, Category: Category[4], id: 4}
    ]
    return workers;
    }

let logfirstavaliable =()=>
{
  let workers = getAllworkers()
  console.log(`Количество доступных работиников: ${workers.length}`)
  for (let i=0; i<workers.length; i++)
  {
    console.log(`№${i+1}: ${workers[i].Name} ${workers[i].surname} `)
  }
}

console.log(1.1)
logfirstavaliable()

//1.2


let workersNames = (workers:Array<string>) =>
{
  workers.forEach(worker =>
    {
      console.log(worker)
    })
}

let getWorkersNamesByCategory =()=>
  {
    let categoryWorker = []
    let workerssurnames = getAllworkers()
    let category = `Developer`
      for (let i=0; i<workerssurnames.length; i++)
      {
        if (workerssurnames[i].Category == category) {
          categoryWorker.push(`${workerssurnames[i].Name} ${workerssurnames[i].surname}`)
        }
        {

        }
      }
      workersNames(categoryWorker)
  }

console.log(1.2)
getWorkersNamesByCategory()

//1.3
let GetWorkersByID =(id:number)=>
{
  let workers = getAllworkers()
  let workerdata = workers.find(e => e.id === id)
  console.log(workerdata.Name, workerdata.surname, workerdata.salary)
  return workerdata
}
console.log(1.3)
GetWorkersByID(4)
//tsc --t es2020 lab1.ts

//1.4
let createCustomerID = (name:string, ID:number) =>
{
  console.log(name+ID)
}

let myID = {name:"Ann", ID:10}
console.log(myID)
let IDGenerator: (NameCustomer:string, id:number) =>void = createCustomerID
console.log(1.4)
IDGenerator(myID.name, myID.ID)

//1.5
console.log(`createcustomer`, 1.5)
let createCustomer = (name?:string, age?:number, city?:string) =>
{
  console.log(name, !age ? "" : age, !city ? "" : city)
}
createCustomer(`Vasiliy`)
createCustomer(`Beba`, 22)
createCustomer(`Baobab`, 33, "tokyo")

console.log(1.5, `checkout`)

let checkoutWorkers = (customer:string) => {

  let workers = getAllworkers()
  let targetworker = []
  for (let i=0; i<workers.length; i++)
  {
      let worker = GetWorkersByID(workers[i].id)
      if (worker.available === true)
      {
        targetworker.push({name:customer, workersNames: worker.Name, surnameWorker: worker.surname})
      }
  }
  return targetworker
}


let myWorker = () => 
{
  let my = checkoutWorkers('Vasiliy')
  console.log(my[0].NameCustomer)
    my.forEach(person=>
      {
        console.log(person.workersNames, person.surnameWorker)
      })
}
myWorker()