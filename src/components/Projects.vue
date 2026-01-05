<template>
  <section id="projects" class="container section">
    <h2>项目</h2>
    <div class="projects-grid">
      <article class="project">
        <h3>项目 A</h3>
        <p>一个展示组件库与设计系统的项目。</p>
        <a href="#" class="link">演示 ↗</a>
      </article>
      <article class="project">
        <h3>项目 B</h3>
        <p>一个侧重性能优化与可访问性的单页应用。</p>
        <a href="#" class="link">源码 ↗</a>
      </article>
    </div>
  </section>
</template>

<script>
export default { name: 'Projects' }
</script>

<style scoped>
.projects-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1rem}
.project{padding:1rem;border:1px solid var(--muted);border-radius:8px}
.link{color:var(--accent);text-decoration:none}
</style>