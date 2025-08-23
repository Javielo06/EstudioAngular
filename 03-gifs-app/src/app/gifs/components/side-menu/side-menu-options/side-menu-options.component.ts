import { RouterLink, RouterLinkActive } from '@angular/router';
import { Component } from '@angular/core';



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
    }

    


  ]




}
