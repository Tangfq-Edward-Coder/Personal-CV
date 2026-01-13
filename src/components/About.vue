<template>
  <section id="about" class="container section about">
    <h2>Biography</h2>
    <p>SSAP Student familiar with Vue and contemporary English.</p>

    <dl class="meta-list">
      <div>
        <dt>Gender</dt>
        <dd>Male</dd>
      </div>
      <div>
        <dt>Location</dt>
        <dd>Guangzhou, China</dd>
      </div>
      <div>
        <dt>Email</dt>
        <dd><a href="mailto:tangfq_edward@outlook.com">tangfq_edward@outlook.com</a></dd>
      </div>
      <div>
        <dt>Website</dt>
        <dd><a href="#projects">tangfq-edward-coder.github.io/Personal-CV</a></dd>
      </div>
    </dl>
  </section>
</template>

<script>
export default { name: 'About' }
</script>

<style scoped>
.section {
  padding: 1.25rem 0
}

.meta-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 0.75rem;
  margin-top: 0.75rem;
}

dt {
  font-weight: 600;
}

.meta-list>div {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-width: 140px;
}

dd {
  margin: 0;
}
</style>
