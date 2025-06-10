import { Component } from '@angular/core';

@Component({
  selector: 'app-career',
  imports: [],
  templateUrl: './career.component.html',
  styleUrl: './career.component.scss',
})
export class CareerComponent {
  careerData: {
    date: string;
    position: string;
    company: string;
    location: string;
  }[] = [
    {
      date: 'janvier à présent',
      position: 'Developpeur du logiciel',
      company: 'A-Mais Technologies Inc. ("Amiga")',
      location: 'Vancouver du Nord, Colombie-Britannique au Canada',
    },
    {
      date: 'septembre 2023 à janvier 2025',
      position: "Chef d'équipe",
      company: 'Nestlé Nespresso',
      location: 'Burnaby, Colombie-Britannique au Canada',
    },
    {
      date: 'juin 2021 à september 2023',
      position: 'Spécialiste du café',
      company: 'Nestlé Nespresso',
      location: 'Burnaby, Colombie-Britannique au Canada',
    },
  ];
}
