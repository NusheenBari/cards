import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatExpansionModule} from '@angular/material/expansion'; 
import {MatDividerModule} from '@angular/material/divider'; 
import {MatListModule} from '@angular/material/list'; 

const MaterialComponents = [MatCardModule,MatIconModule, MatButtonModule,MatExpansionModule,MatDividerModule,MatListModule]
@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule {  }
