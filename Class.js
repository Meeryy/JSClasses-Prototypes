/*class Picture {
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


function threehighest(Letak){
let highest = Number.NEGATIVE_INFINITY;
let num2 = Number.NEGATIVE_INFINITY;
let num3 = Number.NEGATIVE_INFINITY;
let tmp;
for (let i=Letak.length-1; i>=0; i++){
    tmp = Letak[i].getPicture(Picture.price)
    console.log(Picture.price)
    if (Letak[i] > highest){
     let tmp1 = highest;
     let tmp2 = num2;
     highest = Letak[i];
     num2 = tmp1;
     num3 = tmp2
    }
    else if (Letak[i] > num2) {
    let tmp2 = num2;
    num2 = Letak[i];
    num3 = tmp2;
  } else if (Letak[i] > num3) {
    num3 = Letak[i];
  }
  return [highest, num2, num3]
  }
}
console.log(threehighest);

console.log(MagPrice());*/