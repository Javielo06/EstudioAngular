


export class Person {
    public name: string
    public address: string

  constructor(name: string, address: string) {
    this.name = name;
    this.address = address;
  }
}

export class Hero extends Person {
        public alterEgo: string
        public age: number
        public realName: string
    
        constructor(alterEgo: string, age: number, realName: string){
            super(realName, 'No define'); // Call the constructor of the Person class
            this.alterEgo = alterEgo;
            this.age = age;
            this.realName = realName;   
        }
       
}



const ironman = new Hero('Ironman',45,'tony stark');

console.log(ironman); // Fernando