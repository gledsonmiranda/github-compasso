import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

import { api } from '../../services/api';
import { gitHub } from '../../services/github';

import { Header } from "../../components/Header";
import { UserBox } from "../../components/UserBox";

import ReactLoading from 'react-loading';

import styles from './styles.module.scss';

export function User() {
  const { username } = useParams();
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { client_id, client_secret } = gitHub;

  useEffect(() => {
    const getUser = async function (username) {
      setIsLoading(true);

      await api.get(`${username}`, {
        params: {
          client_id,
          client_secret
        }
      }).then(response => {
        setUser(response.data);
      }).catch(error => {
        setUser(undefined);
      });

      setIsLoading(false);
    }

    getUser(username);
  }, [username, client_id, client_secret])

  return (
    <>
      <Header />

      <section className={styles.container}>
        <div className={styles.content}>
          { isLoading ? (
            <ReactLoading className={styles.loading} color='#F7B718' width={54} type="spinningBubbles" />
          ) : (
            <UserBox user={user} username={username} />
          )}
        </div>
      </section>
    </>
  )
}