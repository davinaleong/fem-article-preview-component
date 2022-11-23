console.log(`main.js loaded`)

const invertedAttr = `data-inverted`
const openAttr = `data-open`

const btnShareEl = document.querySelector(`[data-element="btn-share"]`)
const cardFooterShareEl = document.querySelector(
  `[data-element="card-footer-share"]`
)

btnShareEl.addEventListener(`click`, (e) => {
  e.target.toggleAttribute(invertedAttr)
  cardFooterShareEl.toggleAttribute(openAttr)
})
