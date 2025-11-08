// Любой текст, записанный внутри тегов (далее они будут так называться для простоты), остаётся просто статическим текстом на выводе. 3
// А что делать, если нужно вставить значение переменной? Ответ ниже:

const name = "Eva";
const cname = "container";

const vdom1 = (
  <div>
    Hello,
    {name}
  </div>
);
const vdom2 = (
  <div>
    Hello,
    {name.repeat(3)}
  </div>
);
const vdom3 = <div className={cname}>Hello!</div>;

// Кроме того, сами JSX-элементы являются выражениями, то есть вы можете использовать их в любых местах JS-кода, которые работают с выражениями:
const name = "Mike";
const vdom = block ? (
  <div>
    hello,
    {name}
  </div>
) : (
  <span>i am span</span>
);

// Теперь всё вместе. Сам JSX — это выражение, а чтобы встроить выражение на JS внутрь JSX, нужно использовать фигурные скобки. Следовательно, вы можете встроить JSX внутрь самого JSX пока вы пишете JSX:
const vdom = (
  <div>
    {isAdmin ? (
      <p>
        <a href="#">{text}</a>
      </p>
    ) : (
      <p>{text}</p>
    )}
    <Hello />
  </div>
);

// Можно использовать только выражения внутри JSX. Условные инструкции не пройдут, нужно писать только так
let button;
if (loggedIn) {
  button = <LogoutButton />;
} else {
  button = <LoginButton />;
}

return (
  <nav>
    <Home />
    {button}
  </nav>
);

// Композиция
const vdom = (
  <div>
    <Hello />
    <Hello />
    <AnotherComponent>
      <p>What is love</p>
    </AnotherComponent>
  </div>
);

// Работа с null
const header = text ? <h1>{text}</h1> : null

const vdom = (
  <div>
    {header}
    <Hello />
  </div>
)

// или так
const vdom = (
  <div>
    {text ? <h1>{text}</h1> : null}
    <Hello />
  </div>
)

// Или так
const vdom = (
  <div>
    {text && <h1>{text}</h1>}
    <Hello />
  </div>
)
