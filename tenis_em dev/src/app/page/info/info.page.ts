import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { Tenis } from 'src/app/model/tenis.model';

import { TenisService } from 'src/app/service/tenis.service';
import { UtilityService } from 'src/app/service/utility.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
carrinhoMetod(arg0: any) {
throw new Error('Method not implemented.');
}
comprarMetod(arg0: any) {
throw new Error('Method not implemented.');
}

  routeId= null;
  tenis: any = {};
  

  constructor(
    private activatedRoute: ActivatedRoute,
    private ActionSheet: ActionSheetController,
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

    async cartMetod(tenis: Tenis){
      const action = this.ActionSheet.create({
        mode: 'ios',
        header: 'Deseja adicionar ao carrinho?:',
        buttons: [
          {
            text: tenis.carrinho ? 'Retirar do carrinho' : 'Adicionar ao carrinho',
            icon: tenis.carrinho ? 'cart-outline' : 'cart',
  
            handler: () => {
              tenis.carrinho = !tenis.carrinho;
              this.Tenis.carrinhoTenis(tenis);

            }
          },        
          {
            text: "Voltar",
            handler: () => {
              this.Utilidades.toastando('Operação cancelada', "middle", 2000, "secondary");
            }
          }
        ]
      }); (await action).present();
    }



}
