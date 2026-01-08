<template>
  <div id="app" class="resume">
    <a class="skip" href="#main">Skip to ...</a>
    <Header />
    <main id="main">
      <Hero />
      <About />
      <!-- <Experience />
      <Projects />
      <Skills />
      <Contact /> -->
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
// import Experience from './components/Experience.vue'
// import Projects from './components/Projects.vue'
// import Skills from './components/Skills.vue'
// import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: { Header, Hero, About, Footer }
}
</script>

<style>
.skip {
  position: absolute;
  left: -9999px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden
}

.skip:focus {
  position: static;
  width: auto;
  height: auto;
  padding: 0.25rem;
  left: 1rem;
  top: 1rem;
  background: var(--accent);
  color: #fff
}

main {
  padding: 1rem 0
}
</style>