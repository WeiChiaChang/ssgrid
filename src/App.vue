<template>
  <div id="app">
    <div class="container">
      <header class="codrops-header">
				<h1>Grid Loading and Hover Effect <span>Recreating <a href="http://design.samsung.com/">Samsung's</a> grid loading effect</span></h1>	
				<nav class="codrops-demos">
          <router-link to="/swipe-right">Swipe right</router-link>
          <router-link to="/swipe-down">Swipe Down</router-link>
          <router-link to="/rotate">Rotate</router-link>
				</nav>
			</header>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
		</div>
  </div>
</template>

<script>
import { GridScrollFx } from './js/gridScrollFx.js'

export default {
  name: 'app',
  components: {
  },
  mounted () {
    new GridScrollFx(document.getElementById('grid'), {
			viewportFactor : 0.4
		} );
  }
}
</script>

<style>
@import './css/demo.css';
@import './css/component.css';

.fade-enter-active,
.fade-leave-active {
  transition-duration: .32s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
