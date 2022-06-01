<script setup>
import TheTopBar from '../components/layout/TheTopBar.vue'

const topBarClasses = useState('topBarClasses', () => 'text-white')
</script>

<template>
  <div
    class="relative mx-auto h-full w-full overflow-hidden rounded-[60px] border-[14px] border-black bg-black shadow-xl sm:h-[712px] sm:w-[350px]"
  >
    <div class="h-full w-full bg-white">
      <slot />
    </div>

    <!-- /**
          * It's absolutely positioned, so it goes after the content to be over it
          * Need to fix it via z-index or something...
          */ -->
    <TheTopBar :color-classes="topBarClasses" />
  </div>
</template>
