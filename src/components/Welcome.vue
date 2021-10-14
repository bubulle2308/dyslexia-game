<template>
  <fragment>
    <canvas ref="canvas" class="animated-background"></canvas>
    <section class="content">
      <h1 class="title">Welcome to Nazka's adventure</h1>

      <router-link to="/companion" class="link">
        <csm-button primary>Press start</csm-button>
      </router-link>
    </section>

    <audio src="@/assets/music/MainMenu.mp4" autoplay="true"></audio>
  </fragment>
</template>

<script>
import { defineComponent, onMounted, ref } from '@vue/composition-api';
import { AnimatedBackground } from "../composables/animated-background";

function setup() {
  const canvas = ref(null);
  const isMuted = ref(false);
  let animatedBackground = new AnimatedBackground();

  onMounted(() => {
    // animatedBackground.init(canvas);
  });
}

export default defineComponent({
  props: {},
  setup,
});
</script>

<style scoped>
.animated-background, .content  {
  height: 100%;
  width: 100%;
}

.content {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  z-index: 1;
}

.title {
  font-size: 3.33em;
  letter-spacing: .15em;
  color: var(--colors-text-white-base);
}

.link {
  text-decoration: none;
}

.mute-music {
  position: absolute;
  top: 2em;
  right: 2em;
  color: var(--colors-text-white-base);
  cursor: pointer;
}
</style>
