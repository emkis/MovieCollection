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

      <Text class="MovieDetail__about">
        <Text as="span">{{ '2018' }}</Text>
        <Text as="span">{{ ' • ' }}</Text>
        <Text as="span">{{ 'Action, Comedy' }}</Text>
        <Text as="span">{{ ' • ' }}</Text>
        <Text as="span">{{ '2h 35min' }}</Text>
      </Text>

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

    <section class="MovieDetail__reviews"></section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { usePageTitle } from '@/hooks/page-title'
import { EThemeColors } from '@/services/theme'

import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'
import { IconHeart } from '@/components/Icons'

export default defineComponent({
  name: 'MovieDetail',
  components: { Heading, Text, IconHeart },
  setup() {
    const { setTitle } = usePageTitle()

    setTitle('Movie') // TODO: add movie name

    return { EThemeColors }
  },
})
</script>

<style lang="scss" scoped>
.MovieDetail {
  $poster-height: 40vh;

  position: relative;
  max-width: 768px;
  margin: 0 auto;
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
}
</style>
