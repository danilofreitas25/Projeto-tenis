import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, AlertController } from '@ionic/angular';

import { Tenis } from 'src/app/model/tenis.model';
import { TenisService } from 'src/app/service/tenis.service';
import { UtilityService } from 'src/app/service/utility.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {

  listaTenis: Tenis [] = [];

  isModalOpen = false;
  
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  isModalOpen1 = false;
  
  setOpen1(isOpen: boolean) {
    this.isModalOpen1 = isOpen;
  }

  constructor(
    private Tenis: TenisService,
    private ActionSheet: ActionSheetController,
    private Utilidades: UtilityService,
    private router: Router
  ) { }

  ngOnInit() {

    this.Utilidades.carregando("Aguarde...", 2000);
    this.Tenis.getTenis().subscribe(results => this.listaTenis = results);
  }

  carrinho(id: number){

    try{
      this.Tenis.carrinhoTenis;  
    }catch(err){
      console.log(err);
    }finally{
      //Chama a menssagem 
      this.Utilidades.toastando("Bolo Excluido", "bottom", 2000, "danger"); 
     
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

  async actionMetod(tenis: Tenis){
    const action = this.ActionSheet.create({
      mode: 'ios',
      header: 'Selecione um Opção:',
      buttons: [
        {
          text: "Ver Informações",
          handler: () => {
            this.router.navigate(['/info',tenis]);
          },
          
        },
        {
          text: tenis.favorito ? 'Desmarcar como favorito' : 'Marcar como favorito',
          icon: tenis.favorito ? 'heart-outline' : 'heart',

          handler: () => {
            tenis.favorito = !tenis.favorito;
            this.Tenis.favoritoTenis(tenis);
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


