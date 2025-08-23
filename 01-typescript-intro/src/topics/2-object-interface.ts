
const skills: string[] = ['Bash','Counter','Healing'];

interface Character {
  name: string,
    hp: number,
    skills: string[]
    hometown?: string; //el signo de interrogación indica que es opcional
};


const strider: Character= {
    name: 'Strider',
    hp: 100,
    skills: ['bash', 'counter'],
    
};

strider.hometown = 'Rivendell'; // Se puede agregar una propiedad opcional después de la creación del objeto

console.table(strider);





export {};