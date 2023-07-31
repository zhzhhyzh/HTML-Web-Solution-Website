const wrapper = document.querySelector('.wrapper')

let activeIndex = null;

const updateContentHeight = (contentWrapper, isOpen) => {
  if (isOpen) {
    // close previous
    if (activeIndex !== null) {
      const prev = wrapper.querySelector(`.item-title[data-index="${activeIndex}"]`)
      prev.nextElementSibling.style.height = 0
    }
    
    // open new
    const contentDom = contentWrapper.querySelector('.content')
    const contentHeight = contentDom.clientHeight
    contentWrapper.style.height = contentHeight + 'px'
  } else {
    contentWrapper.style.height = 0
  }
}

const updateActiveIndex = (newIndex) => {
  const oldIndex = activeIndex
  activeIndex = newIndex
  // update class
  if (oldIndex !== null) {
    const dom = wrapper.querySelector(`.item-title[data-index="${oldIndex}"]`)
    dom.parentElement.classList.remove('active')
  }
  if (newIndex !== null) {
    const dom = wrapper.querySelector(`.item-title[data-index="${newIndex}"]`)
    dom.parentElement.classList.add('active')
  }
}

wrapper.addEventListener('click', (e) => {
  const isTitle = Array.from(e.target.classList).includes('item-title')
  if (!isTitle) return
  
  const targetIndex = Number(e.target.getAttribute('data-index'))
  const contentWrapper = e.target.nextElementSibling
  const isOpen = targetIndex !== activeIndex
  updateContentHeight(contentWrapper, isOpen)
  updateActiveIndex(isOpen ? targetIndex : null)
})

window.addEventListener('resize', async () => {
  if (activeIndex !== null) {
    await new Promise(resolve => setTimeout(resolve, 500))
    const titleDom = wrapper.querySelector(`.item-title[data-index="${activeIndex}"]`)
    const contentWrapper = titleDom.nextElementSibling
    const contentDom = contentWrapper.querySelector('.content')
    const contentHeight = contentDom.clientHeight
    contentWrapper.style.height = contentHeight + 'px'
  }
})