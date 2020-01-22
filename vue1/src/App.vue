<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <CardsStudy/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import CardsStudy from './components/CardsStudy.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld,
    CardsStudy
  }
}
</script>

<style>
  /* css vars */
:root {
  --seaGreen: #44c87f;
  --appleRed: #c52607;
  --appleWhite: #fff8e6;
  --offWhiteBlue: #e1f5ff;
  --orangeCream: #ffe5b6;
  --orangeCreamShadow: #c7a361;
}

[v-cloak] {
  display: none;
}

.navbar-toggler {
  border: none;
}
.navbar-toggler:focus {
  border: none;
  box-shadow: none;
  border-color: none;
}

.first-container {
  height: 100%;
  margin: 65px 15px;
}
.second-container {
  margin: 0 auto;
}

.display-toggler {
  position: absolute;
  top: 65px;
  right: 10px;
}

.bg-light-blue {
  display: flex;
  background-color: #00adff;
}

/* Bootstrap overrides */
.card {
  border: none;
  box-shadow: 3px 3px 3px var(--orangeCreamShadow);
}

/* Media Queries */
/* smallest devices */
@media (max-width: 575px) {
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
}
</style>