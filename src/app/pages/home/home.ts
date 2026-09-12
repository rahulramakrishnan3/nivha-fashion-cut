import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Service {
  icon: string;
  title: string;
  desc: string;
}

interface Step {
  num: string;
  title: string;
  desc: string;
}

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements AfterViewInit, OnDestroy {
  @ViewChild('rootEl') rootEl!: ElementRef<HTMLElement>;
  private observer?: IntersectionObserver;

  services: Service[] = [
    { icon: '✂️', title: 'Ladies Tailoring', desc: 'Precision stitching for salwars, chudidars and everyday wear, cut to your exact measurements.' },
    { icon: '🧵', title: 'Blouse Stitching', desc: 'Trendy and traditional blouse designs finished with a perfect, comfortable fit.' },
    { icon: '👰', title: 'Bridal & Boutique Wear', desc: 'Custom bridal and party wear crafted with detailing that stands out on your big day.' },
    { icon: '🌸', title: 'Embroidery Work', desc: 'Delicate hand and machine embroidery to add a signature touch to your outfit.' },
    { icon: '🪡', title: 'Alterations & Resizing', desc: 'Quick, reliable alterations that give old favourites a fresh, perfect fit.' },
    { icon: '📐', title: 'Custom Design Consultation', desc: 'Bring an idea or a photo — our team helps design and pattern it just for you.' },
  ];

  steps: Step[] = [
    { num: '01', title: 'Share Your Idea', desc: 'Visit us or call with your design, fabric, or reference photo.' },
    { num: '02', title: 'Measurement & Fitting', desc: 'Accurate measurements taken by our experienced tailors.' },
    { num: '03', title: 'Expert Stitching', desc: 'Your outfit is cut and stitched with care and attention to detail.' },
    { num: '04', title: 'Perfect Pickup', desc: 'Try it on, get any final tweaks, and take home the perfect fit.' },
  ];

  testimonials: Testimonial[] = [
    { quote: 'Beautiful blouse stitching and always on time. My go-to tailor in Koppam!', name: 'Savitha', role: 'Regular Customer' },
    { quote: 'Got my bridal blouse designed here — the finishing was outstanding.', name: 'Anjali R.', role: 'Bride' },
    { quote: 'Friendly staff, fair pricing, and they truly listen to what you want.', name: 'Meera K.', role: 'Local Resident' },
  ];

  ngAfterViewInit(): void {
    const elements = this.rootEl.nativeElement.querySelectorAll('.reveal');
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            this.observer?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    elements.forEach((el) => this.observer?.observe(el));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
