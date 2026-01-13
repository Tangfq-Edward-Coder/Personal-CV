<template>
  <div id="app" class="resume">
    <a class="skip" href="#main">Skip to main content</a>
    <Header />
    <main id="main">
      <Hero />
      <About />
      <Experience />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Experience from './components/Experience.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: { Header, Hero, About, Experience, Footer }
}
</script>

<style>
.skip {
  position: absolute;
  left: -9999px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

.skip:focus {
  position: static;
  width: auto;
  height: auto;
  padding: 4px;
  left: 16px;
  top: 16px;
  background: #2563eb;
  color: #fff;
}

main {
  padding: 16px 0;
}
</style>
