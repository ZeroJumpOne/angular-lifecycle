import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'frm-product-page',
  templateUrl: './frm-product.component.html',
  styleUrl: './frm-product.component.css'
})
export class FrmProductComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

   public isProducVisible: boolean = false;
   public currentPrice: number = 0;

   constructor() {
      console.log('constructor');

   }

   incresePrice() {
      this.currentPrice += 1;
   }

   ngOnInit(): void {
      console.log('ngOnInit');

   }

   ngOnChanges(changes: SimpleChanges): void {
      console.log(changes);
      console.log('ngOnChanges');

   }

   ngDoCheck(): void {
      console.log('ngDoCheck');

   }

   ngAfterContentInit(): void {
      console.log('ngAfterContentInit');

   }

   ngAfterContentChecked(): void {
      console.log('ngAfterContentChecked');

   }

   ngAfterViewInit(): void {
      console.log('ngAfterViewInit');

   }

   ngAfterViewChecked(): void {
      console.log('ngAfterViewChecked');

   }

   ngOnDestroy(): void {
      console.log('ngOnDestroy');

   }

}
