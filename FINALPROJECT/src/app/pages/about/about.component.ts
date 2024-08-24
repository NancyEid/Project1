import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  abouts = [
    {
      title: 'Who We Are',
      description: 'We are a forward-thinking company dedicated to helping businesses thrive in the digital age. Our team of experts specializes in harnessing the power of digital technologies to transform traditional business models, improve customer experiences, and drive innovation.',
      icon: 'assets/who.png'
    },
    {
      title: 'What We Do',
      description: 'We offer a wide range of services designed to help businesses navigate the digital landscape. From developing responsive websites and mobile apps to implementing data-driven strategies and automating processes, we work closely with our clients to deliver customized solutions that meet their unique needs.',
      icon: 'assets/user.png'
    },
    {
      title: 'Our Mission',
      description: 'To empower businesses by providing cutting-edge digital solutions that enhance efficiency, increase customer engagement, and unlock new growth opportunities. We believe in the potential of digital transformation to reshape industries and create a more connected, customer-centric world.',
      icon: 'assets/mission.png'
    }
  ];
  story = {
    title: 'Our Story',
    description: 'Founded in 2010, our company began with a vision to leverage digital technologies to drive business growth. We started as a small team of passionate innovators dedicated to transforming traditional business models through technology. Our journey has been marked by significant milestones, including the launch of our flagship product, which revolutionized the way businesses interact with their customers. Over the years, we have expanded our services, embraced new technologies, and built a talented team committed to delivering exceptional digital solutions. Today, we continue to push the boundaries of digital innovation, helping businesses of all sizes succeed in an ever-evolving digital landscape.',

  };

  team = [
    {
      name: 'John Doe',
      role: 'CEO & Founder',
      image: 'assets/4.png'
    },
    {
      name: 'Jane Smith',
      role: 'Chief Technology Officer',
      image: 'assets/3.png'
    },
    {
      name: 'Jossif Johnson',
      role: 'Chief Marketing Officer',
      image: 'assets/1.png'
    },
    {
      name: 'Michael Brown',
      role: 'Lead Developer',
      image: 'assets/2.png'
    }
  ];


  Images = {
    main: 'assets/vr.png',
  };
}
