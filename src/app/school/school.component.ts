import { Component } from "@angular/core";

@Component({
	selector: 'app-school',
	templateUrl: './school.component.html',
	styles: [
		`
			.aberta {
				color: white;
			}
		`
	]
	
})
export class SchoolComponent {
	schoolId = 10;
	schoolName = "Escola Fundamental Brasil";
	schoolSituation = "Aberta";

	constructor() {
		this.schoolSituation = Math.random() > 0.5 ? "Aberta" : "Fechada"; 
	}

	getStatusColor() {
		return this.schoolSituation === "Aberta" ? "green" : "red";
	}
}