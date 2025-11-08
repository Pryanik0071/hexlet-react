// Экранирование HTML 1 вар - тэги применяются, 2ой вар - нет (default)
render() {
    const htmlString = 'This <i>text</i> should be rendered <b>"as is"</b>';
    return (
      <ul>
        <li dangerouslySetInnerHTML={{ __html: htmlString }} />
        <li>{htmlString}</li>
      </ul>
    );
  }

// Передача стилей
class Component extends React.Component {
  render() {
    const divStyle = {
      color: 'blue',
      fontSize: '50px',
    };

    return <div style={divStyle}>Hello World!</div>;
  }
}

// Если свойство передаётся в компонент без значения, то оно автоматически становится равным true.