<template>
  <div
    :class="['FullScreenDropArea', { 'FullScreenDropArea--active': isDragActive }]"
    v-bind="getCustomRootProps()"
  >
    <input v-bind="getInputProps()" />

    <Heading level="1">Drop your files here</Heading>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useDropzone } from 'vue3-dropzone'
// import type { FileUploadOptions } from 'vue3-dropzone/dist/useDropzone'

import { FILE_MAX_SIZE } from '@/modules/file/constants'

import { Heading } from '@/components/Heading'
import { FileRejection } from '@/modules/file'

export default defineComponent({
  name: 'FullScreenDropArea',
  components: { Heading },
  setup() {
    const {
      getRootProps,
      getInputProps,
      isDragActive,
      // @ts-expect-error missing types
    } = useDropzone({ maxSize: FILE_MAX_SIZE, onDrop })

    function getCustomRootProps() {
      const { onDragenter, onDragover, onDragleave, onDrop, ref, tabIndex } = getRootProps()

      return {
        onDragenter,
        onDragover,
        onDragleave,
        onDrop,
        ref,
        tabIndex,
      }
    }

    function onDrop(acceptedFiles: File[], rejectedFiles: FileRejection[]) {
      console.log({ acceptedFiles, rejectedFiles })
    }

    return { getCustomRootProps, getInputProps, isDragActive }
  },
})
</script>

<style lang="scss" scoped>
.FullScreenDropArea {
  // pointer-events: none;
  position: fixed;
  top: 50%;
  left: 50%;
  width: calc(100% - (#{rem(24px)} * 2));
  height: calc(100% - (#{rem(24px)} * 2));
  transform: translate(-50%, -50%);
  display: grid;
  place-items: center;
  padding: rem(24px);
  text-align: center;
  border-radius: 20px;
  background: var(--concept-primary-color);
  border: 2px dashed var(--concept-text-primary);
  transition: opacity 200ms ease;
  opacity: 0;
  user-select: none;

  &--active {
    opacity: 1;
  }
}
</style>
