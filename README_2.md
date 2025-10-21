# JXS

const name = 'Eva'
const cname = 'container'

const vdom1 = (

  <div>
    Hello,
    {name}
  </div>
)
const vdom2 = (
  <div>
    Hello,
    {name.repeat(3)}
  </div>
)
const vdom3 = <div className={cname}>Hello!</div>

##

const name = 'Mike'
const vdom = block
? (

<div>
hello,
{name}
</div>
)
: <span>i am span</span>

##

const vdom = (

  <div>
    {isAdmin ? <p><a href="#">{text}</a></p> : <p>{text}</p>}
    <Hello />
  </div>
)

##

let button
if (loggedIn) {
button = <LogoutButton />
}
else {
button = <LoginButton />
}

return (

  <nav>
    <Home />
    {button}
  </nav>
)

##

const vdom = (

  <div>
    <Hello />
    <Hello />
    <AnotherComponent>
      <p>What is love</p>
    </AnotherComponent>
  </div>
)

##

const vdom = (

  <div>
    {text ? <h1>{text}</h1> : null}
    <Hello />
  </div>
)

##

const header = text ? <h1>{text}</h1> : null

const vdom = (

  <div>
    {header}
    <Hello />
  </div>
)
