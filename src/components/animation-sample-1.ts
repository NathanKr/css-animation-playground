import styles from '../styles/animation-sample-1.module.css'

export default function AnimationSample1() : string{
    return `<div class=${styles.container}>
    <h2>Animation Sample 1</h2>
    <p>Refresh to see the one phase 0->100 animation background color effect</p>
    <div></div>
    </div>`
}