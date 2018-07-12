import {Component} from 'angular2/core';
import {Config} from './config.service';
import {Insurance} from './ind_ins';
import {PlaylistComponent} from './list.component';


@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    styleUrls: ['app/ts/style.scss'],
    directives: [PlaylistComponent]

})

export class AppComponent {
    mainHeading = Config.MAIN_HEADING;
    insurances:Array<Insurance>;

    constructor(){
        this.insurances=[
            new Insurance(1, "PZO", "25", "ACTIVE", "1253", "OK", "11/07/2018  12:48", "05/05/2015 12:0"),
            new Insurance(2, "DZO", "43", "IN PROGRESS", "3456", "OK", "05/07/2018  10:54", "05/05/2015 12:00"), 
            new Insurance(3, "PZO", "125", "TERMINATED", "7623", "OK", "11/07/2018  12:48", "05/05/2015 12:00"),
            new Insurance(4, "PZO", "432", "ACTIVE", "4252", "OK", "11/07/2018  12:48", "05/05/2015 12:00"),
            

        ]
    }
}
