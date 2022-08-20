import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  @Output() featurdPage = new EventEmitter<string>()

  onSelect(event: string){
    this.featurdPage.emit(event)
  }

}
