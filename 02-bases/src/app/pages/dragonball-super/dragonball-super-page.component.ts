import { DragonballService } from './../../services/dragonball.service';
import { Component, inject } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import { CharacterAddComponent } from '../../components/dragonball/character-add/character-add.component';

@Component({
  selector: 'app-super-dragonball-page.component',
  standalone: true,
  imports: [CharacterListComponent, CharacterAddComponent],
  templateUrl: './dragonball-super-page.component.html',
})
export class DragonballSuperPageComponent {

  //metodo tradicional de llamar a los servicios creados
   //constructor(public dragonballService: DragonballService) {}

   //nuevo metodo para llamar la instancia de la clase del service
   public dragonballService = inject (DragonballService);




  }
