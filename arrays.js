// 1. Вывести в консоль все элементы массива используя наиболее удобный для этого метод

const people = [ 
    {name: 'Sandra', age: 18}, 
    {name: 'Erin', age: 28}, 
    {name: 'Carl', age: 42}, 
    {name: 'Lloyd', age: 12}, 
    {name: 'Samuel', age: 31}, 
    {name: 'William', age: 65}, 
    {name: 'Ric', age: 53}, 
    {name: 'Mick', age: 12}, 
    {name: 'Ludwig', age: 74},
    {name: 'Hilaire', age: 10}, 
    {name: 'Menachem', age: 4}, 
    {name: 'Saul', age: 52}, 
    {name: 'Robert', age: 65}, 
    {name: 'Blair', age: 12}, 
    {name: 'Robert', age: 81}, 
    {name: 'Peter', age: 69}
];

console.log(people);

// 2. Используя тот же метод, вывести в консоль все имена людей (свойство `name`)

const firstName = people.map(item =>{
    return `${item.name}`;
})
console.log(firstName);

// 3. Используя наиболее удобный для этого метод создать новый массив - minorPeople, на основе массива people, который будет хранить в себе только несовершеннолетних людей. (Младше 18 лет).

const minorPeople = people.filter(item =>{
    return item.age < 18
})
console.log(minorPeople);

// 4. Используя тот же метод создать новый массив -  oldPeople, на основе массива people, в котором будут люди только от 50 лет.
 const oldPeople = people.filter(item => {
    return item.age >= 50
 })
console.log(oldPeople);

// 5. Используя наиболее удобный для этого метод создайте новый массив - futurePeople , на основе массива people, однако возраст у каждого из них должен увеличиться на 30 лет.

const futurePeople = people.map(item =>{
    return item.age + 30
})
console.log(futurePeople);

// 6. Используя тот же метод, создайте новый массив - deadPeople, на основе массива futurePeople, в котором к людям, чей возраст превышает 100 лет, должно добавиться еще одно свойство isDead со значением true, а к остальным, со значением false. 

const deadPeople = [
    {name: 'Alvi', age: 28}, 
    {name: 'Lizzy', age: 23}, 
    {name: 'Carl', age: 103}, 
    {name: 'Leyt', age: 14}, 
    {name: 'Kate', age: 89}, 
    {name: 'William', age: 107}, 
    {name: 'Morty', age: 46}, 
    {name: 'Mickhael', age: 25}, 
    {name: 'Ludwig', age: 104},
    {name: 'Vlad', age: 15}, 
    {name: 'Poul', age: 4}, 
    {name: 'Selena', age: 30}, 
    {name: 'Robert', age: 101}, 
    {name: 'Billy', age: 12}, 
    {name: 'Edward', age: 81}, 
    {name: 'Peter', age: 110}
];

const trueFalse = deadPeople.map(item =>{
    item.age > 100 ? item['isDead'] = true : item['isDead'] = false
    return item
})
console.log(trueFalse);