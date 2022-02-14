<template>
  <section id="hero" class="w-full h-screen overflow-hidden">
    <picture>
      <source type="image/webp" srcset="~/assets/img/bg-1.webp">
      <source srcset="~/assets/img/bg-1.png">
      <img ref="image1" class="w-screen h-screen fixed object-none hero-images" src="~/assets/img/bg-1.png" alt="">
    </picture>
    <picture>
      <source type="image/webp" srcset="~/assets/img/bg-2.webp">
      <source srcset="~/assets/img/bg-2.png">
      <img ref="image2" class="w-screen h-screen fixed object-none hero-images" src="~/assets/img/bg-2.png" alt="">
    </picture>

    <div class="flex w-screen h-screen items-center p-8">
      <div class="m-auto p-4 md:w-1/3 lg:h-1/4 hero-title-container">
        <div class="flex justify-center flex-col p-4 w-full h-full border-4 border-white text-center text-white hero-title">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            Faizal Amiruddin
          </h1>
          <p class="text-2xl">
            Front End Web Developer
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  mounted () {
    document.addEventListener('mousemove', this.parallax)
    document.addEventListener('touchmove', this.parallax, false)
  },
  destroyed () {
    document.removeEventListener('mousemove', this.parallax)
    document.removeEventListener('touchmove', this.parallax, false)
  },
  methods: {
    parallax (event) {
      let posX = 0
      if (event.type === 'mousemove') {
        posX = event.clientX
      }
      if (event.type === 'touchmove') {
        posX = event.touches[0].clientX
      }
      this.setPosition(this.$refs.image1, posX, -0.05)
      this.setPosition(this.$refs.image2, posX, 0.1)
    },
    setPosition (img, mouseX, speed) {
      const imageW = img.scrollWidth / 2
      const imageH = img.scrollHeight / 2
      const depthX = 50 - (mouseX - imageW) * speed
      const depth = `${depthX <= 100 ? depthX : 100}% ${50 - imageH * 0.01}%`
      img.style.objectPosition = `${depth}`
    }
  }
}
</script>

<style scoped>
#hero {
  background: rgba(0, 0, 0, 0.3);
}

#hero .hero-images {
  z-index: -1;
  transition: all linear 0.1s;
}

#hero .hero-title-container {
  background: rgba(0, 0, 0, 0.5);
}
</style>
