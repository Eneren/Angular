import { Input, Component, OnChanges} from '@angular/core';



@Component
({
    selector: 'child-comp',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.css']



})

export class ChildComponent implements OnChanges 
{
        @Input() a: number = 0;
        @Input() b: number = 0;
        @Input() c: number = 0;
        discr = this.b * this.b - 4 * this.a * this.c;
        x1 = (-this.b + Math.sqrt(this.discr)) / 2 * this.a;
        x2 = (-this.b - Math.sqrt(this.discr)) / 2 * this.a;

    ngOnChanges():void
    {
         this.solve();
    }
    solve() {
        this.discr = this.b * this.b - 4 * this.a * this.c;
        this.x1 = (-this.b + Math.sqrt(this.discr)) / 2 * this.a;
        this.x2 = (-this.b - Math.sqrt(this.discr)) / 2 * this.a;
        
    }
}
