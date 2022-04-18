import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {

  active = "instituicoes";
  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
    let activedTab = this.route.snapshot.paramMap.get('tab');
    if (activedTab)
      this.active = activedTab;
  }

}
