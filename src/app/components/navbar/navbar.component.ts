import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignUpComponent } from '../login/sign-up/sign-up.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(public dialog: MatDialog) { }

  @Input() isNavbarUser: boolean = false
  openDialog() {
    const dialogRef = this.dialog.open(SignUpComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
