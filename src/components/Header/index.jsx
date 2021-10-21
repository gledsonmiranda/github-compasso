import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { FiSearch } from 'react-icons/fi';

import styles from './styles.module.scss';

import logoImg from '../../assets/images/logo-compasso-uol.png';

export function Header() {
  const history = useHistory();
  const [userSearch, setUserSearch] = useState('');

  async function handleSearchSubmit(e) {
    e.preventDefault();

    if (userSearch.trim() !== '') {
      setUserSearch('');
      history.push(`/${userSearch}`);
    }
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <Link to="/">
            <img src={logoImg} alt="Logo Compasso UOL" />
          </Link>

          <form onSubmit={handleSearchSubmit}>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                placeholder="Buscar por usuário do GitHub"
                value={userSearch}
                autoFocus
                onChange={e => setUserSearch(e.target.value)}
              />
              <button><FiSearch size={18} /></button>
            </div>
          </form>
        </div>
      </header>
    </>
  )
}

