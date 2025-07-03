import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsModal } from '../news-modal/news-modal';
import { NewsService, News } from '../../services/news.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NewsEditModal } from '../news-edit-modal/news-edit-modal';

@Component({
  selector: 'app-navbar',
  imports: [NewsModal, NewsEditModal, CommonModule],
  templateUrl: './navbar.html'
})
export class Navbar {
  showModal = false;
  showEditModal = false;

  constructor(private newsService: NewsService, private router: Router) {}

  goToHome(){
    this.router.navigate(['/'])
  }
  
  onAddNews(news: News) {
    this.newsService.addNews(news);
    this.closeModal();
  }
  get isDetailRoute(): boolean {
    return this.router.url.startsWith('/news/');
  }

  get newsItem() {
    return this.newsService.selectedNews;
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  openEditModal() {
    console.log('se ejecuto open edit modal')
    this.showEditModal = true;
  }
  
  closeEditModal() {
    this.showEditModal = false;
  }
  
  onSaveEdit(editedNews: News) {
    // Actualiza la noticia seleccionada en el servicio
    this.newsService.selectedNews = editedNews;
    this.closeEditModal();
  }

  openDeleteModal() {
    // Implementa tu lógica para mostrar el modal de eliminar
  }

}
