import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  isModalOpen = false;
  teste: any;
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;

    const teste = undefined;
  }

  constructor(
    private actionSheetCtrl:ActionSheetController
  ) { }

  ngOnInit() {
    
      this.teste=document.querySelector('ion-page');
      }
      canDismiss = async () => {
        const actionSheet = await this.actionSheetCtrl.create({
          header: 'Tem certeza?',
          buttons: [
            {
              text: 'Sim',
              role: 'confirm',
            },
            {
              text: 'Não',
              role: 'cancel',
            },
          ],
        });
    
        actionSheet.present();
    
        const { role } = await actionSheet.onWillDismiss();
    
        return role === 'confirm';
      };
  }


