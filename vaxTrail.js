const persons = [
    { name: 'Biplap', age: 22, temperature: 98 },
    { name: 'sunil', age: 21, temperature: 98 },
    { name: 'Kabir', age: 36, temperature: 99 },
    {
        name: 'Rahul', age: 37,
        temperature: 99
    },
    { name: 'Paul', age: 42, temperature: 98 },
    {
        name: 'Kat', age: 41,
        temperature: 98
    },
    { name: 'Nayem', age: 50, temperature: 100 }, {
        name: 'Sabnaj', age: 51,
        temperature: 101
    }
]
const temperatureLess100 = [];
const temperatureMore100 = [];

for (const person of persons) {
    if (person.temperature < 100) {
        const result = person;
        temperatureLess100.push(result);
    }
    else {
        const result = person;
        temperatureMore100.push(result);
    }
}
const vaxTrail = () => {
    const personListA = temperatureLess100.filter(person => person.age >= 20 && person.age <= 30);
    console.log("A:", personListA);
    const personListB = temperatureLess100.filter(person => person.age >= 31 && person.age <= 40);
    console.log("B:", personListB);
    const personListC = temperatureLess100.filter(person => person.age >= 41 && person.age <= 50);
    console.log("C:", personListC);
    const personListD = temperatureMore100.filter(person => person.age);
    console.log("D:", personListD);

}

vaxTrail();
