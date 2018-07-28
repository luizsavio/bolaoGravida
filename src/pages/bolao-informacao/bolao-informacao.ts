import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { FirestoreServiceProvider } from '../../providers/firestore-service/firestore-service';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the BolaoInformacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bolao-informacao',
  templateUrl: 'bolao-informacao.html',
})
export class BolaoInformacaoPage {
  public bolao;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public firestoreService: FirestoreServiceProvider,
    public authService: AuthServiceProvider) {
    this.bolao = navParams.data;
  }

  participar(){
    //tem que corrigir este problema para adicionar um novo campo
    this.firestoreService.atualizarDocumento('bolaoparticipantes', this.bolao.idBolao, {
      partipantes: [
        { idUsuario: this.authService.currentUser.uid, participando: true }
      ]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BolaoInformacaoPage');
  }


  presentLoading(message) {
    const loading = this.loadingCtrl.create({
      duration: 500
    });

    loading.onDidDismiss(() => {
      const alert = this.alertCtrl.create({
        title: 'Alerta',
        subTitle: message,
        buttons: ['Fechar']
      });
      alert.present();
    });

    loading.present();
  }
}
