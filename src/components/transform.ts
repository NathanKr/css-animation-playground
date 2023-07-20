import styles from "../styles/transform.module.css";

export default function transform(): string {
  return `<div class=${styles.container}>
    <h2>Transform</h2>
    <p style=color:red>for some reason this is not working</p>
    <p>Hover over the div elements</p> 
    <div class="div1"></div>   
    <div class="div2"></div>   
  </div>`;
}
