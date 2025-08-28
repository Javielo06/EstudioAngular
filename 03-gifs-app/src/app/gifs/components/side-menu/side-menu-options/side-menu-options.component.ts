import { GifService } from 'src/app/gifs/services/gifs.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Component, inject } from '@angular/core';



interface MenuOption{
  label: string;
  subLabel: string;
  router: string;
  icon: string;
}


@Component({
  selector: 'gifs-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.component.html',
  
})
export class SideMenuOptionsComponent { 
  GifService = inject(GifService);

  menuOptions:MenuOption[] = [

    {
      icon: 'fa-solid fa-chat-line',
      label: 'Trending',
      subLabel: 'Gifs Populares',
      router: '/dashboard/trending'
    },

    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Buscador',
      subLabel: 'Buscar Gifs',
      router: '/dashboard/search'
    },




  ]




}
