<template>
  <div>
    <section class="grid-wrap">
			<ul class="grid swipe-rotate" id="grid">
				<li class="title-box">
					<h2>Illustrations by <a href="http://ryotakemasa.com/">Ryo Takemasa</a></h2>
				</li>
        <li v-for="(item, index) in 40" :key="index">
          <a href="#">
            <img :src="require(`../../assets/${item % 13 === 0 ? item % 13 + 8 : item % 13}.jpg`)" alt="">
            <h3>A fantastic title {{item}}</h3>
          </a>
        </li>
			</ul>
		</section>
  </div>
</template>

<script>
import { GridScrollFx } from '../../js/gridScrollFx.js'

export default {
  mounted () {
    new GridScrollFx(document.getElementById('grid'), {
			viewportFactor : 0.4
		} );
  }
}
</script>