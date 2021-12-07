import { Component } from '@angular/core';
     
@Component({
    selector: 'my-app',
    template: `<label>Введите радиус:</label>
                 <input [(ngModel)]="radius"(change) = "solve($event)">
                 <p>Длина окружности = {{lenhgt}}</p>
                 <p>Площадь круга = {{square}}</p>
                 <p>Обьем шара = {{volume}}</p>`
})
export class AppComponent { 
    radius = 0;
    lenhgt = 2 * 3.14159 * this.radius;
    square = 3.14159 * this.radius * this.radius;
    volume = 3.14159 * this.radius * this.radius * this.radius * 4 / 3;
    solve($event:any):void
    {
      this.lenhgt = 2 * 3.14159 * this.radius;
      this.square = 3.14159 * this.radius * this.radius;
      this.volume = 3.14159 * this.radius * this.radius * this.radius * 4 / 3;   
    }
}