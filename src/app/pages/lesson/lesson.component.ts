import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { LessonCardComponent } from "../../components/lesson-card/lesson-card.component";
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-lesson',
  imports: [FooterComponent, LessonCardComponent, HeaderComponent],
  templateUrl: './lesson.component.html',
  styleUrl: './lesson.component.scss'
})
export class LessonComponent {

}
