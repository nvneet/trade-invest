import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../course';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-course-card-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styleUrls: ['./course-card-component.css'],
  templateUrl: './course-card-component.html',
})
export class CourseCardComponent {
  @Input({ required: true }) course!: Course;
  @Output() remove = new EventEmitter<number>();

  newComment = '';

  addComment() {
    if (this.newComment.trim()) {
      this.course.comments.push(this.newComment.trim());
      this.newComment = '';
    }
  }
}
