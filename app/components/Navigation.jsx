import Link from "next/link";
import Counter from "../(with-banner)/posts/Counter";
import { font_Zen_Dots } from "../fonts";
import styles from "./Navigation.module.css"

const links = [
  {label:'Home', route:'/'},
  {label:'About', route:'/about'},
  {label:'Posts', route:'/posts'}
]
const Navigation = () => {

  return (
    <header className={styles.header} >
    <nav>
        <ul className={styles.navigation} >
{links.map(({label,route})=> (
<li key={route} className={font_Zen_Dots.className} >
<Link href={route}>
{label}
</Link>
</li>
)  )}

        </ul>
        <Counter/>
    </nav>
</header>
  )
}

export default Navigation