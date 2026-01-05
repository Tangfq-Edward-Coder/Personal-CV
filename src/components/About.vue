<template>
  <section id="about" class="container section about">
    <h2>关于我</h2>
    <p>拥有 5 年前端开发经验，擅长 Vue 生态、组件化设计和前端性能优化。热衷于可用性与可维护性。</p>

    <dl class="meta-list">
      <div>
        <dt>位置</dt>
        <dd>北京, 中国</dd>
      </div>
      <div>
        <dt>邮箱</dt>
        <dd><a href="mailto:zhangsan@example.com">zhangsan@example.com</a></dd>
      </div>
      <div>
        <dt>网站</dt>
        <dd><a href="#projects">example.dev</a></dd>
      </div>
    </dl>
  </section>
</template>

<script>
export default { name: 'About' }
</script>

<style scoped>
.section{padding:1.25rem 0}
.meta-list{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:0.75rem;margin-top:0.75rem}
dt{font-weight:600}
</style>