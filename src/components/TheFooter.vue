<script setup lang="ts">
import { ref } from 'vue'

const currentYear = new Date().getFullYear()
const email = ref('')

const socialLinks = [
  { name: 'Twitter', icon: 'mdi-twitter', url: '#' },
  { name: 'LinkedIn', icon: 'mdi-linkedin', url: '#' },
  { name: 'GitHub', icon: 'mdi-github', url: '#' },
  { name: 'Instagram', icon: 'mdi-instagram', url: '#' }
]

const subscribeToNewsletter = () => {
  // Subscription logic would go here
  alert(`Thank you for subscribing with ${email.value}!`)
  email.value = ''
}
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <h3 class="footer-logo">OneTapSolution</h3>
          <p class="footer-tagline">Crafting excellence in software solutions</p>
          <div class="social-links">
            <a 
              v-for="link in socialLinks" 
              :key="link.name" 
              :href="link.url" 
              class="social-link" 
              :aria-label="link.name"
              target="_blank"
              rel="noopener"
            >
              <q-icon :name="link.icon" size="24px" />
            </a>
          </div>
        </div>
        
        <div class="footer-links">
          <div class="footer-links-column">
            <h4 class="footer-heading">Company</h4>
            <ul class="footer-list">
              <li><router-link to="/about">About Us</router-link></li>
              <li><router-link to="/services">Services</router-link></li>
              <li><router-link to="/portfolio">Our Work</router-link></li>
              <li><router-link to="/blog">Blog</router-link></li>
            </ul>
          </div>
          
          <div class="footer-links-column">
            <!-- <h4 class="footer-heading">Resources</h4>
            <ul class="footer-list">
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul> -->
          </div>
          
          <div class="footer-links-column">
            <h4 class="footer-heading">Contact</h4>
            <ul class="footer-list">
              <li><a href="mailto:onetapsolution62@gmail.com">onetapsolution62@gmail.com</a></li>
              <li><a href="tel:+919801555338">+91 9801555338</a></li>
              <li><b>Registered Office:</b> <br>Sharma Complex, Shiblibari <br>Dhanbad - Jharkhand <br>Pin: 828203</li>
            </ul>
          </div>
        </div>
        
        <div class="footer-newsletter">
          <h4 class="footer-heading">Stay Updated</h4>
          <p>Subscribe to our newsletter to receive updates and tech insights.</p>
          
          <form @submit.prevent="subscribeToNewsletter" class="newsletter-form">
            <div class="newsletter-input-group">
              <input 
                type="email" 
                v-model="email" 
                placeholder="Enter your email" 
                required
                aria-label="Email address"
                class="newsletter-input"
              />
              <button type="submit" class="newsletter-button">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p class="copyright">© {{ currentYear }} OneTapSolution. All rights reserved.</p>
        <div class="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--color-primary);
  color: var(--color-text-light);
  padding-top: var(--space-6);
  position: relative;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    var(--color-secondary),
    transparent
  );
}

.footer-top {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: var(--space-5);
  padding-bottom: var(--space-5);
}

.footer-logo {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: var(--space-2);
  background: linear-gradient(to right, white, var(--color-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.footer-tagline {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: var(--space-3);
}

.social-links {
  display: flex;
  gap: var(--space-3);
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-full);
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  transition: all var(--transition-fast);
}

.social-link:hover {
  background-color: var(--color-secondary);
  transform: translateY(-2px);
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-4);
}

.footer-heading {
  color: white;
  margin-bottom: var(--space-3);
  font-size: 1.1rem;
  font-weight: 600;
}

.footer-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-list li {
  margin-bottom: var(--space-2);
}

.footer-list a {
  color: rgba(255, 255, 255, 0.7);
  transition: color var(--transition-fast);
}

.footer-list a:hover {
  color: white;
}

.newsletter-form {
  margin-top: var(--space-3);
}

.newsletter-input-group {
  display: flex;
  overflow: hidden;
  border-radius: var(--radius-md);
  background-color: rgba(255, 255, 255, 0.1);
}

.newsletter-input {
  flex: 1;
  padding: var(--space-2) var(--space-3);
  border: none;
  background-color: transparent;
  color: white;
  font-size: 1rem;
}

.newsletter-input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.newsletter-button {
  background-color: var(--color-secondary);
  color: white;
  border: none;
  padding: var(--space-2) var(--space-3);
  font-weight: 500;
  cursor: pointer;
  transition: background-color var(--transition-fast);
}

.newsletter-button:hover {
  background-color: var(--color-secondary-dark);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-4) 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.copyright {
  margin: 0;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.875rem;
}

.footer-legal {
  display: flex;
  gap: var(--space-3);
}

.footer-legal a {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.875rem;
  transition: color var(--transition-fast);
}

.footer-legal a:hover {
  color: white;
}

@media (max-width: 1023px) {
  .footer-top {
    grid-template-columns: 1fr 1fr;
  }
  
  .footer-brand {
    grid-column: span 2;
    margin-bottom: var(--space-4);
  }
  
  .footer-links {
    grid-column: 1;
  }
  
  .footer-newsletter {
    grid-column: 2;
  }
}

@media (max-width: 767px) {
  .footer-top {
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }
  
  .footer-brand {
    grid-column: span 1;
  }
  
  .footer-links {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-3);
  }
  
  .footer-links-column:last-child {
    grid-column: span 2;
    margin-top: var(--space-3);
  }
  
  .footer-newsletter {
    grid-column: span 1;
  }
  
  .footer-bottom {
    flex-direction: column;
    gap: var(--space-3);
    text-align: center;
  }
  
  .copyright {
    order: 2;
  }
  
  .footer-legal {
    order: 1;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>