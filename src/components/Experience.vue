<template>
  <section id="experience" class="container section">
    <h2>工作经验</h2>
    <div class="job">
      <h3>高级前端工程师 — Acme Inc.</h3>
      <p class="job__meta">2021 — 现在 · 北京</p>
      <ul>
        <li>负责构建公司主应用的组件库与关键页面，提升首屏性能 30%。</li>
        <li>引入 TypeScript 与测试覆盖，改善交付质量。</li>
      </ul>
    </div>

    <div class="job">
      <h3>前端工程师 — Beta Tech</h3>
      <p class="job__meta">2018 — 2021 · 上海</p>
      <ul>
        <li>参与多个跨端产品的 UI 重构与移动端适配。</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default { name: 'Experience' }
</script>

<style scoped>
.job{margin:0.75rem 0;padding:0.75rem;border-left:3px solid var(--muted);}
.job__meta{color:var(--muted-text);font-size:0.9rem}
</style>