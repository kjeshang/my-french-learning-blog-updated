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
    {
      date: 'mai 2023 à février 2024',
      position: 'Analyste de donnés en ligne',
      company:'TELUS International AI Data Solutions',
      location: 'Vancouver, Colombie-Britannique au Canada - À distance',
    },
    {
      date:'mai 2023 à septembre 2023',
      position:'Représentant du secteur des ventes technologiques',
      company:'Staples Canada',
      location:'Burnaby, Colombie-Britannique au Canada'
    },
    {
      date:'juin 2021 à décembre 2022',
      position:'Analyste de donnés',
      company:'Zyp Art Gallery',
      location:'Calmar, Alberta au Canada - À distance'
    },
    {
      date:'aoùt 2021 à avril 2022',
      position:'Assistant de soutien aux étudiants du CEIT',
      company:'Douglas College',
      location:'New Westminster, Colombie-Britannique au Canada'
    },
    {
      date:'septembre 2019 à décembre 2019',
      position:'Assistant pédagogique, Atelier de statistiques',
      company:'Simon Fraser University',
      location:'Burnaby, Colombie-Britannique au Canada'
    },
  ];
}
