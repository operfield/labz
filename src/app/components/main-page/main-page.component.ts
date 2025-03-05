import {AfterViewInit, Component, HostListener, NgModule, OnInit, ViewChild} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {VinyleComponent, VinyleModule} from '../vinyle/vinyle.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent   {

}

@NgModule({
  declarations: [ MainPageComponent],
  exports: [MainPageComponent],
  imports: [
    CommonModule,
    IonicModule,
    VinyleModule
  ],
})
export class MainPageModule {}
