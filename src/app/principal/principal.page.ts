import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("******ngOnInit******");
  }

  ngOnDestroy(){
    console.log("******ngOnDestroy******");
  }
  ionViewWillEnter(){
    console.log("******ionViewWillEnter******");
  }

  ionViewDidEnter(){
    console.log("******ionViewDidEnter******");
  }
  ionViewWillLeave(){
    console.log("******ionViewWillLeave******");
  }
  ionViewDidLeave(){
    console.log("******ionViewDidLeave******");
  }
}
