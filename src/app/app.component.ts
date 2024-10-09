import {FormsModule} from '@angular/forms';
import {Router, RouterOutlet} from '@angular/router';
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
