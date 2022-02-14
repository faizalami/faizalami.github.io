<template>
  <section id="about" class="flex bg-white">
    <div class="grid md:grid-cols-3 gap-8 m-4 md:m-8">
      <div class="flex flex-col p-4 mt-48 border-gray-600 border-2 items-center">
        <div class="relative photo -mt-40">
          <picture>
            <source type="image/webp" srcset="~/assets/img/photo.webp">
            <source srcset="~/assets/img/photo.png">
            <img class="absolute border-white border-4 object-cover object-center" src="~/assets/img/photo.png" alt="Faizal Amiruddin">
          </picture>

          <div class="absolute p-5 w-full h-full">
            <div class="w-full h-full border-4 border-white" />
          </div>
        </div>

        <div class="mt-8 text-center">
          <h2 class="text-xl font-bold mb-4">
            Hello! I'm Faizal.
          </h2>
          <p>
            I was originally full-stack, but now I choose to focus in front end web.
            I am confident in my understanding about Javascript.
            In order to understand more deeply about Javascript,
            I am developing my own framework called Fremwok-Fremwokan.
          </p>
        </div>
      </div>

      <div class="p-4 border-gray-600 border-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni nesciunt repellat tenetur totam velit. Commodi consequatur consequuntur dolor incidunt odit perspiciatis totam! Accusantium cupiditate enim est inventore nemo recusandae, voluptatem.
      </div>

      <div class="p-4 border-gray-600 border-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni nesciunt repellat tenetur totam velit. Commodi consequatur consequuntur dolor incidunt odit perspiciatis totam! Accusantium cupiditate enim est inventore nemo recusandae, voluptatem.
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection'
}
</script>

<style scoped>
#about .photo,
#about .photo img {
  width: 250px;
  height: 250px;
}
</style>
