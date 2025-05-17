<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
const goHome = () => {
  router.push('/');
}
</script>

<template>
  <div class="error-page">
    <div class="error-content">
      <h1 class="error-code">404</h1>
      <h2 class="error-title">Page Not Found</h2>
      <p class="error-message">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
      <button @click="goHome" class="btn btn-primary">Back to Home</button>
    </div>
  </div>
</template>

<style scoped>
.error-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: var(--color-bg-secondary);
  text-align: center;
}

.error-content {
  max-width: 500px;
  padding: var(--space-5);
}

.error-code {
  font-size: 8rem;
  font-weight: 700;
  line-height: 1;
  margin: 0;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.error-title {
  font-size: 2rem;
  margin-bottom: var(--space-3);
  color: var(--color-primary);
}

.error-message {
  font-size: 1.125rem;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-5);
}
</style>