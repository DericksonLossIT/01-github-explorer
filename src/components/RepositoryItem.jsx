export function RepositoryList(props) {
  return (
    <li>
      <strong>{props.repository ?? 'Default'}</strong>
      <p>Forms in React</p>

      <a href="">Acessar repositório</a>
    </li>
  );
}
