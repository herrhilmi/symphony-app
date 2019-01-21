import { Component, OnInit } from '@angular/core';
import { Platform } from '@angular/cdk/platform';

declare var SYMPHONY: any;

@Component({
	selector: 'app-controller',
	template: ``
})
export class ControllerComponent implements OnInit {
	myService: any;

	constructor() {
		this.myService = SYMPHONY.services.register("symphony.controller:controller");
	}

	ngOnInit() {
		SYMPHONY.remote.hello().then(function (data) {
			SYMPHONY.application.register("symphony.app", ["modules", "applications-nav", "entity"], ["symphony.controller:controller"])
				.then(function (response) {
				var modulesService = SYMPHONY.services.subscribe("modules");
				var navService = SYMPHONY.services.subscribe("applications-nav");
				var entityService = SYMPHONY.services.subscribe("entity");

				// in case you want to have MenuItem
				navService.add("symphony.app-nav", "My Symphony App", "symphony.controller:controller");
				
				// register as a renderer
				entityService.registerRenderer("test.model.Test", {}, "symphony.controller:controller");
				this.myService.implement({
					select: function (id) {
						if (id == "symphony.controller-nav") {
							navService.focus("symphony.controller-nav");
						}
						modulesService.show("symphony.app", { title: "My Symphony App" }, "symphony.controller:controller", "https://localhost:4200", { "canFloat": true });
						modulesService.focus("symphony.app");
					},
					render: function (type, entityData) {
						if (type == "test.model.Test") {
							entityData.instanceId = Math.floor(Math.random() * 1000000),
							entityData.renderTime = new Date();
							var template = '<label class="tempo-text-color--normal">TestName : ' + entityData.myDataWrapper.testName + '</label>';
							return { template: '<messageML>' + template + '</messageML>', data: entityData };
						}
					}
				});
			}.bind(this))
		}.bind(this));
	}
}
