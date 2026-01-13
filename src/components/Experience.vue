<template>
  <section id="experience" class="container section experience">
    <h2>Experience</h2>
    <div class="experience-list">
      <div class="experience-item">
        <div class="experience-header">
          <h3>Web Developer</h3>
          <span class="experience-date">2023 - Present</span>
        </div>
        <p class="experience-company">Personal Projects</p>
        <p class="experience-description">Creating websites and web pages. Learning HTML, CSS, and JavaScript to build simple and useful web applications.</p>
      </div>
      <div class="experience-item">
        <div class="experience-header">
          <h3>Student</h3>
          <span class="experience-date">2020 - Present</span>
        </div>
        <p class="experience-company">SSAP Program</p>
        <p class="experience-description">High school student learning computer programming. Building personal projects and practicing coding skills.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default { name: 'Experience' }
</script>

<style scoped>
.section {
  padding: 20px 0;
}

.experience-list {
  margin-top: 16px;
}

.experience-item {
  padding: 24px;
  border-left: 3px solid #2563eb;
  background: #ffffff;
  border-radius: 4px;
  margin-bottom: 32px;
}

.experience-header {
  margin-bottom: 8px;
}

.experience-header h3 {
  margin: 0;
  font-size: 18px;
  color: #0f1720;
  display: inline-block;
  margin-right: 16px;
}

.experience-date {
  color: #6b7280;
  font-size: 14px;
}

.experience-company {
  margin: 4px 0;
  color: #2563eb;
  font-weight: 600;
}

.experience-description {
  margin: 12px 0 0 0;
  color: #0f1720;
  line-height: 1.6;
}

@media (max-width: 700px) {
  .experience-header h3 {
    display: block;
    margin-bottom: 8px;
  }
}
</style>
