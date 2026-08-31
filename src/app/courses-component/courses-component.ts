import { Component, signal } from '@angular/core';
import { Course } from '../course';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseCardComponent } from '../course-card-component/course-card-component';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, CourseCardComponent],
  selector: 'app-courses-component',
  styleUrls: ['./courses-component.css'],
  templateUrl: './courses-component.html',
})
export class CoursesComponent {
  courses = signal<Course[]>([
    {
      id: 1,
      title: 'Angular 22 Mastery',
      description: 'Deep dive into modern signals and components.',
      enrolled: 1250,
      rating: 4.8,
      price: 49,
      comments: ['Great pace!', 'Very detailed.'],
    },
    {
      id: 2,
      title: 'TypeScript Advanced',
      description: 'Master advanced types, generics, and conditional types.',
      enrolled: 980,
      rating: 4.7,
      price: 39,
      comments: ['Helped a lot at work.'],
    },
    {
      id: 3,
      title: 'RxJS & State Management',
      description: 'Reactive programming paradigms simplified.',
      enrolled: 760,
      rating: 4.6,
      price: 29,
      comments: ['Clear explanations.'],
    },
    {
      id: 4,
      title: 'Web Security 101',
      description: 'Protect your front-end applications against common exploits.',
      enrolled: 540,
      rating: 4.9,
      price: 59,
      comments: ['Essential knowledge!'],
    },
  ]);

  currentIndex = 0;
  newTitle = '';
  newDesc = '';
  newPrice: number | null = null;

  visibleCourses() {
    const list = this.courses();
    // Return 3 items starting from currentIndex, wrapping around if needed
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (this.currentIndex + i) % list.length;
      if (list[index]) result.push(list[index]);
    }
    return result;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.courses().length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.courses().length) % this.courses().length;
  }

  addCourse() {
    if (this.newTitle && this.newDesc && this.newPrice !== null) {
      const newEntry: Course = {
        id: Date.now(),
        title: this.newTitle,
        description: this.newDesc,
        enrolled: 0,
        rating: 5.0,
        price: this.newPrice,
        comments: [],
      };
      this.courses.update((list) => [...list, newEntry]);
      this.newTitle = '';
      this.newDesc = '';
      this.newPrice = null;
    }
  }

  removeCourse(id: number) {
    this.courses.update((list) => list.filter((c) => c.id !== id));
  }
}
