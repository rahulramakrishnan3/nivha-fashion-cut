import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: Home, title: 'Nivha By Fashion Cut | Ladies Tailoring, Koppam, Palakkad' },
  { path: 'about', component: About, title: 'About Us | Nivha By Fashion Cut' },
  { path: 'contact', component: Contact, title: 'Contact Us | Nivha By Fashion Cut' },
  { path: '**', redirectTo: '' },
];
