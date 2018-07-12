import {Component} from 'angular2/core';
import { Insurance } from './ind_ins';

@Component({
    selector: 'mytable',
    templateUrl:'app/ts/list.component.html',
    styleUrls: ['app/ts/style.scss'],
    inputs: ['insurances']

})

export class PlaylistComponent{
   
    sel: Insurance = new Insurance(1,"Radi NESTO!","","","", "", "", "");
 
    onSelect(emp: Insurance){
        // console.log(JSON.stringify(emp));
 
        // alert("Working...")
        this.sel= emp;
       }
 }
