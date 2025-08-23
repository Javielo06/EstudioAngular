import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { NgClass } from '@angular/common';
import { Character } from '../../../../../src/app/interfaces/character.interface';

@Component({
  selector: 'dragonball-character-list',
  templateUrl: './character-list.component.html',
  imports: [NgClass]
  
})
export class CharacterListComponent {

  characters = input.required<Character[]>();
  listName = input.required<string>();

    powerClasses = (character: Character) =>
    computed(() => {
      return {
        'text-danger': character.power > 9000,
        'text-primary': character.power <= 9000
      };
    });



}
