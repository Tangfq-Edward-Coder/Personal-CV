<template>
  <section id="experience" class="container section experience">
    <h2>Experience</h2>
    <div class="experience-list">
      <div class="experience-item">
        <div class="experience-header">
          <h3>Frontend Developer</h3>
          <span class="experience-date">2023 - Present</span>
        </div>
        <p class="experience-company">Personal Projects</p>
        <p class="experience-description">Developing web applications using Vue.js and modern frontend technologies. Focus on creating user-friendly interfaces and contemporary design.</p>
      </div>
      <div class="experience-item">
        <div class="experience-header">
          <h3>Student</h3>
          <span class="experience-date">2020 - Present</span>
        </div>
        <p class="experience-company">SSAP Program</p>
        <p class="experience-description">Studying software development with focus on Vue.js and contemporary web technologies. Building personal projects and learning new frameworks.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default { name: 'Experience' }
</script>

<style scoped>
.section {
  padding: 1.25rem 0
}

.experience-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 1rem;
}

.experience-item {
  padding: 1.5rem;
  border-left: 3px solid var(--accent);
  background: var(--card-bg, #fff);
  border-radius: 4px;
}

.experience-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.experience-header h3 {
  margin: 0;
  font-size: 1.125rem;
  color: var(--text);
}

.experience-date {
  color: var(--muted-text);
  font-size: 0.9rem;
  white-space: nowrap;
}

.experience-company {
  margin: 0.25rem 0;
  color: var(--accent);
  font-weight: 600;
}

.experience-description {
  margin: 0.75rem 0 0 0;
  color: var(--text);
  line-height: 1.6;
}

@media (max-width: 700px) {
  .experience-header {
    flex-direction: column;
  }
}
</style>

