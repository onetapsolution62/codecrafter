<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import TheNavbar from './components/TheNavbar.vue'
import TheFooter from './components/TheFooter.vue'

const router = useRouter()
const isLoading = ref(true)

onMounted(async () => {
  // Simulate loading
  setTimeout(async () => {
    isLoading.value = false
    await nextTick()
    // Add scroll reveal animation to elements
    const animatedElements = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1 })
    
    animatedElements.forEach(el => observer.observe(el))
  }, 1000)
})
</script>

<template>
  <div class="app">
    <!-- Loading screen -->
    <div class="loading-screen" v-if="isLoading">
      <div class="logo-container">
        <span class="logo-text">OneTapSolution</span>
        <span class="loading-dots">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </span>
      </div>
    </div>
    
    <!-- Main content -->
    <TheNavbar v-if="!isLoading" />
    
    <main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    
    <TheFooter v-if="!isLoading" />
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}

.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.logo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo-text {
  color: white;
  font-size: 3rem;
  font-weight: 600;
  letter-spacing: -0.025em;
  margin-bottom: 2rem;
}

.loading-dots {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

.dot {
  width: 0.75rem;
  height: 0.75rem;
  background-color: white;
  border-radius: 50%;
  display: inline-block;
  animation: pulse 1.5s infinite ease-in-out;
}

.dot:nth-child(2) {
  animation-delay: 0.2s;
}

.dot:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(0.5);
    opacity: 0.5;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
}

/* Reveal animation for content */
:global(.reveal) {
  opacity: 1;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

:global(.revealed) {
  opacity: 1;
  transform: translateY(0);
}

:global(.reveal-delay-1) {
  transition-delay: 0.1s;
}

:global(.reveal-delay-2) {
  transition-delay: 0.2s;
}

:global(.reveal-delay-3) {
  transition-delay: 0.3s;
}

:global(.reveal-delay-4) {
  transition-delay: 0.4s;
}

:global(.reveal-delay-5) {
  transition-delay: 0.5s;
}
</style>