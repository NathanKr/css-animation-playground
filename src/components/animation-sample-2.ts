import styles from '../styles/animation-sample-2.module.css'

export default function AnimationSample2() : string{
    return `<div class=${styles.container}>
    <h2>Animation Sample 2</h2>
    <p>Refresh to see the two phases : 0->50 , 50->100 animation background color effect</p>
    <div></div>
    </div>`
}