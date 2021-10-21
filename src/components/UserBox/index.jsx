import { FiBook, FiStar, FiUsers } from 'react-icons/fi';
import styles from './styles.module.scss';

export function UserBox({user}) {

  return (
    <div className={styles.userBox}>
      <div className={styles.image}>
        <img src={user.avatar_url} alt="{user.name}" />
      </div>

      <div className={styles.textBox}>
        <h2>{user.name}</h2>
        <ul>
          <li><FiUsers color="#f2f2f2" size={20} /><strong>followers:</strong>{user.followers}</li>
          <li><FiBook color="#f2f2f2" size={20} /><strong>repositories:</strong>{user.public_repos}</li>
        </ul>
      </div>

      <div className={styles.buttons}>
        <button>Repositórios</button>
        <button><FiStar size={16} /> Mais visitados</button>
      </div>
    </div>
  )
}