import { Component, signal, output } from '@angular/core';
import { Character } from '../../../../../src/app/interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  templateUrl: './character-add.component.html',
})
export class CharacterAddComponent {
 name = signal('');
 power = signal (0);

 newCharacter = output<Character>()


  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    const newCharacter: Character = {
      //id: this.addCharacter().length + 1,
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      power: this.power()
    };

    
    //this.characterAdded.emit(newCharacter);
    this.newCharacter.emit(newCharacter)
    this.resetFields();

    this.resetFields();
  }

  

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }

}
