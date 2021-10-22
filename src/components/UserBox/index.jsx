import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { FiBook, FiStar, FiUsers, FiArrowLeft } from 'react-icons/fi';
import styles from './styles.module.scss';

export function UserBox({user, username}) {
  const history = useHistory();

  const handleGoToRepos = useCallback(() => {
    history.push(`${user.login}/repos`);
  }, [history, user]);

  const handleGoToStarred = useCallback(() => {
    history.push(`${user.login}/starred`);
  }, [history, user]);

  return (
    <>
      <div className={styles.topInfo}>
        <p>Resultado para o username: <span>{username}</span></p>
        <button className={styles.goBack} onClick={() => history.goBack()}><FiArrowLeft size={14} color="#f2f2f2" /> Voltar</button>
      </div>

      { user ? (
        <div className={styles.userBox}>
          <div className={styles.image}>
            <img src={user.avatar_url} alt="{user.name}" />
          </div>

          <div className={styles.textBox}>
            <h2>{user.name}</h2>
            <ul>
              <li><FiUsers color="#f2f2f2" size={20} />followers:<strong>{user.followers}</strong></li>
              <li><FiBook color="#f2f2f2" size={20} />repositories:<strong>{user.public_repos}</strong></li>
            </ul>
          </div>

          <div className={styles.buttons}>
            <button onClick={handleGoToRepos}><FiBook /> Repositórios</button>
            <button onClick={handleGoToStarred}><FiStar size={16} color="#F7B718" fill= "#F7B718" /> Favoritos</button>
          </div>
        </div>
      ) : (
        <p className={styles.messageNotFound}>Usuário não encontrado!</p>
      )}
    </>
  )
}