import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrl: './price.component.css'
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {

   @Input()
   public price: number = 0;

   public intervalS?: Subscription;

   ngOnInit(): void {
      console.log('Componente Hijo: ngOnInit');

      this.intervalS = interval(1000).subscribe( valor => {
         console.log(`Tick: ${valor}`);
      })
   }

   ngOnChanges(changes: SimpleChanges): void {
      console.log('Componente Hijo: ngOnchanges');
      console.log({changes});
   }

   ngOnDestroy(): void {
      console.log('Componente Hijo: ngOnDestroy');
      this.intervalS?.unsubscribe();
   }

}
