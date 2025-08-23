import { Component, signal } from "@angular/core";

@Component({
    selector: 'app-counter',
    templateUrl: './counter-page.component.html'

})


export class CounterPageComponent {
    counter = 10;
    counterSignal = signal(10)

    /*metodo*/ increaseBy (value: number){
        this.counter = this.counter + value
        this.counterSignal.update((current) => current + value);
    }

    resetCounter(){
        this.counter = 0;
        this.counterSignal.set(0)


    }
}