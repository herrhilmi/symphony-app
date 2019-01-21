import { Component, OnInit } from '@angular/core';

declare var SYMPHONY: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  shareService: any;

  ngOnInit() {
    SYMPHONY.remote.hello().then(function (data) {
      SYMPHONY.application.register("symphony.app", ["share"], ["symphony.controller:controller"])
	    .then(function (response) {
          this.shareService = SYMPHONY.services.subscribe("share");
        }.bind(this))
    }.bind(this));
  }


 
  handleClick() {
    var test = {
      author: "herrhilmi",
      testName: "Symphony App Angular PoC"
    };
    var data = {
      plaintext: ``,
      presentationML: '<entity></entity>',
      entityJSON: { myDataWrapper: test},
      entity: {},
      format: 'com.symphony.messageml.v2',
      inputAutofill: '',
    };
    this.shareService.share("test.model.Test", data);
  }

}
