import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsModal } from '../news-modal/news-modal';
import { NewsService, News } from '../../services/news.service';
@Component({
  selector: 'app-navbar',
  imports: [NewsModal, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  showModal = false;

  constructor(private newsService: NewsService) {}

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  onAddNews(news: News) {
    this.newsService.addNews(news);
    this.closeModal();
  }
}
