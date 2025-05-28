import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page-content',
  imports: [],
  templateUrl: './home-page-content.component.html',
  styleUrl: './home-page-content.component.scss',
})
export class HomePageContentComponent {
  certifications: {
    busuu: {
      name: string;
      link: string;
    }[];
    udemy: {
      name: string;
      link: string;
    }[];
  } = {
    busuu: [
      {
        name: 'Level B2 in French on Busuu',
        link: 'https://api.busuu.com/anon/certificates/fdd49b7b22a06c7ad984061baa9dccf5?lid=nclh7ogu822f&utm_source=CRM&utm_group=ENG&utm_medium=EMAIL_TRANSACTION&utm_campaign=TRANSACTION_CERTIFICATE_END_LEVEL_ROW',
      },
      {
        name: 'Level B1 in French on Busuu',
        link: 'https://api.busuu.com/anon/certificates/cb559768391cfe9b46751e816d2754ad?lid=nclh7ogu822f&utm_source=CRM&utm_group=ENG&utm_medium=EMAIL_TRANSACTION&utm_campaign=TRANSACTION_CERTIFICATE_END_LEVEL_ROW',
      },
      {
        name: 'Level A2 in French on Busuu',
        link: 'https://api.busuu.com/anon/certificates/20e0b270575911c7acc4dbf10f32bf76?lid=nclh7ogu822f&utm_source=CRM&utm_group=ENG&utm_medium=EMAIL_TRANSACTION&utm_campaign=TRANSACTION_CERTIFICATE_END_LEVEL_ROW',
      },
      {
        name: 'Level A1 in French on Busuu',
        link: 'https://api.busuu.com/anon/certificates/84697674bae5f385a768ca8c2c8f890d?lid=nclh7ogu822f&utm_source=CRM&utm_group=ENG&utm_medium=EMAIL_TRANSACTION&utm_campaign=TRANSACTION_CERTIFICATE_END_LEVEL_ROW',
      },
    ],
    udemy: [
      {
        name: 'The Complete French Course : Daily Life Conversations',
        link: 'https://www.udemy.com/certificate/UC-d2f8bfc0-5e76-4fca-8c42-67e9a871e796/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com',
      },
      {
        name: 'The Complete French Course : Learn French - Low Intermediate',
        link: 'https://www.udemy.com/certificate/UC-ffc1eaf6-04f4-439a-b2d0-ef010a962d54/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com',
      },
      {
        name: 'Learn French - Intermediate level : Master the Past Tenses',
        link: 'https://www.udemy.com/certificate/UC-ee8d79b7-a6c9-4dea-a6f8-207c3c896816/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com',
      },
      {
        name: 'The Complete French Course : Learn French Beginners',
        link: 'https://www.udemy.com/certificate/UC-0bc1da31-1044-42eb-bb99-d2aac6e47a69/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com',
      },
    ],
  };
}
