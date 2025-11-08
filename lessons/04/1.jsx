// Корневой элемент компонент
class Article extends React.Component {
  render() {
    return (
      <article>
        <h1>Заголовок статьи</h1>
        <Section header="Подзаголовок" body="Контент" />
      </article>
    );
  }
}

// Возврат нескольких элементов без обшего родителя. Они обязательно должны быть обернуты, это требование JSX!
// JSX не может отображать несколько корневых компонентов без обёртки!
class Section extends React.Component {
  render() {
    const { header, body } = this.props;

    return (
      <React.Fragment>
        <h2>{header}</h2>
        <div>{body}</div>
      </React.Fragment>
    );
  }
}

// Или
class Section extends React.Component {
  render() {
    const { header, body } = this.props;

    return (
      <>
        <h2>{header}</h2>
        <div>{body}</div>
      </>
    );
  }
}

// Или (если не нужно генерировать через props и прочее)
class Section extends React.Component {
  render() {
    return [<h2 key="header">Header</h2>, <div key="body">Body</div>];
  }
}
