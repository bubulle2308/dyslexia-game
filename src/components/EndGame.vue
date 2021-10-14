<template>
  <section class="main-container">
    <aside class="sidebar">
      <article class="content">
        <h4>Thank you so much for helping me get home to my family and friends.</h4>
        <p>I really enjoyed our adventure. Please take care and be good!</p>
        <p>Note: There are some information for your parents, let them know about it!</p>

        <csm-button class="action" primary v-on:csmClick="seeReport()">Parents information</csm-button>
      </article>
      <img class="companion" :src="companion.path" />
    </aside>

    <section class="not-companions-container">
      <img v-for="(companion, index) in notCompanions" :src="companion.path" :alt="companion.name" :key="index" :class="`not-companion offset-${index}`"/>

      <div class="jewels-container">
        <div :class="getJewelClass(index)" v-for="(jewel, index) in new Array(7).fill(undefined)" :key="index">
          <img class="jewel" src="@/assets/jewel.png" alt="A jewel that looks like a shiny diamond!"/>
        </div>
      </div>
    </section>

    <audio src="@/assets/music/Credits.mp4" autoplay="true"></audio>
  </section>
</template>

<script>
import { defineComponent, ref } from "@vue/composition-api";
import { useCompanion } from "../composables/useCompanion";

function setup() {
  const companion = ref(useCompanion.getInstance().companion);
  const notCompanions = ref(useCompanion.getInstance().companionList.filter(c => c.name !== companion.value.name));

  function seeReport() {}
  function getJewelClass(index) {
    return index % 7 === 0
        ? { 'jewel-full-columns': true }
        : index % 7 < 3
            ? { 'jewel-half-columns': true }
            : { 'jewel-single-column': true };
  }

  return {
    companion,
    notCompanions,
    seeReport,
    getJewelClass,
  };
}

export default defineComponent({
  props: {},
  setup,
});
</script>

<style scoped>
.main-container {
  display: flex;
  padding: 4em 2em 4em 6em;
  background-image: url('~@/assets/backgrounds/oral-spelling.png');
  background-size: 150%;
  background-repeat: no-repeat;
  background-position: 50% 100%;
}

.sidebar {
  position: relative;
  width: 25%;
  text-align: left;
}

.content {
  width: 100%;
  height: 50%;
  padding: var(--nazca-rect-padding);
  background-color: var(--nazca-rect-color);
  border-radius: var(--nazca-rect-radius);
  transition: opacity .2s ease-in-out;
}

.companion {
  position: absolute;
  bottom: 10em;
  left: -2em;
  width: 75%;
  user-select: none;
  transition: transform .33s ease-in-out, opacity 1s ease-in-out;
}

.not-companions-container {
  position: relative;
  width: 75%;
}

.not-companion {
  position: absolute;
  width: 15vw;
  left: 0;
  bottom: 7.5vh;
}

.not-companion.offset-1 {
  left: 15vw;
  bottom: 20vh;
}

.not-companion.offset-2 {
  left: 33vw;
  bottom: 25vh;
}

.jewels-container {
  position: absolute;
  bottom: -2.5vh;
  right: 25vw;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(4, 25%);
  gap: 0 .66em;
  width: 200px;
}

.jewel {
  width: 52px;
  height: 52px;
}

.jewel-full-columns {
  position: relative;
  grid-column: span 4;
}

.jewel-half-columns {
  position: relative;
  grid-column: span 2;
}

.jewel-single-column {
  position: relative;
  grid-column: span 1;
}
</style>
