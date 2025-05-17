<template>
  <div class="services-page">
    <section class="hero-section section">
      <div class="container">
        <div class="hero-content reveal">
          <h1>Our Services</h1>
          <p class="hero-subtitle">Comprehensive software solutions tailored to your needs</p>
        </div>
      </div>
    </section>
    
    <section class="services-section section">
      <div class="container">
        <div class="services-grid">
          <ServiceCard
            title="Custom Software Development"
            description="Tailored software solutions designed to solve your unique business challenges."
            icon="mdi-code-braces"
          />
          <ServiceCard
            title="Web Application Development"
            description="Modern, scalable and responsive web applications built with cutting-edge technologies."
            icon="mdi-application"
          />
          <ServiceCard
            title="Mobile App Development"
            description="Native and cross-platform mobile applications for iOS and Android devices."
            icon="mdi-cellphone"
          />
          <ServiceCard
            title="UI/UX Design"
            description="User-centered design that enhances user experience and boosts engagement."
            icon="mdi-palette"
          />
          <ServiceCard
            title="Cloud Solutions"
            description="Scalable cloud infrastructure and deployment solutions for your applications."
            icon="mdi-cloud"
          />
          <ServiceCard
            title="Consulting & Strategy"
            description="Expert guidance on technology decisions and digital transformation strategies."
            icon="mdi-lightbulb"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ServiceCard from '../components/ServiceCard.vue'

export default {
  name: 'ServicesPage',
  components: {
    ServiceCard
  }
}
</script>

<style scoped>
.hero-section {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  color: white;
  padding: var(--space-8) 0 var(--space-6);
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-subtitle {
  font-size: 1.25rem;
  opacity: 0.9;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--space-4);
}

@media (max-width: 767px) {
  .hero-section {
    padding: var(--space-6) 0 var(--space-4);
  }
  
  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>