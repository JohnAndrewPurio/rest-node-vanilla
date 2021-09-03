export function startBedtime(event) {
    console.log(event.target)
}

export function expandSleepOptions(sleepOptionsElement, expandButton) {
    const buttonStyle = expandButton.style
    const style = sleepOptionsElement.style

    if(!style.transform) {
        buttonStyle.transform = "rotateZ(180deg)"
        style.transform = "translateY(-95%)"

        return
    }

    buttonStyle.transform = "rotateZ(0deg)"
    style.transform = ""
}