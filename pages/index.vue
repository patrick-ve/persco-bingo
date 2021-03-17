<template>
  <main class="container">
    <div class="container__canvas"></div>
    <div class="container__grid">
      <div class="container__wappie container__wappie--haga js-wappie"></div>
      <div class="container__wappie container__wappie--engel js-wappie"></div>
      <div class="container__wappie container__wappie--jayjay js-wappie"></div>
      <div class="container__wappie container__wappie--jensen js-wappie"></div>
      <div class="container__wappie container__wappie--baudet js-wappie"></div>
      <div class="container__wappie container__wappie--ossenbaard"></div>
      <div class="container__wappie container__wappie--tinus"></div>
      <div class="container__wappie container__wappie--frans js-wappie"></div>

      <span class="container__wap js-wap">WAP<em>PIE</em></span>
      <span class="container__pie js-pie">PIE</span>
      <span class="container__bingo js-bingo">BINGO</span>
      <button
        v-for="item in items"
        :key="item.id"
        :class="{ 'text-large': item.bigSize }"
        class="container__item"
        @click="
          item.pressed = !item.pressed
          audioHandler(item)
        "
      >
        <p>{{ item.description }}</p>
        <transition
          :css="false"
          @before-enter="beforeEnterAnimation"
          @enter="enterAnimation"
          @leave="leaveAnimation"
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
    <audio class="js-audio" src="feesboek.mp3"></audio>
    <audio class="js-circus" src="circus_theme.mp3"></audio>
  </main>
</template>

<script>
import { gsap } from 'gsap'
import confetti from 'canvas-confetti'

