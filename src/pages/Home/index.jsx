import { Header } from "../../components/Header";

import styles from './styles.module.scss';

export function Home() {
  return (
    <>
      <Header />

      <section className={styles.container}>
        <div className={styles.content}>
          <p className={styles.message}>Faça uma busca pelo nome de usuário do GitHub <br /> para listar seus repositórios</p>
        </div>
      </section>
    </>
  )
}