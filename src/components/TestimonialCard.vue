<script setup lang="ts">
defineProps<{
  quote: string;
  author: string;
  role: string;
  avatar: string;
}>();
</script>

<template>
  <div class="testimonial-card">
    <div class="quote-icon">
      <q-icon name="format_quote" size="36px" />
    </div>
    <blockquote class="testimonial-quote">
      {{ quote }}
    </blockquote>
    <div class="testimonial-author">
      <div class="author-avatar">
        <img :src="avatar" :alt="author" />
      </div>
      <div class="author-info">
        <h4 class="author-name">{{ author }}</h4>
        <p class="author-role">{{ role }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.testimonial-card {
  background-color: white;
  border-radius: var(--radius-lg);
  padding: var(--space-5);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}

.testimonial-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.quote-icon {
  color: var(--color-secondary);
  opacity: 0.2;
  position: absolute;
  top: var(--space-4);
  right: var(--space-4);
}

.testimonial-quote {
  margin: 0 0 var(--space-4);
  font-style: italic;
  color: var(--color-text-secondary);
  flex: 1;
  position: relative;
  z-index: 1;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.author-avatar {
  width: 50px;
  height: 50px;
  border-radius: var(--radius-full);
  overflow: hidden;
  border: 2px solid var(--color-secondary);
}

.author-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.author-name {
  margin: 0;
  font-size: 1.125rem;
  color: var(--color-primary);
}

.author-role {
  margin: 0;
  font-size: 0.875rem;
  color: var(--color-text-tertiary);
}
</style>