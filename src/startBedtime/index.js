import { expandSleepOptions } from '../../modules/buttonEvents.js'

const expandButton = document.getElementById('expand-button')
const sleepOptionsElement = document.getElementById('sleep-options')

expandButton.addEventListener('click', () => {
    expandSleepOptions(sleepOptionsElement, expandButton)
})