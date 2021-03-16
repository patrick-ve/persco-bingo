<template>
  <main class="container">
    <span class="container__wap">WAP</span>
    <span class="container__pie">PIE</span>
    <span class="container__bingo">BINGO</span>

    <div class="container__canvas"></div>

    <div class="container__wappie container__wappie--jayjay js-jayjay"></div>
    <div class="container__wappie container__wappie--jensen js-jensen"></div>
    <div class="container__wappie container__wappie--baudet js-baudet"></div>
    <div
      class="container__wappie container__wappie--ossenbaard js-ossenbaard"
    ></div>
    <div class="container__wappie container__wappie--engel js-engel"></div>
    <div class="container__wappie container__wappie--haga js-haga"></div>
    <div class="container__wappie container__wappie--frans js-frans"></div>
    <div class="container__wappie container__wappie--tinus js-tinus"></div>

    <div class="container__grid">
      <button
        v-for="item in items"
        :key="item.id"
        :class="{ 'text-large': item.bigSize }"
        class="container__item"
        @click="
          item.pressed = true
          audioHandler(item)
        "
      >
        <p>{{ item.description }}</p>
        <transition
          :css="false"
          @before-enter="beforeEnterAnimation"
          @enter="enterAnimation"
        >
          <span
            v-if="item.pressed"
            :style="
              'transform: translate(-50%, -50%) ' +
              'rotate(' +
              item.rotation +
              'deg)'
            "
            >X</span
          >
        </transition>
      </button>
    </div>

    <audio class="js-audio" src="baby_cry.mp3"></audio>
    <audio class="js-audio" src="buzzer.mp3"></audio>
    <audio class="js-audio" src="fart.mp3"></audio>
    <audio class="js-audio" src="x-files-theme.mp3"></audio>
    <audio class="js-audio" src="clown_horn.mp3"></audio>
    <audio class="js-circus" src="circus_theme.mp3"></audio>
  </main>
</template>

<script>
import { gsap } from 'gsap'
import confetti from 'canvas-confetti'

