const logo_itself = document.querySelector('.logo-img')
const arrow_icon = document.querySelector('.searchbar .arrow_icon')
const search_bar = document.querySelector('.searchbar input')
const transition_el = document.querySelector('.transition')

search_bar.addEventListener('focus', () => {
    logo_itself.attributes.src.value = 'img/logoActive.svg'
    arrow_icon.attributes.src.value = 'img/arrowActive.svg'
})

search_bar.addEventListener('focusout', () => {
    logo_itself.attributes.src.value = 'img/logo.svg'
    arrow_icon.attributes.src.value = 'img/arrow.svg'
})

arrow_icon.addEventListener('click', () => {
    transition_el.classList.add('is-active')

    setTimeout(() => {
        window.location.href = `https://duckduckgo.com/${search_bar.value}`
    },600)
})

search_bar.addEventListener('keypress', (e) => {
    if(e.key == 'Enter'){
        transition_el.classList.add('is-active')

        setTimeout(() => {
            window.location.href = `https://duckduckgo.com/${search_bar.value}`
        },600)
    }
})