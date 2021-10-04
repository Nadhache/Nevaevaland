// console.log("holi")

const getElement = (selector) => {
  const element = document.querySelector(selector)
  if(element) return getElement
  throw Error(`Please double check your class names, there is no ${selector} class`)
}

const links = getElement(".nav-links")
