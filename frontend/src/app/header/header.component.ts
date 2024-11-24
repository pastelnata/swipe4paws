import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  @Output() toggleProfileBar = new EventEmitter<void>();

  constructor(private router: Router) { }
  
  profileClicked() {
    this.toggleProfileBar.emit();
  }

  logoClicked() {
    this.router.navigateByUrl('/');
  }
}
