<template>
  <header class="header">
    <div class="container header__inner">
      <div class="brand"> 
        <a href="#hero">Edward Tang</a>
      </div>
      <nav class="nav" aria-label="Primary">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
      <div class="actions">
        <button class="btn" @click="print">Download / Print</button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    print() {
      window.print()
    }
  }
}
</script>

<style scoped>
.header {
  border-bottom: 1px solid var(--muted);
  background: var(--bg-elev);
}
.header__inner {
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
  padding: 1rem 0;
}
.brand a{
  font-weight: 700;
  color: var(--text);
  text-decoration: none;
}
.nav a{
  margin: 0 0.5rem;
  color: var(--muted-text);
  text-decoration: none;
}
.btn{
  background: var(--accent);
  color: white;
  border: none;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  cursor: pointer;
}
</style>