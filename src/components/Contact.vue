<template>
  <section id="contact" class="container section">
    <h2>联系我</h2>
    <p>喜欢合作或想了解更多，可以通过邮件联系我。</p>
    <a class="btn" href="mailto:zhangsan@example.com">发邮件</a>
  </section>
</template>

<script>
export default { name: 'Contact' }
</script>

<style scoped>
.section .btn{margin-top:0.5rem}
.btn{display:inline-block;background:var(--accent);color:#fff;padding:0.5rem 0.75rem;border-radius:6px;text-decoration:none}
</style>