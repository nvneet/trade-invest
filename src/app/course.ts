// components/course-card/course-card.component.ts
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Course {
  id: number;
  title: string;
  description: string;
  enrolled: number;
  rating: number;
  price: number;
  comments: string[];
}
