<template>
  <div class="blog-page">
    <section class="hero-section section">
      <div class="container">
        <div class="hero-content reveal">
          <h1>Blog</h1>
          <p class="hero-subtitle">Insights, updates, and tech trends</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'BlogPage'
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
</style>