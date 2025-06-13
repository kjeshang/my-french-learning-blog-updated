import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  imports: [],
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.scss'
})
export class CustomButtonComponent {
  @Input() buttonText: string = '';
  @Output() buttonClicked: EventEmitter<void> = new EventEmitter<void>();

  onClick(): void {
    this.buttonClicked.emit();
  }
}
