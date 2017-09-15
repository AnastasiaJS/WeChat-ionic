import {Component,ViewChild } from '@angular/core';
import { Platform, Tabs } from 'ionic-angular';
import {AboutPage} from '../about/about';
import {ContactPage} from '../contact/contact';
import {HomePage} from '../home/home';
import {SettingPage} from '../setting/setting';
import {LoginPage} from '../login/login';
import { BackButtonService } from "../../services/backButton.service";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tabRoots: Object[];
  @ViewChild('myTabs') tabRef: Tabs;

  constructor(public backButtonService: BackButtonService,
              private platform: Platform) {

    this.tabRoots = [
      {
        root: HomePage,
        tabTitle: '微信',
        tabIcon: 'chatbubbles'
      }, {
        root: ContactPage,
        tabTitle: '通讯录',
        tabIcon: 'contacts'
      }, {
        root: AboutPage,
        tabTitle: '发现',
        tabIcon: 'navigate'
      }, {
        root: SettingPage,
        tabTitle: '我',
        tabIcon: 'person'
      }];

  platform.ready().then(() => {
          this.backButtonService.registerBackButtonAction(this.tabRef);
      });
  };

}
