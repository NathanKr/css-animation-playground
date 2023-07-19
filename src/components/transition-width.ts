import styles from '../styles/transition-width.module.css'

export default function transitionWidth() : string{
    return `<div class=${styles.container}>
    <h2>Transition Width</h2>
    <p>Hover over the div element below, to see the transition width effect:</p>
    <div></div>
    </div>`
}