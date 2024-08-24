import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services = [
    {
      title: 'Marketing Strategy',
      description: 'New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past.',
      icon: 'assets/marketing1.png'
    },
    {
      title: 'Enterprise Consulting',
      description: 'Continued at up zealously point breakfast. Surrounded sir motionless she end literature. Direction neglect but supported yet melancholy his perfect themselves enoght.',
      icon: 'assets/consult.png'
    },
    {
      title: 'Growth Tracking',
      description: 'Continued at up zealously necessary breakfast. Surrounded sir motionless she end literature. Gay direction neglected but supported yet melancholy themselves.',
      icon: 'assets/tracking.png'
    }
  ];


}
