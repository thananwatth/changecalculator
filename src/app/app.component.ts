import { Component } from '@angular/core';
import { concat } from '../../node_modules/rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Change calculator';
  money = 0;
  messagemoeny: String = '';
  dollars = 0;
  cents = 0;
  flagaddcomma = false;
  flaglast = 0;

  public moneydollar: number[] = [100, 50, 20, 10, 5, 1, 25, 10, 5, 1];
  public qtydollar: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  public typedollar: String[] = [' dollar bill ' , ' dollar bill ', ' dollar bill ', ' dollar bill ', ' dollar bill ',
  ' dollar bill ', ' quarter ', ' nickel ', ' dime ', ' penny '];
  public typedollars: String[] = [' dollar bills ' , ' dollar bills ', ' dollar bills ', ' dollar bills ', ' dollar bills ',
  ' dollar bills ', ' quarters ', ' nickels ', ' dimes ', ' pennies '];

  constructor() {

  }
  moneytoword () {
    this.moneydollar = [100, 50, 20, 10, 5, 1, 25, 10, 5, 1];
    this.qtydollar = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.dollars  = Math.floor(this.money);
    this.cents = Math.round((this.money - Math.floor(this.money) ) * 100);

    this.messagemoeny = 'Your chagne is ';
    this.flagaddcomma = false;

    for (let i = 0; i <= this.moneydollar.length; i++) {
      if (this.dollars > 0) {
        if (this.dollars >= this.moneydollar[i]) {
          this.qtydollar[i] = Math.floor(this.dollars / this.moneydollar[i] );
          this.dollars %= this.moneydollar[i];
          this.flagaddcomma = true;
        }
      } else {

        if (this.cents > this.moneydollar[i] && i >= 6) {
          this.qtydollar[i] = Math.floor(this.cents / this.moneydollar[i]);
          this.cents %= this.moneydollar[i];
          this.flagaddcomma = true;
        }
        if (this.qtydollar[i] > 0) {
          this.flaglast = i;
        }
      }
    }
    for (let i = 0; i <= this.moneydollar.length; i++) {
      if (this.qtydollar[i] > 0) {
        if (i < this.flaglast &&  this.messagemoeny !== 'Your chagne is ') {
          this.messagemoeny +=  ', ';
        }
        if (i === this.flaglast) {
          this.messagemoeny += ' and ';
        }
        this.messagemoeny += this.qtydollar[i].toString() + ' ' + this.moneydollar[i].toString();
        this.flagaddcomma = true;
        if (this.qtydollar[i] ===  1) {
          this.messagemoeny += this.typedollar[i].toString();
        } else {
          this.messagemoeny += this.typedollars[i].toString();
        }
      }
    }
  }

  onClickMe() {
    this.moneytoword();
  }



}

