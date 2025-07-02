import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService, News } from '../../services/news.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news-detail',
  imports: [CommonModule],
  templateUrl: './news-detail.html',
  styleUrl: './news-detail.css'
})
export class NewsDetail implements OnInit {
  newsItem?: News;

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService
  ) {}

  ngOnInit() {
    // Obtiene el id de la ruta
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      // Busca la noticia por id
      this.newsService.getNews().subscribe(newsList => {
        this.newsItem = newsList.find(n => n.id === id);
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