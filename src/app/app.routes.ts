import { Routes } from '@angular/router';
import { Layout } from './components/layout/layout';
import { Home } from './pages/home/home';
import { NewsDetail } from './components/news-detail/news-detail';


export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: '', component: Home },
      {path:'news/:id', component:NewsDetail},
    ]
  }
];