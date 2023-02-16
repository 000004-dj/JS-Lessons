import {log} from "util";

console.log('lesson 4');

// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/


// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".

//my response:
// const promise1 = new Promise((res,rej)=> {
//     console.log("Promise is created")
// })
// promise1.then((res)=>
//     console.log("error")
// )


// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

//my response:
// const promise2 = new Promise((res,rej)=> {
//     res("Promise Data")
// })
// promise2.then((res)=>
//     console.log(res)
// )


// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль


//my response:
// const promise3 = new Promise((res,rej)=> {
//     rej("Promise Error")
// })
// promise3.catch((res)=>
//     console.log(res)
// )


// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

//my response:
// const promise4 = new Promise((res,rej)=> {
//    setTimeout(() =>res('Promise Data'), 3000)
// })
// promise4.then((res)=>
//     console.log(res)
// )

// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.

//my response:
// type HandlePromiseType = {
//    promise: any,
//    resolve: any,
//    reject: any,
//    onSuccess: (paramName: any) => void,
//    onError: (paramName: any) => void
// }
//
// const handlePromise = <HandlePromiseType>{
//    promise: null,
//    resolve: null,
//    reject: null,
//    onSuccess(paramName: any){
//       this.resolve(paramName)
//    },
//    onError(paramName: any){
//       this.reject(paramName)
//       console.log(`Promise is rejected with error: ${paramName}`)
//    }
// }
//
// const promiseCreating = ()=> {
//    handlePromise.promise = new Promise((res,rej)=> {})
//    handlePromise.reject = promiseRejecting
//    handlePromise.resolve = promiseResolving
// }
//
// const promiseResolving = (paramName: any)=> {
//    console.log(`Promise is resolved with data: ${paramName}`)
// }
// const promiseRejecting = (paramName: any)=> {
//    console.log(`Promise is rejected with error: ${paramName}`)
// }
//
// promiseCreating()
//


// Task 06
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и передайте созданные функции.

//my response:
// const promise5 = new Promise((rs)=>{
//  setTimeout(()=>rs("My name is"))
// })
// const onSuccess = (arg) => {
//    const myNameIs = "Sam"
//   return  arg + " " + myNameIs
// }
// const print = (arg) => {
//    console.log(arg)
// }
// promise5
//     .then((res) => onSuccess(res))
//     .then(res => print(res))


// Task 7
// Создайте три промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// второй промис возвращает объект {age: 16} через 3 с, а третий {city: ''} через 4с.
// Получите результаты работы промисов, объедините свойства объектов
// и выведите в консоль {name, age, city}

//my response:
// const promiseName = new Promise((rs) => {
//     setTimeout(() => rs({name: "Samuil"}), 2000)
// })
// const promiseAge = new Promise((rs) => {
//     setTimeout(() => rs({age: 23}), 3000)
// })
// const promiseCity = new Promise((rs) => {
//     setTimeout(() => rs({city: 'Gdańsk'}), 4000)
// })
//
// const func = async () => {
//     const nameObj = await promiseName
//     const ageObj = await promiseAge
//     const cityObj = await promiseCity
//
//     const result = Object.assign(nameObj, ageObj, cityObj)
//     console.log(result)
// }




// just a plug
export default () => {
};