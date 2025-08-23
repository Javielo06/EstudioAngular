
export interface Product {
    description: string;
    price: number;

}

const phone: Product = {
    description: 'Nokia 3310',
    price: 150.0
}

const tablet: Product = {
    description: 'iPad',
    price: 250.0
}


interface taxCalculatorOptions {
    tax: number;
    products: Product[];
}


export function taxCalculator (options: taxCalculatorOptions): [number,number] {  //let total = 0  //options.products.forEach(product => {  //    total += product.price;  //})
     

    let total = 0;


options.products.forEach(({price}) => {
        total += price;
    });

    return [total, total * options.tax];
}

const shoppingCart = [phone, tablet];
const tax = 0.15;


export const [total, taxTotal] = taxCalculator(
    {
        products: shoppingCart,
        tax,
        
    }
)

console.log('Total: ', total);
console.log('Tax: ', tax);




//    interface Estudiante {
//        nombre: string,
//        calificacion: number;
//    }
//    
//    const estudiantes: Estudiante[] = [
//        { nombre: 'Goku', calificacion: 10 },
//        { nombre: 'Vegeta', calificacion: 4 },
//        { nombre: 'Trunks', calificacion: 8 },
//        { nombre: 'Gohan', calificacion: 7 },
//        { nombre: 'Piccolo', calificacion: 6 }
//    ];
//    
//    let reprobado = 0
//    let aprobado = 0;
//    
//    estudiantes.sort((a, b) => b.calificacion - a.calificacion).forEach((estudiante) => {
//        if (estudiante.calificacion >= 7) {
//            console.log(`Aprobado: ${estudiante.nombre} aprobó con ${estudiante.calificacion}`);
//            aprobado++;
//        } else {
//            console.log(`Reprobado: ${estudiante.nombre} reprobó con ${estudiante.calificacion}`);
//            reprobado++;
//        }
//    });


