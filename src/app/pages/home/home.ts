import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsService, News } from '../../services/news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html'
})
export class Home implements OnInit {
  news: News[] = [];

  constructor(private newsService: NewsService, private router: Router) {}

  goToDetail(newsId: number | undefined) {
    this.router.navigate(['/news', newsId]);
  }

  ngOnInit() {
    this.newsService.getNews().subscribe(news => {
      this.news = news;
    });
  }

  getMainNews(): News | null {
    return this.news.length > 0 ? this.news[0] : null;
  }

  getSideNews(): News[] {
    return this.news.slice(1, 5);
  }

  getImageUrl(news: News): string {
    return news.url || 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=200&fit=crop';
  }

  getSideImageUrl(news: News): string {
    return news.url || 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=200&h=300&fit=crop';
  }

  getCategoryTextClassMain(category: string | undefined): string {
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

  getCategoryBackgroundSlider(category:string | undefined):string{
    console.log('logeo del fondo por categoria',category)
    switch (category) {
      case 'Tecnología':
        return 'bg-blue-200 ';
      case 'Ciencia':
        return 'bg-sky-200';
      case 'Deportes':
        return 'bg-green-200';
      case 'Política':
        return 'bg-red-200';
      case 'Entretenimiento':
        return 'bg-pink-200';
      case 'Salud':
        return 'bg-teal-200';
      case 'Economía':
        return 'bg-yellow-200';
      default:
        return 'bg-red-200';
    }
  
  }

  getCategoryGradientClass(category: string | undefined): string {
    switch (category) {
      case 'Tecnología':
        return 'bg-gradient-to-r from-blue-100 from-80% to-blue-400 ';
      case 'Ciencia':
        return 'bg-gradient-to-r from-sky-100 from-80% to-sky-400';
      case 'Deportes':
        return 'bg-gradient-to-r from-green-100 from-80% to-green-400';
      case 'Política':
        return 'bg-gradient-to-r from-red-100 from-80% to-red-400';
      case 'Entretenimiento':
        return 'bg-gradient-to-r from-pink-100 from-80% to-pink-400';
      case 'Salud':
        return 'bg-gradient-to-r from-teal-100 from-80% to-teal-400';
      case 'Economía':
        return 'bg-gradient-to-r from-yellow-100 from-80% to-yellow-400';
      default:
        return 'bg-gradient-to-r from-red-100 from-80% to-red-400';
    }
  }
}
