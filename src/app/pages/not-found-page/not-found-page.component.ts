import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.css']
})
export class NotFoundPageComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
  }

  navigateToHomePage(){
    this.router.navigate(['/home']);
  }

}
