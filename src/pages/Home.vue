<script setup lang="ts">
import { onMounted, ref } from 'vue'
import ServiceCard from '../components/ServiceCard.vue'
import TestimonialCard from '../components/TestimonialCard.vue'
import ProjectCard from '../components/ProjectCard.vue'

const services = [
  {
    id: 1,
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed to solve your unique business challenges.',
    icon: 'mdi-code-braces'
  },
  {
    id: 2,
    title: 'Web Application Development',
    description: 'Modern, scalable and responsive web applications built with cutting-edge technologies.',
    icon: 'mdi-application'
  },
  {
    id: 3,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android devices.',
    icon: 'mdi-cellphone'
  },
  {
    id: 4,
    title: 'UI/UX Design',
    description: 'User-centered design that enhances user experience and boosts engagement.',
    icon: 'mdi-palette'
  }
]

const testimonials = [
  {
    id: 1,
    quote: "OneTapSolution transformed our business with their innovative software solutions. Their attention to detail and commitment to quality is unmatched.",
    author: "Sarah Johnson",
    role: "CEO, TechInnovate",
    avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    id: 2,
    quote: "Working with OneTapSolution was a game-changer for our startup. Their team delivered a flawless product that exceeded our expectations.",
    author: "Michael Chen",
    role: "Founder, DataVision",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    id: 3,
    quote: "The mobile app OneTapSolution developed for us has received exceptional feedback from our users. Professional, responsive, and incredibly talented team.",
    author: "Emily Rodriguez",
    role: "Product Manager, MobiConnect",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
  }
]

const featuredProjects = [
  {
    id: 1,
    title: "HealthTrack Platform",
    description: "A comprehensive healthcare management system for clinics and hospitals.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["Web App", "Healthcare", "React"]
  },
  {
    id: 2,
    title: "FinTech Mobile Solution",
    description: "Secure and intuitive mobile banking application for a major financial institution.",
    image: "https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["Mobile", "FinTech", "Flutter"]
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description: "Scalable e-commerce solution with integrated payment processing and inventory management.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["Web App", "E-commerce", "Vue.js"]
  }
]

const stats = ref([
  { value: 0, target: 150, suffix: '+', label: 'Projects Completed' },
  { value: 0, target: 50, suffix: '+', label: 'Happy Clients' },
  { value: 0, target: 15, suffix: '', label: 'Team Members' },
  { value: 0, target: 7, suffix: '+', label: 'Years Experience' }
])

// Animation for counting stats
const animateStats = () => {
  stats.value.forEach((stat, index) => {
    const duration = 2000 // 2 seconds
    const steps = 50
    const increment = stat.target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= stat.target) {
        current = stat.target
        clearInterval(timer)
      }
      stats.value[index].value = Math.round(current)
    }, duration / steps)
  })
}

onMounted(() => {
  // Initialize animations when component is mounted
  window.addEventListener('scroll', () => {
    const statsSection = document.querySelector('.stats-section')
    if (statsSection) {
      const rect = statsSection.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        animateStats()
        // Remove event listener after animation starts
        window.removeEventListener('scroll', animateStats)
      }
    }
  })
})
</script>

<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content container">
        <div class="hero-text reveal">
          <h1>Crafting Exceptional<br>Software Solutions</h1>
          <p class="hero-subtitle">We build innovative software that solves complex problems and transforms businesses.</p>
          <div class="hero-actions">
            <router-link to="/services" class="btn btn-lg btn-primary">Our Services</router-link>
            <router-link to="/contact" style="color:#fff;backdrop-filter: blur(10px);-webkit-backdrop-filter: blur(10px);" class="btn btn-lg btn-outline">Contact Us</router-link>
          </div>
        </div>
        <div class="hero-image reveal reveal-delay-2">
          <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Team collaborating on software development" />
        </div>
      </div>
      <div class="hero-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fill-opacity="1" d="M0,96L48,112C96,128,192,160,288,170.7C384,181,480,171,576,144C672,117,768,75,864,74.7C960,75,1056,117,1152,122.7C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
    
    <!-- Services Section -->
    <section class="services-section section">
      <div class="container">
        <div class="section-header reveal">
          <h2>Our Services</h2>
          <p>We offer a comprehensive range of software development services</p>
        </div>
        
        <div class="services-grid">
          <ServiceCard 
            v-for="service in services" 
            :key="service.id" 
            :title="service.title"
            :description="service.description"
            :icon="service.icon"
            class="reveal"
            :class="`reveal-delay-${service.id}`"
          />
        </div>
        
        <div class="section-footer reveal reveal-delay-3">
          <router-link to="/services" class="btn btn-secondary">All Services</router-link>
        </div>
      </div>
    </section>
    
    <!-- About Section -->
    <section class="about-section section">
      <div class="container">
        <div class="about-content">
          <div class="about-image reveal">
            <img src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="OneTapSolution team" />
          </div>
          <div class="about-text reveal reveal-delay-2">
            <h2>Who We Are</h2>
            <p class="about-intro">OneTapSolution is a team of passionate developers, designers, and strategists dedicated to building exceptional software.</p>
            <p>Founded in 2025, we've worked with startups, mid-size businesses, and enterprise clients across multiple industries to deliver innovative digital solutions that drive growth and solve complex problems.</p>
            <p>Our approach combines technical excellence with strategic thinking, ensuring that every project we undertake not only meets but exceeds our clients' expectations.</p>
            <router-link to="/about" class="btn btn-primary">Learn More</router-link>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Stats Section -->
    <section class="stats-section section">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-item reveal" v-for="(stat, index) in stats" :key="index" :class="`reveal-delay-${index}`">
            <div class="stat-value">{{ stat.value }}<span class="stat-suffix">{{ stat.suffix }}</span></div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Featured Projects -->
    <section class="projects-section section">
      <div class="container">
        <div class="section-header reveal">
          <h2>Featured Projects</h2>
          <p>Explore some of our recent work and success stories</p>
        </div>
        
        <div class="projects-grid">
          <ProjectCard
            v-for="project in featuredProjects"
            :key="project.id"
            :title="project.title"
            :description="project.description"
            :image="project.image"
            :tags="project.tags"
            class="reveal"
            :class="`reveal-delay-${project.id}`"
          />
        </div>
        
        <div class="section-footer reveal reveal-delay-3">
          <router-link to="/portfolio" class="btn btn-secondary">View All Projects</router-link>
        </div>
      </div>
    </section>
    
    <!-- Testimonials -->
    <section class="testimonials-section section">
      <div class="container">
        <div class="section-header reveal">
          <h2>What Our Clients Say</h2>
          <p>Hear from the businesses and organizations that we've helped succeed</p>
        </div>
        
        <div class="testimonials-grid">
          <TestimonialCard
            v-for="testimonial in testimonials"
            :key="testimonial.id"
            :quote="testimonial.quote"
            :author="testimonial.author"
            :role="testimonial.role"
            :avatar="testimonial.avatar"
            class="reveal"
            :class="`reveal-delay-${testimonial.id}`"
          />
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="cta-section section">
      <div class="container">
        <div class="cta-content reveal">
          <h2>Ready to transform your business?</h2>
          <p>Get in touch with us to discuss your project and discover how we can help you achieve your goals.</p>
          <router-link to="/contact" class="btn btn-lg btn-accent">Start Your Project</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero-section {
  min-height: 100vh;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  color: white;
  display: flex;
  align-items: center;
  position: relative;
  padding-top: 80px;
  overflow: hidden;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-5);
  z-index: 1;
  padding-top: var(--space-6);
  padding-bottom: var(--space-8);
}

