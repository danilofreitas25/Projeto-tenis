import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { Tenis } from 'src/app/model/tenis.model';
import { TenisService } from 'src/app/service/tenis.service';
import { UtilityService } from 'src/app/service/utility.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  
  isModalOpen = false;
  
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  isModalOpen1 = false;
  
  setOpen1(isOpen: boolean) {
    this.isModalOpen1 = isOpen;
  }
  
  
  
  image = "https://cdn.pixabay.com/photo/2013/07/12/18/20/shoes-153310__340.png";
  image1 = "https://cdn.pixabay.com/photo/2016/03/27/22/16/fashion-1284496__340.jpg";
  image2 = "https://cdn.pixabay.com/photo/2017/07/31/15/06/boot-2558324__340.jpg";
  image3 = "https://media.istockphoto.com/id/1404635567/pt/foto/closeup-of-a-pair-of-black-leather-football-boots-isolated-on-white-background-professional.jpg?b=1&s=170667a&w=0&k=20&c=W3VR1_ZJzwClRYb3-jRdalAZU0UC2cxpygQatdGKQbM=";
  image4 = "https://media.istockphoto.com/id/461051707/photo/tap-shoes.jpg?b=1&s=170667a&w=0&k=20&c=idHFb3FlTPKF64OXYPQ_dEuu8NesqZYr1dvyIo6mR8U=";
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  
  listaTenis: Tenis [] = [];
  
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

  favorito(id: number){

    try{
      this.Tenis.favoritoTenis;  
    }catch(err){
      console.log(err);
    }finally{
      //Chama a menssagem 
      this.Utilidades.toastando("Bolo Excluido", "bottom", 2000, "danger"); 
     
    }  
  } 

  comprar(id: number){

    try{
      this.Tenis.carrinhoTenis;  
    }catch(err){
      console.log(err);
    }finally{
      //Chama a menssagem 
      this.Utilidades.toastando("Bolo Excluido", "bottom", 2000, "danger"); 
     
    }  
  } 

  async actionMetod(item: Tenis){
    const action = this.ActionSheet.create({
      mode: 'ios',
      header: 'Selecione um Opção:',
      buttons: [
        {
          text: "Ver receita",
          handler: () => {
            this.router.navigate(['/receita', item.id]);
          },
          
        },
        {
          text: item.favorito ? 'Desmarcar receita' : 'Marcar receita',
          icon: item.favorito ? 'radio-button-off' : 'checkmark-circle',

          handler: () => {
            item.favorito = !item.favorito;
            this.Tenis.favoritoTenis(item);
          }
        },        
        {
          text: "Cancelar",
          handler: () => {
            this.Utilidades.toastando('Operação cancelada', "middle", 2000, "secondary");
          }
        }
      ]
    }); (await action).present();
  }

}
