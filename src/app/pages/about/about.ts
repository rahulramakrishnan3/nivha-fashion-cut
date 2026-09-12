import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  values = [
    { icon: '🎯', title: 'Precision', desc: 'Every measurement and cut is double-checked for a fit that feels tailor-made — because it is.' },
    { icon: '🤝', title: 'Trust', desc: 'Generations of loyal customers in Koppam trust us with their most special outfits.' },
    { icon: '💡', title: 'Creativity', desc: 'From classic designs to the latest trends, we bring fresh ideas to every outfit.' },
    { icon: '⏱️', title: 'Reliability', desc: 'We respect your time — your outfit is ready when we say it will be.' },
  ];

  milestones = [
    { year: 'The Beginning', text: 'Fashion Cut started as a small ladies tailoring shop near Koppam Junction, built on skill and word-of-mouth trust.' },
    { year: 'Growing Together', text: 'As demand grew, so did our services — expanding into embroidery, bridal wear and boutique designs.' },
    { year: 'Nivha By Fashion Cut', text: 'Today, as Nivha By Fashion Cut, we continue to serve Palakkad with the same care, now with a modern boutique touch.' },
  ];
}
