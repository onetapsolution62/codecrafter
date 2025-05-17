<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  image: string;
  tags: string[];
}>();
</script>

<template>
  <div class="project-card">
    <div class="project-image">
      <img :src="image" :alt="title" />
      <div class="project-overlay">
        <router-link to="#" class="view-project">View Project</router-link>
      </div>
    </div>
    <div class="project-content">
      <h3 class="project-title">{{ title }}</h3>
      <p class="project-description">{{ description }}</p>
      <div class="project-tags">
        <span v-for="(tag, index) in tags" :key="index" class="project-tag">{{ tag }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  background-color: white;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.project-image {
  position: relative;
  overflow: hidden;
  aspect-ratio: 16 / 9;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-normal);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(10, 35, 66, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity var(--transition-normal);
}

.view-project {
  color: white;
  padding: var(--space-2) var(--space-4);
  border: 2px solid white;
  border-radius: var(--radius-md);
  font-weight: 600;
  transition: all var(--transition-fast);
}

.view-project:hover {
  background-color: white;
  color: var(--color-primary);
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-card:hover .project-image img {
  transform: scale(1.05);
}

.project-content {
  padding: var(--space-4);
  flex: 1;
  display: flex;
  flex-direction: column;
}

.project-title {
  font-size: 1.25rem;
  margin-bottom: var(--space-2);
  color: var(--color-primary);
}

.project-description {
  color: var(--color-text-secondary);
  margin-bottom: var(--space-3);
  flex: 1;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-1);
}

.project-tag {
  font-size: 0.75rem;
  padding: 0.25rem 0.75rem;
  background-color: var(--color-bg-tertiary);
  color: var(--color-text-secondary);
  border-radius: var(--radius-full);
}
</style>