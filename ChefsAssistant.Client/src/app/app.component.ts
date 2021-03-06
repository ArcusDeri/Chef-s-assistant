import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ChefsAssistant.Client';
  currentFeature = 'recipes';

  onNavigate(feature: string) {
    this.currentFeature = feature;
  }
}
