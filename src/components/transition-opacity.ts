import styles from '../styles/transition-opacity.module.css'

export default function transitionOpacity() : string{
    return `<div class=${styles.container}>
    <h2>Transition Opacity</h2>
    <p>Hover over the div element below, to see the transition opacity effect:</p>
    <div></div>
    </div>`
}