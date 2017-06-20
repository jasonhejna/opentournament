import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginOpen = false
  players = ['Sarmad', 'Christiaan', 'Wilson', 'Todd', 'Cindy', 'Ryan', 'Mike', 'David', 'Al', 'John', 'Brent', 'Jason', 'Sean', 'Patrick']

  openLogin() {
    console.log('hello')
    this.loginOpen = true
  }
}

