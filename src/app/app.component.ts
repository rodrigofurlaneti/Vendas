import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Cargo',
      url: '/folder/Cargo'
    },
    {
      title: 'Categoria',
      url: '/folder/Categoria'
    },
    {
      title: 'Cliente',
      url: '/folder/Cliente'
    },
    {
      title: 'Comanda',
      url: '/folder/Comanda'
    },
    {
      title: 'Pagamento',
      url: '/folder/Pagamento'
    },
    {
      title: 'Pedido',
      url: '/folder/Pedido'
    },
    {
      title: 'Produto',
      url: '/folder/Produto'
    },
    {
      title: 'Usuário',
      url: '/folder/Usuario'
    },
    {
      title: 'Venda',
      url: '/folder/Venda'
    },
    {
      title: 'Venda Produto',
      url: '/folder/VendaProduto'
    }
  ];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
