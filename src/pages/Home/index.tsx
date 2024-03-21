import { Header } from "../../components/Header";
import styles from "./index.module.scss";
import { useEffect, useState } from "react"


const Home = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    setWindowSize(window.innerWidth)
    console.log(window.innerWidth)
  }, [window.innerWidth])

  console.log(windowSize)

  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.container}>
        <div className={styles.team_form}>
          <div className={styles.content}>
            <h2>Регистрация на турнире</h2>
            <p>ОхотАктив - Второй Кибер-турнир по CS</p>
          </div>
          <iframe
            src="https://forms.yandex.ru/u/65fbcbd202848f79e7e80427/?iframe=1"
            name="ya-form-65fbcbd202848f79e7e80427"

            height="100%"
          />
        </div>
      </div>
    </div>
  )
}
export default Home;