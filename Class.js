class Picture {
    constructor(painter,name, year,price) {
        this.painter = painter;
        this.year   = year;
        this.price   = price;
        this.name = name;

    }

    getPicture() {
        if (this.painter === undefined) {
            return `Painting:  ${this.name}`;

        } return `Painting: ${this.name}; Author ${this.Painter.getFullName()}`;
    } 

}
class Painter {
        constructor(pname, surname, byear,price) {
            this.year   = year;
            this.price   = price;
            this.pname = pname;
            this.surname = surname;
            this.byear = byear;
    
        }

    getFullName() {
        return `${this.pname} - ${this.surname} - ${this.byear}`;
    }

}


let picture1 = new Picture("John Doe","John Snow", 2004,1);
let picture2 = new Picture("John Doe","John Snow", 2004,2);

const Letak = [];
Letak.push(picture1);
Letak.push(picture2);
function MagPrice(){
    var total = 0;
    for (price in Letak) {
        total += Letak[price];
      }
      return total;
}

var highest = Number.NEGATIVE_INFINITY;
var tmp;
for (var i=Letak.length-1; i>=0; i--) {
    tmp = Letak[i].getPicture(Picture.price)
    if (tmp > highest) 
    highest = tmp;
}
console.log(highest);

console.log(MagPrice());