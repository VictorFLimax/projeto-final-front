import {Component, OnInit} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {


  constructor(private router: Router) {
  }

  ngOnInit(): void {
    let token = localStorage.getItem('token');
    if(!token){
      this.router.navigate(['/login']).then();
    }
  }

}
