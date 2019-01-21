import { Component, HostBinding } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
declare var SYMPHONY: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
    title = 'Symphony-app';
	
	@HostBinding('class') 
	componentCssClass;

	constructor(public overlayContainer: OverlayContainer) {
		SYMPHONY.remote.hello().then(function (data) {
			this.updateTheme(data);
			// select service in 2nd param
			SYMPHONY.application
				.connect("symphony.app", ["modules", "ui", "share", "application-nav"], ["symphony.app:app"])
				.then(function (response) {
					var uiService = SYMPHONY.services.subscribe("ui");
					uiService.listen("themeChangeV2", () => SYMPHONY.remote.hello().then(this.updateTheme));
				}.bind(this))
		}.bind(this));
	}

	
	private updateTheme(data: any) {
		console.log(data.themeV2)
		var theme =  data.themeV2.name !=="dark" ? "light-theme" : "dark-theme";
		document.body.className = "symphony-external-app " + data.themeV2.name + " " + data.themeV2.size;
		this.overlayContainer.getContainerElement().classList.add(theme);
		this.componentCssClass = theme;
	}
}
