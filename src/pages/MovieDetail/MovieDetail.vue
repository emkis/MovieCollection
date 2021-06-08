<template>
  <div class="MovieDetail">
    <div class="MovieDetail__poster">
      <img
        alt="Movie Poster"
        src="https://whatsondisneyplus.com/wp-content/uploads/2021/02/kingsman-secret-service.jpg"
      />
    </div>

    <main class="MovieDetail__presentation">
      <Heading level="2">{{ 'Kingsman: The Secret Service' }}</Heading>

      <MovieInfo
        class="MovieDetail__about"
        year="2018"
        duration="2h 35min"
        :category="['Action', 'Comedy']"
      />

      <Text class="MovieDetail__rating">
        <IconHeart size="30" :color="EThemeColors.geraldine" :key="heart" v-for="heart in 4" />
        <Text as="strong">{{ '79' }}%</Text>
      </Text>

      <Text class="MovieDetail__description">
        In Earth's future, a global crop blight and second Dust Bowl are slowly rendering the planet
        uninhabitable. Professor Brand (Michael Caine), a brilliant NASA physicist, is working on
        plans to save mankind by transporting Earth's population to a new home via a wormhole.
      </Text>
    </main>

    <section>
      <Heading class="MovieDetail__reviews-heading" level="3">Critic Reviews</Heading>

      <ul class="MovieDetail__reviews">
        <li class="MovieDetail__review">
          <Heading level="4">
            <IconHeart size="30" :color="EThemeColors.geraldine" />
            21%
          </Heading>

          <Text>
            With all the rampant think pieces questioning the probability of every science fiction
            film that comes out, it's comforting to across a movie that doesn't really claim to have
            any of the answers.
          </Text>

          <Heading level="5">
            Nicolas Emkis
            <br />
            <span>from <i>New York Times</i></span>
          </Heading>
        </li>

        <li class="MovieDetail__review">
          <Heading level="4">
            <IconHeart size="30" :color="EThemeColors.geraldine" />
            86%
          </Heading>

          <Text> Lorem ipsum dolor sit amet consectetur adipisicing elit. </Text>

          <Heading level="5">
            Nicolas Emkis
            <br />
            <span>from <i>New York Times</i></span>
          </Heading>
        </li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { usePageTitle } from '@/hooks/page-title'
import { EThemeColors } from '@/services/theme'

import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'
import { IconHeart } from '@/components/Icons'
import { MovieInfo } from '@/components/MovieInfo'

export default defineComponent({
  name: 'MovieDetail',
  components: { Heading, Text, IconHeart, MovieInfo },
  setup() {
    const { setTitle } = usePageTitle()

    setTitle('Movie') // TODO: add movie name

    return { EThemeColors }
  },
})
</script>

<style lang="scss" scoped>
.MovieDetail {
  $poster-height: 400px;

  position: relative;
  max-width: 768px;
  margin: 0 auto;
  padding: 0 24px 72px;
  border-radius: $border-radius-m;
  overflow: hidden;

  &__poster {
    position: absolute;
    top: 0;
    left: 0;
    height: $poster-height;
    width: 100%;

    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: linear-gradient(
        180deg,
        rgba(196, 196, 196, 0) 0%,
        rgba(78, 79, 83, 0.688174) 59.56%,
        var(--color-shark) 91.25%
      );
    }
  }

  &__presentation {
    position: relative;
    padding-top: calc(#{$poster-height} - 110px);
    text-align: center;
  }

  &__about {
    display: block;
    margin: rem(24px 0 14px);
  }

  &__rating {
    display: flex;
    justify-content: center;
    align-items: center;

    > strong {
      margin-left: rem(6px);
      color: var(--concept-text-primary);
    }
  }

  &__description {
    text-align: left;
    margin: rem(72px 0 120px);
  }

  &__reviews-heading {
    margin-bottom: rem(24px);
  }

  &__reviews {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;

    @media (min-width: 45em) {
      grid-template-columns: 1fr 1fr;
    }
  }

  &__review {
    display: flex;
    flex-direction: column;
    min-height: rem(320px);
    padding: rem(28px);
    border-radius: $border-radius-m;
    background: var(--concept-over-background);

    > h4 {
      display: flex;
      gap: 10px;
      align-items: center;
    }

    > p {
      margin: rem(24px 0);
    }

    > :last-child {
      margin-top: auto;
    }

    > h5 span {
      font-weight: 700;
      color: var(--concept-text-secondary);
    }
  }
}
</style>
