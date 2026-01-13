<template>
  <section id="hero" class="hero container">
    <div class="hero__main">
      <h1 class="hero__name">Edward Tang</h1>
      <p class="hero__title">Student • Learning Web Development</p>
      <p class="hero__summary">I create simple websites and learn how to build web pages.</p>
      <div class="hero__meta">
        <a href="mailto:tangfq_edward@outlook.com">tangfq_edward@outlook.com</a>
        <span>•</span>
        <a href="#projects">Projects</a>
      </div>
    </div>
    <div class="hero__photo" aria-hidden="true">
      <img src="https://cdn.luogu.com.cn/upload/image_hosting/wr6lstah.png" alt="Avatar" class="avatar">
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style scoped>
.hero {
  display: flex;
  gap: 32px;
  padding: 32px 0;
  align-items: center;
}

.hero__name {
  font-size: 28px;
  margin: 0;
}

.hero__title {
  color: #6b7280;
  margin: 4px 0;
}

.hero__summary {
  margin: 8px 0;
  color: #0f1720;
}

.hero__meta a {
  color: #2563eb;
  text-decoration: none;
}

.avatar {
  width: 106px;
  height: 106px;
  border-radius: 8px;
}

@media (max-width: 700px) {
  .hero {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
