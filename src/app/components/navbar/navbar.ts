import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsModal } from '../news-modal/news-modal';
import { NewsService, News } from '../../services/news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [NewsModal, CommonModule],
  templateUrl: './navbar.html'
})
export class Navbar {
  showModal = false;

  constructor(private newsService: NewsService, private router: Router) {}

  goToHome(){
    this.router.navigate(['/'])
  }

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
