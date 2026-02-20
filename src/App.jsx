import './App.css'

function Button({text, link, id, img, additionalHtml}) {
    return (
        <button className="redirect" id={id} onClick={() => window.open(link, '_blank')}>
            <img src={img ? img : "src/assets/placeholder.jpg"} alt={text} />
            <p>{text}</p>
            {additionalHtml? additionalHtml : null}
        </button>
    )
}


function Links(){
    return (
        <div id="links-container">
            <Button text="Code projects" link="https://github.com/ToyaXop" img="/src/assets/github.png" />
            <Button text="Photos (Temp link)" link="https://www.instagram.com/luciaaa.photos/" img="src/assets/photos.png" additionalHtml={<div id="temp-icon"><a target="_blank" href="https://icons8.com/icon/TUlXgsYn8qIJ/image">Image</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></div>} />
        </div>
    )

}

function Container() {
    return (
        <div id="container">
            <h1 id="title">Lucia - ToyaXo</h1>
            <p id="pronouns">she/her</p>
            <p id="description">Hi!<br/>
            I'm Lucia (a.k.a ToyaXo), a swiss girl passionate about coding, 3d, music creation, fashion and photography.<br/>
            I speak french fluently, my level in english is intermediate and I'm currently learning japanese.</p>
            This page is still a work in progress, I'm planning to add a specific page for my photography and coding projects <br/>=￣ω￣=
            <Links />
        </div>
    )
}

function App() {
  return (
    <div className="App">
      <Container />
    </div>
  )
}

export default App;