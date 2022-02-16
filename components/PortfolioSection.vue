<template>
  <section id="portfolio">
    <div class="flex justify-center items-center w-full title">
      <h2 class="w-full border-y-4 border-white p-8 text-center text-4xl font-bold text-white">
        Portfolio
      </h2>
    </div>

    <div class="flex bg-white">
      <div class="md:columns-4 md:gap-8 m-4 md:m-8">
        <div
          v-for="(portfolio, index) in portfolios"
          :key="index"
          class="border-gray-600 border-2 p-2 box-border break-inside-avoid-column"
          :class="index > 0 ? 'mt-8' : ''"
        >
          <div class="-mx-2 -mt-2 border-gray-600 border-b-2 p-2">
            <h3 class="text-xl font-bold text-center">
              {{ portfolio.title }}
            </h3>
          </div>
          <div v-if="portfolio.link" class="-mx-2 border-gray-600 border-b-2 p-2">
            <a
              class="text-blue-800 text-sm"
              :href="portfolio.link"
              rel="noopener"
              target="_blank"
            >
              {{ portfolio.link }}
            </a>
          </div>
          <div v-if="portfolio.images.length" class="-mx-2 mb-2 border-gray-600 border-b-2 image">
            <button class="w-full h-full" @click="showImages(portfolio.images)">
              <img
                :src="portfolio.images[0]"
                alt=""
                class="w-full h-full object-cover"
                loading="lazy"
                width="430"
                height="148"
              >
            </button>
          </div>
          <div>
            <ul class="list-disc ml-4">
              <li v-for="(desc, descIdx) in portfolio.descriptions" :key="descIdx">
                {{ desc }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <image-preview :show.sync="showImage" :images="images" />
  </section>
</template>

<script>
export default {
  name: 'PortfolioSection',
  data () {
    return {
      portfolios: [
        {
          title: 'Fremwok-Fremwokan',
          images: [
            require('~/assets/img/portfolio/fremwok-fremwokan.png')
          ],
          link: 'https://github.com/faizalami/fremwok-fremwokan',
          descriptions: [
            'My own framework that I built to understand reactivity of front end Javascript framework.',
            'It use the basic reactivity concept of Vue.',
            'Currently, It have some useful features such as modular component which have the structure similar to Vue' +
            '(data, computed, methods, and lifecycle) but using jsx as V-DOM, it also have built in router and global state management.'
          ]
        },
        {
          title: 'IoT Stadium',
          images: [
            require('~/assets/img/portfolio/iot-stadium-1.png'),
            require('~/assets/img/portfolio/iot-stadium-2.png'),
            require('~/assets/img/portfolio/iot-stadium-3.png'),
            require('~/assets/img/portfolio/iot-stadium-4.png'),
            require('~/assets/img/portfolio/iot-stadium-5.png'),
            require('~/assets/img/portfolio/iot-stadium-6.png')
          ],
          link: 'https://app.iotstadium.com',
          descriptions: [
            'My latest work in Wowrack.',
            'IoT ecosystem management panel.',
            'Built using NuxtJS (Front End Side).',
            'It contains some core features such as device management, device automation builder, ' +
            'and real-time dashboard with graphical chart and customizable map.'
          ]
        },
        {
          title: 'Cloudraya - DNS Bucket',
          images: [
            require('~/assets/img/portfolio/dns-bucket.png')
          ],
          link: 'https://cloudraya.com/en/',
          descriptions: [
            'DNS management panel.',
            'Built using NuxtJS (Front End Side).'
          ]
        },
        {
          title: 'Cloudraya - AWS',
          images: [
            require('~/assets/img/portfolio/aws.png')
          ],
          link: 'https://cloudraya.com/en/',
          descriptions: [
            'Simplified AWS services management panel.',
            'Original AWS panel is difficult to understand, even a new user will often ' +
            'browsing some tutorials to operate, so this is the purpose of Cloudraya - AWS.',
            'Built using NuxtJS (Front End Side).'
          ]
        },
        {
          title: 'Umrahaj',
          images: [
            require('~/assets/img/portfolio/umrahaj.png')
          ],
          link: 'https://www.umrahaj.id',
          descriptions: [
            'Umrah & Hajj Marketplace.',
            'Built using NuxtJS (Front End Side).'
          ]
        },
        {
          title: 'Laravel Mager',
          images: [
            require('~/assets/img/portfolio/laravel-mager-1.png'),
            require('~/assets/img/portfolio/laravel-mager-2.png')
          ],
          link: 'https://faizalami.github.io/laravel-mager',
          descriptions: [
            'My college\'s final project app and also my interesting experience as an open source dev.',
            'Laravel package for design and generate a ready to use application.',
            'It provides some features to generate Laravel framework codes without writing any code.',
            'Consist of Drag and Drop GUI Builder, Choose Theme, REST API Response Designer, and Database Manager.',
            'I built this plugin when Laravel is still in version 6, But I am not longer maintaining it, ' +
            'so probably this plugin can\'t be used in for latest version of Laravel.'
          ]
        },
        {
          title: 'MySights - Opinion Mining',
          images: [
            require('~/assets/img/portfolio/mysights-1.jpg'),
            require('~/assets/img/portfolio/mysights-2.jpg'),
            require('~/assets/img/portfolio/mysights-3.jpg')
          ],
          link: null,
          descriptions: [
            'An analytical tool to explore public opinion and trends in online media as insight for the company business',
            'Built using Laravel'
          ]
        },
        {
          title: 'KasirSaku',
          images: [
            require('~/assets/img/portfolio/kasir-saku-1.png'),
            require('~/assets/img/portfolio/kasir-saku-2.png')
          ],
          link: null,
          descriptions: [
            'A project built for practicing Agile Scrum development in Software Engineering lecture.',
            'Point of sales app including PPOB services for small/medium grocery stores (toko kelontong).',
            'Built using Yii2 (Back End Side).'
          ]
        },
        {
          title: 'AMR Terpusat',
          images: [
            require('~/assets/img/portfolio/amr-1.png'),
            require('~/assets/img/portfolio/amr-2.png'),
            require('~/assets/img/portfolio/amr-3.png'),
            require('~/assets/img/portfolio/amr-4.png')
          ],
          link: null,
          descriptions: [
            'Automatic Meter Reading application for reading PLN electric stand meters.',
            'Built using Angular (Front End Side).'
          ]
        },
        {
          title: 'HIMIT Web',
          images: [
            require('~/assets/img/portfolio/himit.png')
          ],
          link: 'http://himit.pens.ac.id',
          descriptions: [
            'Official website of Himpunan Mahasiswa Teknik Informatika (HIMIT PENS).',
            'Built using Yii2.',
            'Now they use a new official website and move to https://himitpens.com.'
          ]
        },
        {
          title: 'E-Vote HIMIT',
          images: [],
          link: null,
          descriptions: [
            'Application for public election (PEMILU) of Himpunan Mahasiswa Teknik Informatika (HIMIT PENS).',
            'Built using Laravel.'
          ]
        },
        {
          title: 'PertaMagz',
          images: [
            require('~/assets/img/portfolio/pertamagz-1.png'),
            require('~/assets/img/portfolio/pertamagz-2.png')
          ],
          link: 'https://github.com/faizalami/pertamagz',
          descriptions: [
            'Digital magazine made for a competition when I was in vocational high school.',
            'Built using jQuery and some old js plugins.',
            'The magazine\'s contents are about school\'s profile, some creative industry in Mojokerto, and some technology articles.'
          ]
        },
        {
          title: 'My Repository',
          images: [
            require('~/assets/img/portfolio/repo.png')
          ],
          link: 'https://github.com/faizalami?tab=repositories',
          descriptions: [
            'My Github repositories.'
          ]
        }
      ],
      showImage: false,
      images: []
    }
  },
  methods: {
    showImages (images) {
      this.images = images
      this.showImage = true
    }
  }
}
</script>

<style scoped>
#portfolio .title {
  background: rgba(0, 0, 0, 0.5);
  min-height: 150px;
}

#portfolio .image {
  height: 150px;
}
</style>
