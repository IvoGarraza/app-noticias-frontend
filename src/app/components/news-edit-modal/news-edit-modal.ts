import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { News } from '../../services/news.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'news-edit-modal',
  templateUrl: './news-edit-modal.html',
  imports: [CommonModule, FormsModule],
  styleUrls: ['./news-edit-modal.css']
})
export class NewsEditModal implements OnChanges {
  @Input() newsItem: News | null = null;
  @Input() show = false;
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<News>();

  isLoading = false;
  isSuccess = false;
  editedNews: News | null = null;
  categories = ['Tecnología', 'Ciencia', 'Deportes', 'Noticias'];

  ngOnChanges(changes: SimpleChanges) {
    if (this.newsItem) {
      this.editedNews = { ...this.newsItem };
    } else {
      this.editedNews = null;
    }
    this.isLoading = false;
    this.isSuccess = false;
  }

  onSave() {
    if (!this.editedNews) return;
    this.isLoading = true;
    // Simula petición HTTP
    setTimeout(() => {
      this.isLoading = false;
      this.isSuccess = true;
      this.save.emit(this.editedNews!);
      setTimeout(() => {
        this.isSuccess = false;
        this.close.emit();
      }, 1500);
    }, 1500);
  }
}