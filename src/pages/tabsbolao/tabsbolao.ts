import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PerfilPage } from '../perfil/perfil';
import { BolaoInformacaoPage } from '../bolao-informacao/bolao-informacao';
import { BolaoParticipantesPage } from '../bolao-participantes/bolao-participantes';
import { BolaoPalpitePage } from '../bolao-palpite/bolao-palpite';
import { BolaoEditarPage } from '../bolao-editar/bolao-editar';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the TabsbolaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabsbolao',
  templateUrl: 'tabsbolao.html',
})
export class TabsbolaoPage {
  tab1: any;
  tab2: any;
  tab3: any;
  tab4: any;
  bolao;
  criador: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthServiceProvider) {
    this.tab1 = BolaoInformacaoPage;
    this.tab2 = BolaoParticipantesPage;
    this.tab3 = BolaoPalpitePage;
    this.tab4 = BolaoEditarPage;
    this.bolao = navParams.get('bolaoSelecionando');
    (authService.currentUser.uid == this.bolao.idUsuarioBolaoCriado) ? this.criador = true : this.criador = false
  }


}
