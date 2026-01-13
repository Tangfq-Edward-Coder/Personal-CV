<template>
  <section id="about" class="container section about">
    <h2>Biography</h2>
    <p>High school student learning web development and English.</p>

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
  padding: 20px 0;
}

.meta-list {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 12px;
}

.meta-list > div {
  width: 140px;
  text-align: center;
}

dt {
  font-weight: 600;
}

dd {
  margin: 0;
}

.meta-list a {
  color: #2563eb;
  text-decoration: none;
}
</style>