export default {
  data() {
    return {
      AUDIO_ALLOWED: true,
      counter: 0,
      duration: null,
      items: [
        {
          description: '"...op persoonlijke titel"',
          pressed: false,
          rotation: Math.floor(Math.random() * 359) + 1,
        },
        {
          description: 'Zegt Cojona',
          bigSize: true,
          pressed: false,
          rotation: Math.floor(Math.random() * 359) + 1,
        },
        {
          description: 'Noemt zichzelf strijder',
          bigSize: true,
          pressed: false,
          rotation: Math.floor(Math.random() * 359) + 1,
        },
        {
          description: 'Gejank over fraude',
          bigSize: true,
          pressed: false,
          rotation: Math.floor(Math.random() * 359) + 1,
        },
        {
          description: 'Noemt alles fascist of communist',
          pressed: false,
          rotation: Math.floor(Math.random() * 359) + 1,
        },
        {
          description: 'DoE eIgEn OnDeRzOeK',
          pressed: false,
          rotation: Math.floor(Math.random() * 359) + 1,
        },
        {
          description: 'Er is geen oversterfte',
          pressed: false,
          rotation: Math.floor(Math.random() * 359) + 1,
        },
        {
          description: 'Ivermectine, Remdesvir, HCQ',
          pressed: false,
          rotation: Math.floor(Math.random() * 359) + 1,
        },
        {
          description: 'Big Pharma',
          bigSize: true,
          pressed: false,
          rotation: Math.floor(Math.random() * 359) + 1,
        },
        {
          description: 'Vaccin voorkomt geen besmetting',
          pressed: false,
          rotation: Math.floor(Math.random() * 359) + 1,
        },
        {
          description: 'DICTATUUR',
          pressed: false,
          rotation: Math.floor(Math.random() * 359) + 1,
        },
        {
          description: 'Mondluier',
          pressed: false,
          rotation: Math.floor(Math.random() * 359) + 1,
        },
        {
          description: 'SCHAAP!',
          pressed: false,
          rotation: Math.floor(Math.random() * 359) + 1,
        },
        {
          description: 'TRIBUNAAL!!!',
          pressed: false,
          rotation: Math.floor(Math.random() * 359) + 1,
        },
        {
          description: 'vaccin = gentherapie',
          pressed: false,
          rotation: Math.floor(Math.random() * 359) + 1,
        },
        {
          description: 'Angstvirus of Psychose',
          pressed: false,
          rotation: Math.floor(Math.random() * 359) + 1,
        },
        {
          description: 'Great Reset',
          bigSize: true,
          pressed: false,
          rotation: Math.floor(Math.random() * 359) + 1,
          reset: true,
        },
        {
          description: 'MEDIA = VIRUS',
          bigSize: true,
          pressed: false,
          rotation: Math.floor(Math.random() * 359) + 1,
        },
        {
          description: 'Nee, jij bent de echte wappie',
          pressed: false,
          rotation: Math.floor(Math.random() * 359) + 1,
        },
        {
          description: 'Soros',
          bigSize: true,
          pressed: false,
          rotation: Math.floor(Math.random() * 359) + 1,
        },
        {
          description: '"Met of aan corona?!!"',
          pressed: false,
          rotation: Math.floor(Math.random() * 359) + 1,
        },
        {
          description: '#StemZeWeg',
          pressed: false,
          rotation: Math.floor(Math.random() * 359) + 1,
        },
        {
          description: 'Gejank over de (r)overheid',
          pressed: false,
          rotation: Math.floor(Math.random() * 359) + 1,
        },
        {
          description: '"Het is maar een griepje"',
          pressed: false,
          rotation: Math.floor(Math.random() * 359) + 1,
        },
        {
          description: 'SLAAP LEKKER/ FIJNE DAG',
          pressed: false,
          rotation: Math.floor(Math.random() * 359) + 1,
        },
      ],
    }
  },

  methods: {
    beforeEnterAnimation(el) {
      gsap.set(el, { autoAlpha: 0 })
    },

    enterAnimation(el, done) {
      gsap.to(el, { autoAlpha: 1, ease: 'back', duration: 1.2 })
      done()
    },

    audioHandler(item) {
      this.counter++

      if (item.reset) {
        this.counter = 0

        const canvas = document.querySelector('canvas')
        canvas.remove()

        this.items.forEach((item) => {
          item.pressed = false
        })
      }

      const audioEffects = gsap.utils.toArray('.js-audio')
      const randomAudio =
        audioEffects[Math.floor(Math.random() * audioEffects.length)]

      randomAudio.play()

      if (this.counter === 24) {
        const canvas = document.createElement('canvas')
        const container = document.querySelector('.container__canvas')
        container.appendChild(canvas)
        this.duration = Date.now() + 10 * 1000
        this.confettiHandler()

        const cirusTheme = this.$el.querySelector('.js-circus')
        cirusTheme.play()
      }
    },

    confettiHandler() {
      const colors = ['#bb0000', '#ffff00', '#0000ff']
      const end = Date.now() + 10 * 1000

      ;(function animate() {
        confetti({
          particleCount: 2,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors,
        })
        confetti({
          particleCount: 2,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors,
        })

        if (Date.now() < end) {
          requestAnimationFrame(animate)
        }
      })()
    },

    animationHandler() {
      const deviceWidth = window.innerWidth
      if (deviceWidth < 480) return

      const target = this.$el.querySelector('.js-animation')
      const tl = gsap.timeline()

      tl.to(target, { yPercent: -50 }).to(target, { yPercent: 0, delay: 5 })
    },
  },
}
</script>

<style lang="scss" scoped>
$color-red: #721817;
$color-yellow: #fa9f42;
$color-blue: #2b4162;
$color-green: #0b6e4f;
$color-white: #e0e0e2;

