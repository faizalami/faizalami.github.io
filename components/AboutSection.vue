<template>
  <section id="about" class="flex bg-white">
    <div class="grid md:grid-cols-3 md:grid-rows-2 gap-8 m-4 md:m-8">
      <div class="md:row-span-2 flex flex-col p-4 mt-28 border-gray-600 border-2 items-center">
        <div class="relative photo -mt-32">
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
            I am developing my own framework called
            <a
              class="underline"
              href="https://github.com/faizalami/fremwok-fremwokan"
              rel="noopener"
              target="_blank"
            >
              Fremwok-Fremwokan
            </a>.
          </p>
        </div>
      </div>

      <div class="flex flex-col mt-6 p-4 border-gray-600 border-2">
        <h2 class="text-xl font-bold mb-4 mx-auto -mt-10 p-2 border-gray-600 border-2 bg-white">
          <img class="inline-block skill-icon" src="~/assets/img/icon/star-symbol.png" alt="">
          Advanced Skills
        </h2>
        <ul class="list-disc ml-4">
          <li>Javascript</li>
          <li>Vue</li>
          <li>React</li>
        </ul>
      </div>

      <div class="flex flex-col md:row-start-2 md:col-start-2 mt-6 p-4 border-gray-600 border-2">
        <h2 class="text-xl font-bold mb-4 mx-auto -mt-10 p-2 border-gray-600 border-2 bg-white">
          <img class="inline-block skill-icon" src="~/assets/img/icon/star-symbol-silver.png" alt="">
          Other Skills
        </h2>
        <ul class="list-disc ml-4">
          <li>PHP</li>
          <li>Svelte</li>
          <li>Java</li>
          <li>Python</li>
          <li>Graphic Design</li>
          <li>Photo Editing</li>
        </ul>
      </div>

      <div class="flex md:row-span-2 p-4 border-gray-600 border-2">
        <div class="flex flex-col w-full h-full p-4 justify-center items-center border-gray-600 border-2">
          <h2 class="text-xl font-bold mb-4 mx-auto p-2 border-gray-600 border-2 bg-white">
            Contacts
          </h2>
          <ul class="flex flex-col space-y-4 mt-4 break-all text-sm md:text-base">
            <li>
              <img class="inline-block mr-2 object-contain contact-icon" src="~/assets/img/icon/pin-location.png" alt="Home Address">
              Dlanggu, Kab. Mojokerto, Jawa Timur
            </li>
            <li>
              <img class="inline-block mr-2 object-contain contact-icon" src="~/assets/img/icon/whatsapp-color.png" alt="Whatsapp Number">
              <a
                href="https://wa.me/85330438009"
                rel="noopener"
                target="_blank"
              >
                +62 853 3043 8009 (Whatsapp)
              </a>
            </li>
            <li>
              <img class="inline-block mr-2 object-contain contact-icon" src="~/assets/img/icon/gmail.png" alt="Email">
              <a
                href="mailto:f.a.faizal.amiruddin@gmail.com"
                rel="noopener"
                target="_blank"
              >
                f.a.faizal.amiruddin@gmail.com
              </a>
            </li>
            <li>
              <img class="inline-block mr-2 object-contain contact-icon" src="~/assets/img/icon/github.png" alt="Github Profile">
              <a
                href="https://github.com/faizalami"
                rel="noopener"
                target="_blank"
              >
                github.com/faizalami
              </a>
            </li>
            <li>
              <img class="inline-block mr-2 object-contain contact-icon" src="~/assets/img/icon/linkedin-square-color.png" alt="Linkedin Profile">
              <a
                href="https://www.linkedin.com/in/faizalami/"
                rel="noopener"
                target="_blank"
              >
                linkedin.com/in/faizalami
              </a>
            </li>
          </ul>
        </div>
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

.skill-icon {
  height: 1.25rem;
  margin-top: -0.5rem;
}

.contact-icon {
  height: 1.25rem;
  width: 1.25rem;
  margin-top: -0.25rem;
}
</style>