export default {
  data() {
    return {
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

  mounted() {
    this.loadingAnimationHandler()
  },

  methods: {
    beforeEnterAnimation(el) {
      gsap.set(el, { autoAlpha: 0 })
    },

    enterAnimation(el, done) {
      gsap.to(el, {
        autoAlpha: 1,
        ease: 'back',
        duration: 1.2,
        onComplete: done,
      })
    },

    leaveAnimation(el, done) {
      gsap.to(el, {
        autoAlpha: 0,
        ease: 'back',
        duration: 1.2,
        onComplete: done,
      })
    },

    loadingAnimationHandler() {
      const wap = this.$el.querySelector('.js-wap')
      const pie = this.$el.querySelector('.js-pie')
      const bingo = this.$el.querySelector('.js-bingo')

      gsap.to([wap, pie], {
        autoAlpha: 1,
        yPercent: -115,
        stagger: 0.5,
        ease: 'expo.inOut',
        delay: 0.8,
      })

      gsap.fromTo(
        bingo,
        {
          // letterSpacing: '1px',
          autoAlpha: 0,
        },
        {
          // letterSpacing: '88px',
          autoAlpha: 1,
          duration: 2,
          delay: 1.7,
          ease: 'expo.inOut',
        }
      )
    },

    audioHandler(item) {
      item.pressed ? this.counter++ : this.counter--

      if (item.reset) {
        this.counter = 0

        this.items.forEach((item) => {
          item.pressed = false
        })

        const cirusTheme = this.$el.querySelector('.js-circus')
        cirusTheme.pause()
      }

      const audioEffects = gsap.utils.toArray('.js-audio')
      const randomAudio =
        audioEffects[Math.floor(Math.random() * audioEffects.length)]

      randomAudio.play()

      if (this.counter === 5) {
        const bingo = this.$el.querySelector('.js-bingo')
        bingo.textContent = '   5G'
        gsap.to(bingo, { xPercent: 40 })
      }

      if (this.counter === 24) {
        // Create canvas and handle confetti
        const canvas = document.createElement('canvas')
        const container = document.querySelector('.container__canvas')
        container.appendChild(canvas)
        this.duration = Date.now() + 10 * 1000
        this.confettiHandler()

        // Clown theme starts here
        const cirusTheme = this.$el.querySelector('.js-circus')
        cirusTheme.currentTime = 0
        cirusTheme.play()

        // Handle animations
        gsap.fromTo(
          '.js-wappie',
          {
            y: () => gsap.utils.random(-10, -5),
            rotate: () => gsap.utils.random(-4, -2),
          },
          {
            y: () => gsap.utils.random(5, 10),
            rotate: () => gsap.utils.random(2, 4),
            repeat: -1,
            yoyo: true,
            duration: () => gsap.utils.random(0.4, 1),
            stagger: 0.1,
            ease: 'bounce.out',
          }
        )
      }
    },

    confettiHandler() {
      const colors = ['#bb0000', '#ffff00', '#0000ff']
      const end = Date.now() + 30 * 1000

      ;(function animate() {
        confetti({
          particleCount: 2,
          angle: 60,
          spread: 69,
          origin: { x: 0 },
          colors,
        })
        confetti({
          particleCount: 2,
          angle: 120,
          spread: 69,
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
@mixin phone {
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    @content;
  }
}

main {
  cursor: url('/illuminati_cursor.png') !important;
}

.container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: red;
  display: grid;
  place-items: center;
  background-image: url('~assets/images/WappieBingo.jpg');
  background-size: cover;
  background-repeat: no-repeat;

  @include phone {
    overflow: visible;
    overflow-x: hidden;
    background-size: contain;
  }

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
    left: 12.5%;
    top: 0;
    font-size: 5rem;
    letter-spacing: 12px;
    color: red;
    opacity: 0;
    visibility: hidden;

    & em {
      display: none;

      @include phone {
        display: inline;
        font-style: normal;
        font-weight: bold;
      }
    }

    @include phone {
      left: 0;
      top: 5vh;
      font-size: 3rem;
      width: 100vw;
      font-weight: bold;
    }
  }

  &__pie {
    position: absolute;
    right: 14.5%;
    top: 0;
    font-size: 5rem;
    letter-spacing: 12px;
    color: red;
    opacity: 0;
    visibility: hidden;

    @include phone {
      display: none;
    }
  }

  &__bingo {
    position: absolute;
    left: 57.5%;
    top: 106%;
    transform: translate(-50%, -50%);
    font-size: 5rem;
    letter-spacing: 88px;
    opacity: 0;
    visibility: hidden;
    color: red;
    z-index: 10;

    @include phone {
      left: 0;
      top: 5vh;
      transform: translate(0, 0);
      font-size: 3rem;
      letter-spacing: 12px;
      width: 100vw;
      pointer-events: none;
      font-weight: bold;
    }
  }

  &__wappie {
    position: absolute;
    width: 15vw;
    height: 15vw;
    background-size: cover;
    z-index: -5;

    &--jayjay {
      left: -17.5%;
      top: -15%;
      background-image: url('~assets/images/Tisjeboy.png');

      @include phone {
        width: 40vw;
        height: 40vw;
        left: 40vw;
        top: 17.5%;
        transform: rotate(30deg);
      }
    }

    &--jensen {
      left: 50%;
      top: -15%;
      transform: translate(-50%, 15%);
      height: 7.5vw;
      width: 15vw;
      background-image: url('~assets/images/Robert_Jensen.png');

      @include phone {
        width: 40vw;
        height: 25vw;
        left: 30vw;
        top: 25vh;
        transform: translate(0, 0);
      }
    }

    &--baudet {
      right: -15%;
      top: -15%;
      background-image: url('~assets/images/Thierry_Bidet.png');

      @include phone {
        left: 45vw;
        top: 22.5vh;
        width: 40vw;
        height: 40vw;
        transform: rotate(-30deg);
      }
    }

    &--ossenbaard {
      right: -15%;
      top: 30%;
      background-image: url('~assets/images/Janet_Ossebaard.png');

      @include phone {
        left: 55vw;
        top: 17.5vh;
        width: 50vw;
        height: 50vw;
        transform: rotate(-30deg);
      }
    }

    &--engel {
      right: -20%;
      bottom: -15%;
      height: 10vw;
      width: 15vw;
      background-image: url('~assets/images/Villain_Engel.png');

      @include phone {
        right: 30%;
        top: 10%;
        width: 70vw;
        height: 50vw;
      }
    }

    &--haga {
      left: 47.5%;
      bottom: -12.5%;
      transform: translate(-47.5%, 12.5%);
      height: 7.5vw;
      width: 15vw;
      background-image: url('~assets/images/Wybren_van_Haga.png');

      @include phone {
        right: 67.5%;
        top: 16.5%;
        width: 35vw;
        height: 25vw;
      }
    }

    &--frans {
      left: -22.5%;
      bottom: -15%;
      background-image: url('~assets/images/Lamme_Frans.png');

      @include phone {
        left: 0%;
        top: 18.5%;
        width: 40vw;
        height: 40vw;
      }
    }

    &--tinus {
      left: -15%;
      top: 30%;
      background-image: url('~assets/images/Staatsmongool_Tinus.png');

      @include phone {
        left: 5%;
        top: 20%;
        width: 40vw;
        height: 40vw;
        transform: rotate(60deg);
      }
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
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    width: 80vh;
    height: 80vh;
    text-align: center;
    z-index: 20;

    @include phone {
      padding-top: 35vh;
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(1fr);
    }

    &::before {
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      border: 7px solid red;
      z-index: 50;
      pointer-events: none;

      @include phone {
        display: none;
      }
    }
  }

  &__item {
    background-color: white;
    color: black;
    border: 2px solid black;
    font-size: 1.25vw;
    position: relative;
    font-weight: regular;
    width: calc(80vh / 5);
    height: calc(80vh / 5);
    cursor: pointer;
    overflow-wrap: break-word;

    @include phone {
      min-height: 20vh;
      width: 100vw;
      font-size: 6.5vw;
    }

    & p {
      font-size: 1.25rem;
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
      color: red;
      font-size: 5rem;
    }
  }
}

.text-large {
  font-size: 1.75rem;

  & p {
    font-size: 1.75rem;
  }

  @include phone {
    font-size: 10vw;
  }
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

// @media (min-width: 320px) and (max-width: 480px) {
//   .container {
//     overflow: initial;
//   }
// }
// .container__grid {
//   padding-top: 50vh;
//   grid-template-columns: repeat(1, 1fr);
//   grid-template-rows: repeat(1fr);
// }

// .container__item {
//   min-height: 20vh;
//   width: 100vw;
// }
</style>
