<template>
  <section id="about" class="container section about">
    <h2>Programs</h2>
    <div class="programs-list">
      <div class="program-item">
        <h3>Web Development</h3>
        <p>Building modern web applications with Vue.js and Vite</p>
      </div>
      <div class="program-item">
        <h3>Frontend Design</h3>
        <p>Creating contemporary and user-friendly interfaces</p>
      </div>
      <div class="program-item">
        <h3>Student Projects</h3>
        <p>Developing personal projects and learning new technologies</p>
      </div>
    </div>
  </section>
</template>

<script>
export default { name: 'About' }
</script>

<style scoped>
.section {
  padding: 1.25rem 0
}

.programs-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.program-item {
  padding: 1.25rem;
  border: 1px solid var(--border-color, #e0e0e0);
  border-radius: 8px;
  background: var(--card-bg, #fff);
  transition: transform 0.2s, box-shadow 0.2s;
}

.program-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.program-item h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.125rem;
  color: var(--accent);
}

.program-item p {
  margin: 0;
  color: var(--text);
  line-height: 1.6;
}
</style>
