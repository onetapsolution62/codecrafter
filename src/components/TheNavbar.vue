<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const mobileMenuOpen = ref(false)
const scrolled = ref(false)

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' }
]

const isActive = (path: string) => {
  return route.path === path
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

// Handle scroll event to change navbar appearance
const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

// Navbar classes based on scroll position
const navbarClasses = computed(() => {
  return {
    'navbar-scrolled': scrolled.value,
    'navbar-transparent': !scrolled.value
  }
})

// Initialize scroll handling
if (typeof window !== 'undefined') {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Initial check
}

// Close mobile menu when route changes
watch(() => route.path, () => {
  closeMobileMenu()
})
</script>

<template>
  <header class="navbar" :class="navbarClasses">
    <div class="container navbar-container">
      <router-link to="/" class="navbar-brand" @click="closeMobileMenu">
        <span class="logo-text">CodeCrafter</span>
      </router-link>
      
      <!-- Desktop Navigation -->
      <nav class="navbar-nav desktop-nav">
        <ul class="nav-list">
          <li v-for="item in navItems" :key="item.path" class="nav-item">
            <router-link :to="item.path" class="nav-link" :class="{ active: isActive(item.path) }">
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </nav>
      
      <div class="navbar-actions">
        <a href="/contact" class="btn btn-sm btn-primary">Get Started</a>
        <button class="mobile-menu-toggle" @click="toggleMobileMenu" aria-label="Toggle menu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
      </div>
      
      <!-- Mobile Navigation -->
      <div class="mobile-nav" :class="{ 'mobile-nav-open': mobileMenuOpen }">
        <nav class="mobile-nav-content">
          <ul class="mobile-nav-list">
            <li v-for="item in navItems" :key="item.path" class="mobile-nav-item">
              <router-link 
                :to="item.path" 
                class="mobile-nav-link" 
                :class="{ active: isActive(item.path) }"
                @click="closeMobileMenu"
              >
                {{ item.name }}
              </router-link>
            </li>
          </ul>
          <div class="mobile-nav-actions">
            <a href="/contact" class="btn btn-primary btn-block">Get Started</a>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  z-index: 100;
  transition: all var(--transition-normal);
}

.navbar-transparent {
  background-color: rgba(255, 255, 255, 0.98);
  color: var(--color-text-primary, #333);
}

.navbar-scrolled {
  background-color: rgba(255, 255, 255, 0.98);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: var(--color-text-primary, #333);
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.navbar-brand {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  z-index: 101;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(to right, var(--color-primary), var(--color-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

.navbar-nav {
  display: flex;
}

.nav-list {
  display: flex;
  gap: var(--space-4);
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  font-weight: 500;
  color: var(--color-text-primary, #333);
  padding: var(--space-1) var(--space-2);
  border-radius: var(--radius-sm);
  transition: color var(--transition-fast), background-color var(--transition-fast);
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--color-secondary);
  transition: width var(--transition-normal);
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}

.navbar-actions {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

/* Mobile menu toggle */
.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 101;
}

.bar {
  height: 2px;
  width: 100%;
  background-color: var(--color-text-primary);
  border-radius: 10px;
  transition: all var(--transition-fast);
}

/* Mobile navigation */
.mobile-nav {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background-color: var(--color-bg-primary);
  transform: translateX(100%);
  transition: transform var(--transition-normal);
  z-index: 100;
  display: none;
}

.mobile-nav-open {
  transform: translateX(0);
}

.mobile-nav-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: var(--space-6) var(--space-3);
}

.mobile-nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  text-align: center;
}

.mobile-nav-item {
  margin-bottom: var(--space-4);
}

.mobile-nav-link {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-text-primary);
  transition: color var(--transition-fast);
  display: block;
  padding: var(--space-2) 0;
}

.mobile-nav-link:hover,
.mobile-nav-link.active {
  color: var(--color-secondary);
}

.mobile-nav-actions {
  margin-top: var(--space-5);
  width: 100%;
  max-width: 300px;
}

.btn-block {
  width: 100%;
}

/* Media queries */
@media (max-width: 1023px) {
  .desktop-nav {
    display: none;
  }
  
  .mobile-menu-toggle {
    display: flex;
  }
  
  .mobile-nav {
    display: block;
  }
  
  .mobile-nav-open .bar:nth-child(1) {
    transform: translateY(9px) rotate(45deg);
  }
  
  .mobile-nav-open .bar:nth-child(2) {
    opacity: 0;
  }
  
  .mobile-nav-open .bar:nth-child(3) {
    transform: translateY(-9px) rotate(-45deg);
  }
}

@media (max-width: 767px) {
  .navbar {
    height: 70px;
  }
  
  .logo-text {
    font-size: 1.25rem;
  }
}
</style>