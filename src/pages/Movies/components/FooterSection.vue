<template>
  <footer v-once>
    <IconHeart size="30" :color="ThemeColors.geraldine" />
    <Heading level="4">Made with love by Emkis</Heading>
    <div class="links">
      <Text as="span">
        <a href="https://www.linkedin.com/in/nicolas-jardim" target="__blank" rel="noopener">
          Linkedin
        </a>
      </Text>

      <Text as="span">
        <a href="http://github.com/emkis" target="__blank" rel="noopener">GitHub</a>
      </Text>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { ThemeColors } from '@/services/theme'
import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'
import { IconHeart } from '@/components/Icons'
</script>

<style lang="scss" scoped>
footer {
  display: flex;
  gap: $spacing-nano;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.links {
  display: flex;
  justify-content: center;
  gap: $spacing-xs;

  a {
    color: inherit;
    text-decoration: none;
  }
}
</style>
