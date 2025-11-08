export default class DefinitionsList extends React.Component {
  render() {
    const { data } = this.props;
    return data && data.length > 0 ? (
      <dl>
        {data.map((item) => (
          <React.Fragment key={item.id}>
            <dt>{item.dt}</dt>
            <dd>{item.dd}</dd>
          </React.Fragment>
        ))}
      </dl>
    ) : null;
  }
}

// Мы проверяем, что массив пустой. просто проверить что он существует [] - фигня!
// По правилам JSX мы должны указывать, что если у нас несколько генерируемых компонентов без родителя, то оборачиваем
// но тут не поможет <></>, т.к. надо указывать ключи!

// Вот так еще можно было решить. В самому render оказывается можно делать проверки if и несколько return

import React from 'react';

// BEGIN
export default class Definitions extends React.Component {
  render() {
    const { data } = this.props;
    if (data.length === 0) {
      return null;
    }

    const tags = data.map(({ dt, dd, id }) => (
      <React.Fragment key={id}>
        <dt>{dt}</dt>
        <dd>{dd}</dd>
      </React.Fragment>
    ));

    return (
      <dl>
        {tags}
      </dl>
    );
  }
}
// END