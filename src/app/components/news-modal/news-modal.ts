import { Component, EventEmitter, Output } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'news-modal',
    standalone: true,
    imports: [FormsModule, CommonModule],
    templateUrl: './news-modal.html',
    styleUrls: ['./news-modal.css']
  })
export class NewsModal {
  @Output() closeModal = new EventEmitter<void>();
  @Output() addNews = new EventEmitter<any>();

  newsData = { title: '', content: '', author: '', category: '', imageUrl: '' };
  categories = ['Tecnología', 'Ciencia', 'Deportes', 'Noticias'];

  onClose() {
    this.closeModal.emit();
  }

  onSubmit() {
    this.addNews.emit(this.newsData);
    this.onClose();
  }
}