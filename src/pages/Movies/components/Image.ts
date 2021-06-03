import { defineComponent, h } from 'vue'

function imageFetcher(imageSource: string) {
  const image = new window.Image()

  return new Promise((resolve, reject) => {
    image.onload = () => resolve(imageSource)
    image.onerror = (error) => reject(error)
    image.src = imageSource
  })
}

export const Image = defineComponent({
  name: 'Image',
  props: {
    src: { type: String, required: true },
    alt: { type: String, required: true },
  },
  async setup(props) {
    await imageFetcher(props.src)

    return () => h('img', { ...props })
  },
})
