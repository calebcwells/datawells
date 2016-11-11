import { Component } from '@angular/core';
import 'expose?$!expose?jQuery!jquery';
import '../../../node_modules/easy-countdown/dest/jquery.countdown.js';

declare var $: any;

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
    ngOnInit() {
        $(".countdown").countdown({
            date: "January 27, 2017 00:00:00",
            render: function (data) {
                $(this.el)
                    .html("<li><span>" +
                    this.leadingZeros(data.days, 2) +
                    "</span><p>days</p></li><li class='separator'>&nbsp;</li><li><span>" +
                    this.leadingZeros(data.hours, 2) +
                    "</span><p>hours</p></li><li class='separator'>:</li><li><span>" +
                    this.leadingZeros(data.min, 2) +
                    "</span><p>minutes</p></li><li class='separator'>:</li><li><span>" +
                    this.leadingZeros(data.sec, 2) +
                    "</span><p>seconds</p></li>");
            }
        });
    }
}
