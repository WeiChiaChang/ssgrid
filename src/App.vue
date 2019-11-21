<template>
  <div id="app">
    <div class="container">
			<section class="grid-wrap">
				<ul class="grid swipe-down" id="grid">
					<li class="title-box">
						<h2>Illustrations by <a href="http://ryotakemasa.com/">Ryo Takemasa</a></h2>
					</li>
          <li v-for="(item, index) in 40" :key="index">
            <a href="#">
              <img :src="`https://tympanus.net/Tutorials/SamsungGrid/img/${item % 13 === 0 ? item % 13 + 1 : item % 13}.jpg`" alt="dummy">
              <h3>A fantastic title {{item}}</h3>
            </a>
          </li>
				</ul>
			</section>
		</div><!-- /container -->
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
</style>
