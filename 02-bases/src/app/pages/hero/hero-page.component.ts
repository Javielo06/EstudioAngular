
import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';




@Component({
    templateUrl: 'hero-page.component.html',
    imports: [UpperCasePipe] 
})

export class HeroPageComponent  {
name = signal ('Ironman');
age = signal(45);

    heroDescription = computed(() => {
        const description = `${this.name()} - ${this.age()}`;
        return description
    })

    /* ESTO ES LO MISMO QUE LA SEÑAL COMPUTADA DE ARRIBA ^
    getHeroDescription() {
        return `${this.name()} - ${this.age()}`;
    } */

    capitalizedName = computed(() => {
        this.name() 
    })    

    changeHero() {
        this.name.set ('Spiderman');
        this.age.set (22);
    }


    resetForm() {
        this.name.set ('Ironman');
        this.age.set (45);
    }

    resetAge() {
        this.age.set (60);
    }

}