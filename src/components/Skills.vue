<template>
  <section id="skills" class="container section">
    <h2>技能</h2>
    <div class="skill-list">
      <span class="skill">Vue</span>
      <span class="skill">JavaScript</span>
      <span class="skill">TypeScript</span>
      <span class="skill">CSS</span>
      <span class="skill">Accessibility</span>
    </div>
  </section>
</template>

<script>
export default { name: 'Skills' }
</script>

<style scoped>
.skill-list{display:flex;flex-wrap:wrap;gap:0.5rem}
.skill{background:var(--muted);padding:0.35rem 0.6rem;border-radius:6px;font-weight:600}
</style>