.container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: $color-yellow;
  display: grid;
  place-items: center;
  background-image: url('~assets/images/WappieBingo.jpg');
  background-size: cover;
  background-repeat: no-repeat;

  &__canvas {
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: -10;
  }

  &__wap {
    position: absolute;
    left: 32.5vw;
    top: 1.25vh;
    font-size: 5rem;
    letter-spacing: 12px;
    color: red;
  }

  &__pie {
    position: absolute;
    right: 35vw;
    top: 1.25vh;
    font-size: 5rem;
    letter-spacing: 12px;
    color: red;
  }

  &__bingo {
    position: absolute;
    bottom: 1vh;
    left: 56.5%;
    transform: translate(-56.5%);
    font-size: 5rem;
    letter-spacing: 72px;
    color: red;
    z-index: 10;
  }

  &__wappie {
    position: absolute;
    width: 15vw;
    height: 15vw;
    background-size: cover;

    &--jayjay {
      left: 20vw;
      top: 0;
      background-image: url('~assets/images/Tisjeboy.png');
    }

    &--jensen {
      left: 42.5vw;
      top: 0;
      height: 7.5vw;
      width: 15vw;
      background-image: url('~assets/images/Robert_Jensen.png');
    }

    &--baudet {
      right: 22.5vw;
      top: 0;
      background-image: url('~assets/images/Thierry_Bidet.png');
    }

    &--ossenbaard {
      right: 21.5vw;
      top: 30vh;
      background-image: url('~assets/images/Janet_Ossebaard.png');
    }

    &--engel {
      right: 20.5vw;
      bottom: 0;
      height: 10vw;
      width: 15vw;
      background-image: url('~assets/images/Villain_Engel.png');
    }

    &--haga {
      right: 42.5vw;
      bottom: 0;
      height: 7.5vw;
      width: 15vw;
      background-image: url('~assets/images/Wybren_van_Haga.png');
    }

    &--frans {
      left: 20vw;
      bottom: 0;
      background-image: url('~assets/images/Lamme_Frans.png');
    }

    &--tinus {
      left: 21vw;
      bottom: 35vh;
      background-image: url('~assets/images/Staatsmongool_Tinus.png');
    }
  }

  &__heading {
    color: white;
    font-size: 3rem;
    width: 100vw;
    height: 20vh;
    display: grid;
    place-items: center;
  }

  &__letter {
    display: grid;
    place-items: center;
    color: white;
    border: 3px solid black;
    font-size: 2rem;
  }

  &__grid {
    position: relative;
    z-index: 2;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    width: 45vw;
    height: 45vw;
    text-align: center;
    border: 7px solid red;
  }

  &__item {
    background-color: white;
    color: black;
    border: 2px solid black;
    font-size: 1.25rem;
    cursor: pointer;
    position: relative;
    font-weight: regular;

    & p {
      display: block;
      margin: 0 auto;
      padding-left: 0.45rem;
      padding-right: 0.45rem;
      width: 100%;
      text-align: center;
    }

    & span {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      color: $color-red;
      font-size: 5rem;
    }
  }
}

.text-large {
  font-size: 2.25rem;
}

button {
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  background: transparent;

  /* inherit font & color from ancestor */
  color: inherit;
  font: inherit;

  /* Normalize `line-height`. Cannot be changed from `normal` in Firefox 4+. */
  line-height: normal;

  /* Corrects font smoothing for webkit */
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;

  /* Corrects inability to style clickable `input` types in iOS */
  -webkit-appearance: none;
}

button:focus {
  outline: none;
}

@media (min-width: 320px) and (max-width: 480px) {
  .container__grid {
    padding-top: 50vh;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1fr);
  }

  .container__item {
    min-height: 20vh;
  }

  .container__rutte {
    bottom: 50vh;
    left: -25vw;
    transform: scale(0.7);
  }

  .container__logo::after {
    font-size: 1rem;
    width: 30vw;
  }

  .container__video {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
