import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TenisService } from 'src/app/service/tenis.service';
import { UtilityService } from 'src/app/service/utility.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  routeId= null;
  tenis: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private Tenis: TenisService,
    private router: Router,
    private Utilidades: UtilityService
  ) { }

  ngOnInit() {
    this.routeId = this.activatedRoute.snapshot.params['id'];

    if(this.routeId){
      this.Tenis.getOneTenis(this.routeId).subscribe(caixa => {this.tenis = caixa});
    }
    }



}
