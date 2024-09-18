import { Component } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css'
})
export class SidemenuComponent {
   username:String ="Christian Mendieta";//Usuario
   background:String="";//Color de fondo
   widthMenu:number = 385;//Tamaño
   visibleMenu:boolean = true;

   setVisibilityMenu():boolean{//Meétodo del menu
    this.visibleMenu = !this.visibleMenu;//Cambia el booleano
    if (!this.visibleMenu){
      this.widthMenu = 385;
    } else{
      this.widthMenu = 385;
    }
    return this.visibleMenu;
   }

   setBackgroundMenu(color:string):void{//Coloca un color para el fondo
    this.background = color;
   }
   
   setSizeMenu(){
     this.widthMenu += 10;
     if (this.widthMenu>450){
      this.widthMenu = 385;
     }
   }
}
