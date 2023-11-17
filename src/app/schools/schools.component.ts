import { Component } from '@angular/core';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrl: './schools.component.css'
})
export class SchoolsComponent {
	acceptNewSchool = false;
	createdSchoolStatus = "Nenhuma escola criada";
	schoolName = "Nome de teste da escola";
	schoolCreated = false;
	schools = ['Escola 1', 'Escola 2'];

	constructor() {}

	ngOnInit(): void {
		setTimeout(() => {
			this.acceptNewSchool = true;
		}, 3000)
	}

	createSchool() {
		this.schoolCreated = true;
		this.createdSchoolStatus = "Escola criada com o nome de " + this.schoolName;
		this.schools.push(this.schoolName)
	}

	updateSchoolName(event: Event) {
		this.schoolName = (<HTMLInputElement>event.target).value
	}
}
