const Image = require('@11ty/eleventy-img')
const { watch, existsSync } = require('node:fs')
const { readdir } = require('node:fs/promises')
const { parse } = require('node:path')

const imageDir = './src/assets'
const imageFormats = ['.jpg', '.jpeg', '.png'] // all the image formats to optimize

async function optimizeImage(file) {
  const imgWidths = [1000]
  const outputDir = `${imageDir}/optimized`
  await Image(`${imageDir}/${file}`, {
    widths: imgWidths,
    formats: ['avif', 'webp', 'jpeg'],
    outputDir,
    filenameFormat: (id, src, width, format) => `${parse(file).name}-${width}.${format}`,
  })
}

async function run() {
  const files = await readdir(imageDir)
  for (const file of files) {
    const fileExtension = parse(file).ext.toLowerCase()
    if (imageFormats.includes(fileExtension)) await optimizeImage(file)
  }
}

run()

// in development, let's watch for any new image files in our assets directory
if (process.env.NODE_ENV !== 'production') {
  watch(imageDir, async (event, file) => {
    const fileExtension = parse(file).ext.toLowerCase()
    const fileWasNotDeleted = existsSync(`${imageDir}/${file}`) // the watcher fires for file deletion events too, need to filter those out
    if (imageFormats.includes(fileExtension) && fileWasNotDeleted) await optimizeImage(file)
  })
}
