import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PhoneCartComponent } from '../phone-cart/phone-cart.component';
@Component({
  selector: 'app-phone-cart-icon',
  templateUrl: './phone-cart-icon.component.html',
  styleUrls: ['./phone-cart-icon.component.scss']
})
export class PhoneCartIconComponent {
  constructor(public dialog: MatDialog) { }

  hidden = false;

  openCart() {
    const dialogRef = this.dialog.open(PhoneCartComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
