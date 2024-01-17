class Author {
    /** @type {string}  */
    firstname;
    /** @type {string}  */
    lastname;
    /** @type {Date}  */
    #birthday;

    /**
     * @param {string} firstname 
     * @param {string} lastname 
     * @param {Date} birthday 
     */
    constructor(firstname, lastname, birthday) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.#birthday = birthday;
    }

    /**
     * Get full author name
     */
    getAuthor() {
        return `${this.firstname} ${this.lastname} - 
        ${this.#birthday.getDay()}.${this.#birthday.getMonth() + 1}.${this.#birthday.getFullYear()}`;
    }
}

class Painting {
    /** @type {Author} */
    author;
    /** @type {string} */
    name;
    /** @type {number} */
    price;
    /** @type {number} */
    createdYear;

    /**
     * @param {Author} author 
     * @param {string} name 
     * @param {number} price 
     * @param {number} createdYear 
     */
    constructor(author, name, price, createdYear) {
        this.author = author;
        this.name = name;
        this.price = price;
        this.createdYear = createdYear;
    }
    getPainting() {
        if (this.author === undefined) {
            return `Painting: ${this.name}`;
        }
        return `Painting: ${this.name}; Author ${this.author.getAuthor()}`;
    }
}

let karel = new Author("Karel", "Novotny˝", new Date(2000, 5, 20));
let mona = new Painting(karel, "Mona Lisa", 3000, 1800);
let mona2 = new Painting(karel, "Mona Lisa", 3000, 1800);
let mona3 = new Painting(karel, "Mona Lisa", 5270, 1800);



const Letak = [];
Letak.push(mona);
Letak.push(mona2);
Letak.push(mona3);

function MagPrice() {
    var total = 0;
    for (price in Letak) {
        total += price;
    }
    return total;

}
console.log(MagPrice());



function threehighest() {
    let highest = Number.NEGATIVE_INFINITY;
    let num2 = Number.NEGATIVE_INFINITY;
    let num3 = Number.NEGATIVE_INFINITY;
    let tmp;
    for (let i = Letak.length - 1; i >= 0; i--) {
        tmp = Letak[i];
        if (tmp.price > highest) {
            let tmp1 = highest;
            let tmp2 = num2;
           highest = tmp.price;
           num2 = tmp1;
           num3 = tmp2
        }
        else if (tmp.price > num2) {
            let tmp2 = num2;
            num2 = tmp.price;
            num3 = tmp2;
        } else if (tmp.price > num3) {
            num3 = tmp.price;
        
    }
  }
  return [highest, num2, num3]
}
console.log(threehighest());

console.log(mona.getPainting());
console.log(Letak);