.hero-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero-text h1 {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: var(--space-3);
  letter-spacing: -0.025em;
}

.hero-subtitle {
  font-size: 1.25rem;
  max-width: 500px;
  margin-bottom: var(--space-5);
  color: rgba(255, 255, 255, 0.9);
}

.hero-actions {
  display: flex;
  gap: var(--space-3);
}

.hero-image {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.hero-image img {
  max-width: 100%;
  height: auto;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xl);
  transition: transform var(--transition-normal);
}

.hero-image img:hover {
  transform: scale(1.02);
}

.hero-wave {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  line-height: 0;
}

.services-section {
  background-color: var(--color-bg-primary);
}

.section-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto var(--space-6);
}

.section-header h2 {
  margin-bottom: var(--space-2);
  color: var(--color-primary);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--space-4);
  margin-bottom: var(--space-5);
}

.about-section {
  background-color: var(--color-bg-secondary);
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-5);
  align-items: center;
}

.about-image img {
  width: 100%;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
}

.about-text h2 {
  color: var(--color-primary);
  margin-bottom: var(--space-3);
}

.about-intro {
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: var(--space-3);
}

.stats-section {
  background-color: var(--color-primary);
  color: white;
  padding: var(--space-6) 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-4);
}

.stat-item {
  text-align: center;
}

.stat-value {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: var(--space-1);
  line-height: 1;
}

.stat-suffix {
  font-weight: 700;
}

.stat-label {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.8);
}

.projects-section {
  background-color: var(--color-bg-primary);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-4);
  margin-bottom: var(--space-5);
}

.testimonials-section {
  background-color: var(--color-bg-secondary);
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-4);
}

.cta-section {
  background: linear-gradient(135deg, var(--color-secondary) 0%, var(--color-secondary-dark) 100%);
  color: white;
  text-align: center;
}

.cta-content {
  max-width: 700px;
  margin: 0 auto;
}

.cta-content h2 {
  font-size: 2.5rem;
  margin-bottom: var(--space-3);
}

.cta-content p {
  font-size: 1.25rem;
  margin-bottom: var(--space-5);
  color: rgba(255, 255, 255, 0.9);
}

.section-footer {
  display: flex;
  justify-content: center;
  margin-top: var(--space-5);
}

@media (max-width: 1023px) {
  .hero-text h1 {
    font-size: 3rem;
  }
  
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .hero-text {
    order: 1;
  }
  
  .hero-image {
    order: 0;
    margin-bottom: var(--space-4);
  }
  
  .hero-subtitle {
    margin-left: auto;
    margin-right: auto;
  }
  
  .hero-actions {
    justify-content: center;
  }
  
  .about-content {
    grid-template-columns: 1fr;
    gap: var(--space-5);
  }
  
  .about-image {
    order: 0;
    margin-bottom: var(--space-4);
  }
  
  .about-text {
    order: 1;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-5);
  }
  
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .testimonials-grid {
    grid-template-columns: 1fr;
    max-width: 600px;
    margin: 0 auto;
  }
}

@media (max-width: 767px) {
  .hero-text h1 {
    font-size: 2.5rem;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .hero-actions {
    flex-direction: column;
    gap: var(--space-2);
  }
  
  .stat-value {
    font-size: 2.5rem;
  }
}
</style>