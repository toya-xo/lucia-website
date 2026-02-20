import './css/index.css'

function Button({text, link, id, img, additionalHtml}) {
    return (
        <button className="redirect" id={id} onClick={() => window.location = link}>
            <img src={img ? img : "src/assets/placeholder.jpg"} alt={text} class='icon'/>
            <p>{text}</p>
            {additionalHtml? additionalHtml : null}
        </button>
    )
}


function Links(){
    return (
        <div id="links-container" class="buttons">
            <Button text="Code projects" link="/projects" img="/src/assets/github.png" />
            <Button text="Photos (W.I.P.)" link="/photos" img="src/assets/photos.png" additionalHtml={<div id="temp-icon"><a target="_blank" href="https://icons8.com/icon/TUlXgsYn8qIJ/image">Image</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></div>} />
        </div>
    )

}

function Container() {
    return (
        <div class="container">
            <h1 class="title">Lucia - ToyaXo</h1>
            <p id="pronouns" className="text-small">she/her</p>
            <p id="description">Hi!<br/>
            I'm Lucia (a.k.a ToyaXo), a swiss girl passionate about coding, 3d, music creation, fashion and photography.<br/>
            I speak french fluently, my level in english is intermediate and I'm currently learning japanese.</p>
            This page is still a work in progress, I'm planning to add a specific page for my photography and coding projects <br/>=￣ω￣=
            <Links />
        </div>
    )
}

function Home() {
  return (
    <div className="App">
      <Container />
    </div>
  )
}

export default Home;