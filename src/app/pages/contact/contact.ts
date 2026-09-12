import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface ContactForm {
  name: string;
  phone: string;
  service: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  model: ContactForm = { name: '', phone: '', service: 'Ladies Tailoring', message: '' };
  submitted = signal(false);

  services = [
    'Ladies Tailoring',
    'Blouse Stitching',
    'Bridal & Boutique Wear',
    'Embroidery Work',
    'Alterations & Resizing',
    'Custom Design Consultation',
  ];

  mapUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.google.com/maps?q=Koppam+Junction+Palakkad+Kerala&output=embed'
    );
  }

  onSubmit(): void {
    if (!this.model.name || !this.model.phone) {
      return;
    }
    // Static site: no backend wired up. Replace this with an API/email service call.
    this.submitted.set(true);
  }

  resetForm(): void {
    this.model = { name: '', phone: '', service: 'Ladies Tailoring', message: '' };
    this.submitted.set(false);
  }
}
