import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-button',
  templateUrl: './home-button.component.html',
  styleUrls: ['./home-button.component.css']
})
export class HomeButtonComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  goHome() {
    this.router.navigateByUrl('home');
  }
}