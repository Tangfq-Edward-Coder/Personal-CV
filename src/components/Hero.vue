<template>
  <section id="hero" class="hero container">
    <div class="hero__main">
      <h1 class="hero__name">张三</h1>
      <p class="hero__title">Frontend Engineer • Vue / Vite • UI-focused</p>
      <p class="hero__summary">我构建可访问、性能良好且维护性高的前端应用，喜欢组件化与细致的样式设计。</p>
      <div class="hero__meta">
        <a href="mailto:zhangsan@example.com">zhangsan@example.com</a>
        <span>•</span>
        <a href="#projects">项目集</a>
      </div>
    </div>
    <div class="hero__photo" aria-hidden="true">
      <div class="avatar">ZS</div>
    </div>
  </section>
</template>

<script>
export default { name: 'Hero' }
</script>

<style scoped>
.hero{display:flex;gap:2rem;padding:2rem 0;align-items:center}
.hero__name{font-size:1.75rem;margin:0}
.hero__title{color:var(--muted-text);margin:0.25rem 0}
.hero__summary{margin:0.5rem 0;color:var(--text)}
.hero__meta a{color:var(--accent);text-decoration:none}
.avatar{width:96px;height:96px;border-radius:8px;background:linear-gradient(135deg,var(--accent),#7b61ff);display:flex;align-items:center;justify-content:center;color:white;font-weight:700}
@media (max-width:700px){.hero{flex-direction:column;align-items:flex-start}}
</style>