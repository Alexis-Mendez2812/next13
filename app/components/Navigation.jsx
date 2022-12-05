import Link from "next/link";
import Counter from "../(with-banner)/posts/Counter";
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
<li key={route} >
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