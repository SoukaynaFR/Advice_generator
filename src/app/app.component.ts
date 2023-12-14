import { Component } from '@angular/core';
import { AdviceService } from './advice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'advice-generator-app';

  advice: any;

  constructor(private adviceService: AdviceService) {}

  ngOnInit() {
    this.getRandomAdvice(); 
  }
  getRandomAdvice() {
    this.adviceService.getRandomAdvice().subscribe((response) => {
      this.advice = response.slip;
    });
  }
}
