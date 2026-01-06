<template>
  <section id="hero" class="hero container">
    <div class="hero__main">
      <h1 class="hero__name">Edward Tang</h1>
      <p class="hero__title">Student • Vue / Vite Foucsed</p>
      <p class="hero__summary">I build  frontend applications with a focus on contemporary design.</p>
      <div class="hero__meta">
        <a href="mailto:tangfq_edward@outlook.com">tangfq_edward@outlook.com</a>
        <span>•</span>
        <a href="#projects">Projects</a>
      </div>
    </div>
    <div class="hero__photo" aria-hidden="true">
      <img :src="avatarImage" alt="Avatar" class="avatar">
    </div>
  </section>
</template>

<script>
import avatarImage from '@/assets/avatar.jpeg'

export default { 
  name: 'Hero',
  data() {
    return {
      avatarImage
    }
  }
}
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