const $container = document.getElementById('container')
const $pictures = document.querySelector('.pictures')
const imgArr = []

const imagesObject = [
  {
    src: 'images/bacon_bowtie(300).gif',
    large: 'images/bacon_bowtie.gif',
    caption: '(Image from Pexels) Image of a big eyed cat',
    alt: 'Big eyed kitten image',
  },

  {
    src: 'images/broccoli_pasta(300).gif',
    large: 'images/broccoli_pasta.gif',
    caption: '(Image from Pexels) Image of a big eyed cat',
    alt: 'Big eyed kitten image',
  },

  {
    src: 'images/shrimp_pasta(300).gif',
    large: 'images/shrimp_pasta.gif',
    caption: '(Image from Pexels) Image of a big eyed cat',
    alt: 'Big eyed kitten image',
  },

  {
    src: 'images/eggy_ramen(300).gif',
    large: 'images/eggy_ramen.gif',
    caption: '(Image from Pexels) Image of a big eyed cat',
    alt: 'Big eyed kitten image',
  },

  {
    src: 'images/garlic-crab_pasta(300).gif',
    large: 'images/garlic-crab_pasta.gif',
    caption: '(Image from Pexels) Image of a big eyed cat',
    alt: 'Big eyed kitten image',
  },

  {
    src: 'images/green_fettuccine(300).gif',
    large: 'images/green_fettuccine.gif',
    caption: '(Image from Pexels) Image of a big eyed cat',
    alt: 'Big eyed kitten image',
  },

  {
    src: 'images/kraft_dinner(300).gif',
    large: 'images/kraft_dinner.gif',
    caption: '(Image from Pexels) Image of a big eyed cat',
    alt: 'Big eyed kitten image',
  },

  {
    src: 'images/lasagna_pasta(300).gif',
    large: 'images/lasagna_pasta.gif',
    caption: '(Image from Pexels) Image of a big eyed cat',
    alt: 'Big eyed kitten image',
  },

  {
    src: 'images/packet_ramen(300).gif',
    large: 'images/packet_ramen.gif',
    caption: '(Image from Pexels) Image of a big eyed cat',
    alt: 'Big eyed kitten image',
  },

  {
    src: 'images/peanut_udon(300).gif',
    large: 'images/peanut_udon.gif',
    caption: '(Image from Pexels) Image of a big eyed cat',
    alt: 'Big eyed kitten image',
  },

  {
    src: 'images/tomato_pasta(300).gif',
    large: 'images/tomato_pasta.gif',
    caption: '(Image from Pexels) Image of a big eyed cat',
    alt: 'Big eyed kitten image',
  },

  {
    src: 'images/tomato_spagetti(300).gif',
    large: 'images/tomato_spagetti.gif',
    caption: '(Image from Pexels) Image of a big eyed cat',
    alt: 'Big eyed kitten image',
  }
]

for (const imageData of imagesObject) {
  imgArr.push(`<img class="thumb" src="${imageData.src}" alt="${imageData.alt}" data-large="${imageData.large}" data-caption="${imageData.caption}">
  `)
}

$container.innerHTML = imgArr.join('')

$container.addEventListener('click', function (e) {
  const $thumb = e.target.closest('.thumb')
  $pictures.innerHTML = 
    `<img src="${$thumb.dataset.large}">   
    <small>${$thumb.dataset.caption}</small>`
  $pictures.classList.add('show')
})

$pictures.addEventListener('click', function () {
  $pictures.classList.remove('show')
})



