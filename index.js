
    let tools = ['lodash', 'react', 'next', 'strapi', 'axios', 'typescript'];
    printArr(tools);
    tools = tools.reverse();
    printArr(tools);
    tools = tools.sort();
    printArr(tools);
    const car = {brand: 'skoda', model: '1', year: '1672'};
    let carDetails = 'brand: ' + car.brand + ' model: ' + car.model + ' year: ' + car.year;
    console.log(carDetails);
    let value = Math.floor(Math.random() * 555);
    console.log(value);

function printArr(arr){
    arr.forEach(element => {
        console.log(element);
    });
}
