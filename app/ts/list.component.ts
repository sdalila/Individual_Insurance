import {Component} from 'angular2/core';
import { Insurance } from './ind_ins';

@Component({
    selector: 'mytable',
    templateUrl:'app/ts/list.component.html',
    styleUrls: ['app/ts/style.scss'],
    inputs: ['insurances']

})

export class PlaylistComponent{ }
