const getSlides = (pathname) => {
  let slides = [];
  switch (pathname) {
    case '/servicios':
      for(let i = 1; i < 10; i++) {
        slides.push({
          slide: `/slider/servicios/${i}.jpg`,
          link: ''
        })
      }
    break;
    default:
      for(let i = 1; i < 4; i++) {
        slides.push({
          slide: `/slider/home/${i}.jpg`,
          link: ''
        })
      }
      break;
  }

  return slides;
}

export {
  getSlides
}