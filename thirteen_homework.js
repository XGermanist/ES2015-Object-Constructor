let vehicles = [];

document.getElementById("createCar").addEventListener("click", function() {createCar()} );
document.getElementById("createPlane").addEventListener("click", function() {createPlane()} );
document.getElementById("createShip").addEventListener("click", function() {createShip()} );

document.getElementById("showCar").addEventListener("click", function() {showCar()} );
document.getElementById("showPlane").addEventListener("click", function() {showPlane()} );
document.getElementById("showShip").addEventListener("click", function() {showShip()} );

document.getElementById("changeCar").addEventListener("click", function() {changeCar()} );
document.getElementById("changePlane").addEventListener("click", function() {changePlane()} );
document.getElementById("changeShip").addEventListener("click", function() {changeShip()} );

let messageData = document.querySelector(".vehicleMessage");
let displayData = document.querySelector(".vehicleDisplay");
let functionData = document.querySelector(".vehicleFunction");

class Vehicle
{
  constructor(weight, length, price)
  {
    this.weight = weight;
    this.length = length;
    this.price = price;
  }
  getSpecs = () => displayData.innerHTML = `<p> Характеристики: масса ${this.weight}, длина ${this.length} </p>`;
  showPrice = () => displayData.innerHTML = `Эта приблуда стоит ${this.price}`;
  go = () => console.log("Обожемой, оно движецца");
}

class Car extends Vehicle
{
  constructor(weight, length, price, brand, transmission)
  {
    super(weight, length, price);
    this.brand = brand;
    this.transmission = transmission;
  }
  go = () => functionData.innerHTML = "<h5> Машина поехала </h5>";
  wash = () => console.log("Машину моют");
}

class Plane extends Vehicle
{
  constructor(weight, length, price, manufacturer)
  {
    super(weight, length, price);
    this.manufacturer = manufacturer;
  }
  go = () => functionData.innerHTML = "<h5> Самолет лихо полетел </h5>";
  fuel = () => console.log("Самолет заправляют");
}

class Ship extends Vehicle
{
  constructor(weight, length, price, country)
  {
    super(weight, length, price);
    this.country = country;
  }
  go = () => functionData.innerHTML = "<h5> Корабль лихо пошел (не 'поплыл'!) </h5>";
  train = () => console.log("На корабле учат матросов");
}

 createCar = () =>
{
let newcarweight = prompt("Введите массу нового автомобиля");
let newcarlength = prompt("Введите длину нового автомобиля");
let newcarprice = prompt("Введите цену нового автомобиля");
let newcarbrand = prompt("Введите производителя нового автомобиля");
let newcartransm = prompt("Введите трансмиссию нового автомобиля");
const car = new Car (newcarweight || "N/A", newcarlength || "N/A", newcarprice || "N/A", newcarbrand || "N/A", newcartransm || "N/A");
messageData.innerHTML = "<h5> Машина создана! </h5>";
car.getSpecs();
car.go();
vehicles[0] = car;
}

createPlane = () =>
{
let newplaneweight = prompt("Введите массу нового самолета");
let newplanelength = prompt("Введите длину нового самолета");
let newplaneprice = prompt("А сколько новый самолет будет стоить?");
let newplanemanufacturer = prompt("Введите компанию-производителя нового самолета");
const plane = new Plane (newplaneweight || "N/A", newplanelength || "N/A", newplaneprice || "N/A", newplanemanufacturer || "N/A");
messageData.innerHTML = "<h5> Самолет создан! </h5>";
plane.getSpecs();
plane.go();
vehicles[1] = plane;
}

createShip = () =>
{
  let newshipweight = prompt("Введите массу нового корабля");
  let newshiplength = prompt("Введите длину нового корабля");
  let newshipprice = prompt("Почем лодочку продавать будем?");
  let newshipcountry = prompt("Введите страну, под чьим флагом попывет");
  const ship = new Ship (newshipweight || "N/A", newshiplength || "N/A", newshipprice || "N/A", newshipcountry || "N/A");
  messageData.innerHTML = "<h5> Корабль создан! </h5>";
  ship.getSpecs();
  ship.go();
  vehicles[2] = ship;
}

showCar = () =>
{
 vehicles[0].getSpecs();
 displayData.innerHTML = `<h5> Дополнительные данные — производитель: ${vehicles[0].brand}, тип трансмиссии: ${vehicles[0].transmission}, цена: ${vehicles[0].price} </h5>`;
 messageData.innerHTML = "";
 functionData.innerHTML = "";
}
showPlane = () =>
{
vehicles[1].getSpecs();
displayData.innerHTML = `<h5> Дополнительные данные — производитель: ${vehicles[1].manufacturer}, цена: ${vehicles[1].price} </h5>`;
messageData.innerHTML = "";
functionData.innerHTML = "";
}
showShip = () =>
{
 vehicles[2].getSpecs();
 displayData.innerHTML = `<h5> Дополнительные данные — родная страна: ${vehicles[2].country}, цена: ${vehicles[2].price} </h5>`;
 messageData.innerHTML = "";
 functionData.innerHTML = "";
}

changeCar = () =>
{
  let updcarweight = prompt("Введите уточненную массу автомобиля");
  let updcarlength = prompt("Введите уточненную длину автомобиля");
  let updcarprice = prompt("Введите уточненную цену автомобиля");
  let updcarbrand = prompt("Введите уточненного производителя автомобиля");
  let updcartransm = prompt("Введите уточненную трансмиссию автомобиля");
  vehicles[0].weight = updcarweight;
  vehicles[0].length = updcarlength;
  vehicles[0].price = updcarprice;
  vehicles[0].brand = updcarbrand;
  vehicles[0].transmission = updcartransm;
  messageData.innerHTML = "<h5> Данные по машине обновлены! </h5>";
  vehicles[0].getSpecs();
}
changePlane = () =>
{
  let updplaneweight = prompt("Введите уточненную массу самолета");
  let updplanelength = prompt("Введите уточненную длину самолета");
  let updplaneprice = prompt("Почем мы будет продавать его сейчас?");
  let updplanemanufacturer = prompt("Кто теперь производит?");
  vehicles[1].weight = updplaneweight;
  vehicles[1].length = updplanelength;
  vehicles[1].price = updplaneprice;
  vehicles[1].manufacturer = updplanemanufacturer;
  messageData.innerHTML = "<h5> Данные по самолету обновлены! </h5>";
  vehicles[1].getSpecs();
}
changeShip = () =>
{
  let updshipweight = prompt("Введите уточненную массу корабля");
  let updshiplength = prompt("Введите уточненную длину корабля");
  let updshipprice = prompt("Сколько теперь будет стоить?");
  let updshipcountry = prompt("Под чьим флагом будет сейчас?");
  vehicles[2].weight = updshipweight;
  vehicles[2].length = updshiplength;
  vehicles[2].price = updshipprice;
  vehicles[2].country = updshipcountry;
  messageData.innerHTML = "<h5> Данные по кораблю обновлены! </h5>";
  vehicles[2].getSpecs();
}
