import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

import { api } from '../../services/api';
import { gitHub } from '../../services/github';

import { Header } from "../../components/Header";

import { FiArrowLeft } from 'react-icons/fi';

import ReactLoading from 'react-loading';

import styles from './styles.module.scss';
import { ReposBox } from "../../components/ReposBox";

export function Repos() {
  const { username } = useParams();
  const [userRepos, setUserRepos] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const { client_id, client_secret } = gitHub;
  const history = useHistory();

  useEffect(() => {
    const getRepos = async function (username) {
      setIsLoading(true);

      await api.get(`${username}/repos`, {
        params: {
          client_id,
          client_secret
        }
      }).then(response => {
        setUserRepos(response.data);
      }).catch(error => {
        setUserRepos(undefined);
      });

      setIsLoading(false);
    }

    getRepos(username);
  }, [username, client_id, client_secret])

  return (
    <>
      <Header />

      <section className={styles.container}>
        <div className={styles.content}>


          {isLoading ? (
            <ReactLoading className={styles.loading} color='#F7B718' width={54} type="spinningBubbles" />
          ) : (
            (!!userRepos) && (
              <>
                <div className={styles.topInfo}>
                  <p>Repositório de: <span>{username}</span></p>
                  <button className={styles.goBack} onClick={() => history.goBack()}><FiArrowLeft size={14} color="#f2f2f2" /> Voltar</button>
                </div>

                <ul className={styles.repositories}>
                  {userRepos.map(repo => {
                    return (
                      <ReposBox key={repo.id} repo={repo} />
                    )
                  })}
                </ul>
              </>
            )
          )}
        </div>
      </section>
    </>
  )
}