<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  icon: string;
}>();
</script>

<template>
  <div class="service-card">
    <div class="service-icon">
      <q-icon :name="icon" size="48px" />
    </div>
    <h3 class="service-title">{{ title }}</h3>
    <p class="service-description">{{ description }}</p>
    <a href="#" class="service-link">Learn more</a>
  </div>
</template>

<style>
.service-card {
  background-color: white;
  border-radius: var(--radius-lg);
  padding: var(--space-5);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(to right, var(--color-primary), var(--color-secondary));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--transition-normal);
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.service-card:hover::before {
  transform: scaleX(1);
}

.service-icon {
  margin-bottom: var(--space-3);
  color: var(--color-primary);
  background-color: rgba(10, 35, 66, 0.05);
  width: 80px;
  height: 80px;
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-normal);
}

.service-card:hover .service-icon {
  color: var(--color-secondary);
  background-color: rgba(44, 165, 141, 0.1);
}

.service-title {
  font-size: 1.5rem;
  margin-bottom: var(--space-2);
  color: var(--color-primary);
}

.service-description {
  color: var(--color-text-secondary);
  margin-bottom: var(--space-3);
  flex: 1;
}

.service-link {
  font-weight: 600;
  color: var(--color-secondary);
  position: relative;
  padding-right: 20px;
  align-self: flex-start;
  transition: all var(--transition-fast);
}

.service-link::after {
  content: '→';
  position: absolute;
  right: 0;
  transition: transform var(--transition-fast);
}

.service-link:hover {
  color: var(--color-secondary-dark);
}

.service-link:hover::after {
  transform: translateX(5px);
}
</style>