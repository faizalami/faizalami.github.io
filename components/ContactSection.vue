<template>
  <section id="contact">
    <div class="flex justify-center items-center w-full title">
      <h2 class="w-full border-y-4 border-white p-8 text-center text-4xl font-bold text-white">
        Contacts
      </h2>
    </div>

    <div class="bg-white p-4">
      <div class="flex w-full p-4 border-gray-600 border-2">
        <div class="flex flex-col w-full h-full p-4 justify-center items-center border-gray-600 border-2">
          <ul class="flex flex-col space-y-4 mt-4 break-all text-sm md:text-base">
            <li>
              <img class="inline-block mr-2 object-contain contact-icon" src="~/assets/img/icon/pin-location.png" alt="Home Address">
              Dlanggu, Kab. Mojokerto, Jawa Timur
            </li>
            <li>
              <img class="inline-block mr-2 object-contain contact-icon" src="~/assets/img/icon/whatsapp-color.png" alt="Whatsapp Number">
              <a
                href="https://wa.me/6285330438009"
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
  name: 'ContactSection'
}
</script>

<style scoped>
#contact .title {
  background: rgba(0, 0, 0, 0.5);
  min-height: 150px;
}

#contact .contact-icon {
  height: 1.25rem;
  width: 1.25rem;
  margin-top: -0.25rem;
}

</style>
