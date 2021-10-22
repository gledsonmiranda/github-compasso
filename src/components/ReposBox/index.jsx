import styles from './styles.module.scss';

export function ReposBox ({repo}) {

  function formatDate(date) {
    const newFormat = new Date(date).toLocaleDateString('pt-br', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    })

    return newFormat;
  }

  return (
    <li className={styles.repoItem}>
      <h3>{repo.name}</h3>
      <a href={repo.html_url} title={repo.full_name} rel="noreferrer" target="_blank">{repo.html_url}</a>
      <p>{repo.description}</p>
      <div>
        <p>{repo.language}</p>
        <p>Updated on {formatDate(repo.updated_at)}</p>
      </div>
    </li>
  )
}