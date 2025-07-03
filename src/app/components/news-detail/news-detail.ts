import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService, News } from '../../services/news.service';
import { CommonModule } from '@angular/common';
import { NewsEditModal } from '../news-edit-modal/news-edit-modal';

@Component({
  selector: 'app-news-detail',
  imports: [CommonModule],
  templateUrl: './news-detail.html',
})
export class NewsDetail implements OnInit {
  newsItem?: News;

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.newsService.getNews().subscribe(newsList => {
        const found = newsList.find(n => n.id === id);
        if (found) {
          this.newsItem = found;
          this.newsService.selectedNews = found;
          console.log('Noticia seleccionada:', found);
        } else {
          this.newsItem = undefined;
          this.newsService.selectedNews = null;
          console.log('No se encontró la noticia');
        }
      });
    }
  }

  getCategoryTextClass(category: string | undefined): string {
    switch (category) {
      case 'Tecnología':
        return 'text-blue-600';
      case 'Ciencia':
        return 'text-sky-600';
      case 'Deportes':
        return 'text-green-500';
      case 'Política':
        return 'text-red-600';
      case 'Entretenimiento':
        return 'text-pink-500';
      case 'Salud':
        return 'text-yellow-600';
      case 'Economía':
        return 'text-blue-600';
      default:
        return 'text-red-700';
    }
  }

}