<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
    <a class="navbar-brand" href="#">Card Tree</a>
    <button
      class="navbar-toggler pull-right"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link btn disabled" href="#">Manage Sets</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
    name: "Nav"
}
</script>