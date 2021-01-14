<template>
  <main class="container">
    <div class="container__logo">
      <img
        src="https://www.rivm.nl/themes/custom/sdv_theme/logo.svg"
        alt="Niet het logo van het RIVM"
      />
    </div>
    <div class="container__rutte js-animation">
      <img src="@/assets/images/mark_rutte.png" alt="DE MARK" />
    </div>
    <div class="container__video">
      <video src="@/assets/images/video.mp4"></video>
    </div>
    <div class="container__grid">
      <div
        v-for="letter in title"
        :key="letter.id"
        class="container__letter"
        :class="letter"
      >
        {{ letter }}
      </div>
      <button
        v-for="item in items"
        :key="item.id"
        class="container__item"
        @click="
          item.pressed = true
          playAudio()
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

    <audio src="buzzer.mp3"></audio>
  </main>
</template>

<script>
import { gsap } from 'gsap'

export default {
  data() {
    return {
      AUDIO_ALLOWED: true,
      counter: 0,
      title: ['B', 'I', 'N', 'G', 'O'],
      items: [
        {
          description: 'Gejank over vaccins',
          pressed: false,
          rotation: Math.floor(Math.random() * 359) + 1,
        },
        {
          description: 'Angstporno',
          pressed: false,
          rotation: Math.floor(Math.random() * 359) + 1,
        },
        {
          description: 'Ontwijkt als je om de bron vraagt',
          pressed: false,
          rotation: Math.floor(Math.random() * 359) + 1,
        },
        {
          description: 'begrijpt het concept van vvmu niet',
          pressed: false,
          rotation: Math.floor(Math.random() * 359) + 1,
        },
        {
          description: '"Ik stel alleen maar vragen"',
          pressed: false,
          rotation: Math.floor(Math.random() * 359) + 1,
        },
        {
          description: 'Ad hominem',
          pressed: false,
          rotation: Math.floor(Math.random() * 359) + 1,
        },
        {
          description: 'doe je eigen onderzoek',
          pressed: false,
          rotation: Math.floor(Math.random() * 359) + 1,
        },
        {
          description: 'Gejank over Antifa/BLM',
          pressed: false,
          rotation: Math.floor(Math.random() * 359) + 1,
        },
        {
          description: 'Gejank over de NWO',
          pressed: false,
          rotation: Math.floor(Math.random() * 359) + 1,
        },
        {
          description: '"Ik heb wel wat beters te doen. Fijne avond verder"',
          pressed: false,
          rotation: Math.floor(Math.random() * 359) + 1,
        },
        {
          description: '"Neem dat prikkie lekker"',
          pressed: false,
          rotation: Math.floor(Math.random() * 359) + 1,
        },
        {
          description: 'Gebruikt communisme als algemeen scheldwoord',
          pressed: false,
          rotation: Math.floor(Math.random() * 359) + 1,
        },
        {
          description: 'SCHAAP!!1',
          pressed: false,
          rotation: Math.floor(Math.random() * 359) + 1,
        },
        {
          description: '"Trump kan nog steeds winnen"',
          pressed: false,
          rotation: Math.floor(Math.random() * 359) + 1,
        },
        {
          description: '"deze huisarts zegt..."',
          pressed: false,
          rotation: Math.floor(Math.random() * 359) + 1,
        },
        {
          description: 'Link naar NineForNews/Bataafse Courant/Random blogje',
          pressed: false,
          rotation: Math.floor(Math.random() * 359) + 1,
        },
        {
          description: 'Gejank over censuur',
          pressed: false,
          rotation: Math.floor(Math.random() * 359) + 1,
        },
        {
          description: 'Great Reset',
          pressed: false,
          rotation: Math.floor(Math.random() * 359) + 1,
        },
        {
          description: 'Wacht maar/we gaan het zien',
          pressed: false,
          rotation: Math.floor(Math.random() * 359) + 1,
        },
        {
          description: '"Krijg je betaald om te tweeten?"',
          pressed: false,
          rotation: Math.floor(Math.random() * 359) + 1,
        },
        {
          description: 'Agenda 21/30',
          pressed: false,
          rotation: Math.floor(Math.random() * 359) + 1,
        },
        {
          description: '#OPRUTTE',
          pressed: false,
          rotation: Math.floor(Math.random() * 359) + 1,
        },
        {
          description: 'Zegt geen MSM te volgen, comment onder elk NOS-artikel',
          pressed: false,
          rotation: Math.floor(Math.random() * 359) + 1,
        },
        {
          description: 'mondluier',
          pressed: false,
          rotation: Math.floor(Math.random() * 359) + 1,
        },
        {
          description: 'VOLKSOPSTAND',
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

    playAudio() {
      this.counter++
      const audio = document.querySelector('audio')
      if (this.AUDIO_ALLOWED) {
        audio.play()
      } else {
        return
      }

      if (this.counter === 8) {
        const bingoLetter = this.$el.querySelector('.O')
        bingoLetter.textContent = ''
        bingoLetter.style.backgroundSize = 'cover'
        bingoLetter.style.backgroundPosition = 'center'
        bingoLetter.style.backgroundImage =
          "url('https://www.vkmag.com/images/vk_thumbs/79041/thumb_fl_remix__vk_thumb_item.jpg')"
      }

      if (this.counter === 12) {
        this.animationHandler()
      }

      if (this.counter === 25) {
        const videoContainer = this.$el.querySelector('.container__video')
        const video = videoContainer.querySelector('video')
        gsap.set(videoContainer, { autoAlpha: 1 })
        video.play()
      }

      if (this.counter === 5) {
        const fifthLetter = this.$el.querySelector(
          '.container__letter:nth-of-type(4)'
        )
        fifthLetter.textContent = '5G'
      }
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
  overflow-x: hidden;
  background-color: $color-yellow;

  &__logo {
    position: absolute;
    top: 0;
    left: 47.5%;

    &::after {
      content: 'De grote Corona Wappie Bingo';
      position: absolute;
      color: white;
      left: 120%;
      top: 20%;
      font-size: 1.5rem;
      width: 20rem;
    }
  }

  &__rutte {
    z-index: 1;
    position: absolute;
    top: 10%;
    left: 20%;
  }

  &__video {
    z-index: 20;
    position: absolute;
    display: grid;
    place-items: center;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    pointer-events: none;
    opacity: 0;

    & video {
      width: 100%;
      height: calc(100% * 16 / 9);
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
    padding-top: 10vh;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(6, 1fr);
    width: 80vw;
    height: 90vh;
    text-align: center;
  }

  &__item {
    background-color: white;
    color: $color-blue;
    border: 3px solid black;
    font-size: 1.25rem;
    cursor: pointer;
    padding: 1rem;
    position: relative;
    font-weight: bold;

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

.B {
  background-color: $color-blue;
}

.I {
  background-color: $color-green;
}

.N {
  background-color: $color-red;
}

.G {
  background-color: purple;
}

.O {
  background-color: rgb(255, 187, 0);
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
