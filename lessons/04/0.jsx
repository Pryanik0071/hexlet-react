// Работа с коллекциями
class List extends React.Component {
  renderList = (data) => {
    return data.map((item) => <li>{item.name}</li>);
  };

  render() {
    const { data } = this.props;

    return <ul>{this.renderList(data)}</ul>;
  }
}

// Нужно идентифицировать каждую ген. строку (например в id)

// KEY
class List extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    );
  }
}

const items = [
  { name: "first", id: 1 },
  { name: "second", id: 2 },
];

const mountNode = document.getElementById("react-root");
const root = ReactDOM.createRoot(mountNode);
root.render(<List data={items} />);

// key из prop не получится использовать, нужно генерировать доп id.
const content = posts.map((post) =>
  <Post
    key={post.id}
    id={post.id}
    title={post.title}
  />
);

// пример использования переменной content
class PostList extends React.Component {
  render() {
    return (
      <div>
        <h1>Список постов</h1>
        {content}
      </div>
    );
  }

// KEY ставим только не генерируемые элементы. на обычные li, которые статичные - не надо