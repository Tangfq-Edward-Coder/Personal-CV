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
        <button class="btn" onclick="window.print()">Download / Print</button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.header {
  border-bottom: 1px solid #e6eef8;
  background: #ffffff;
}

.header__inner {
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: space-between;
  padding: 16px 0;
}

.brand a {
  font-weight: 700;
  color: #0f1720;
  text-decoration: none;
}

.nav a {
  margin: 0 8px;
  color: #6b7280;
  text-decoration: none;
}

.btn {
  background: #2563eb;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
}

.btn:hover {
  background: #1d4ed8;
}
</style>
