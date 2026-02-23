import './css/index.css';
import { useNavigate } from "react-router-dom"

function Button({text, linkW, linkN, id, img, additionalHtml}) {
    const n = useNavigate();
    return (
        <button className="redirect" id={id} onClick={!!linkW ? ()=>n(linkW) : ()=>window.location = linkN}>
            <img src={img ? img : "src/assets/placeholder.jpg"} alt={text} class='icon'/>
            <p>{text}</p>
            {additionalHtml? additionalHtml : null}
        </button>
    )
}


function Links(){
    return (
        <div id="links-container" class="buttons">
            <Button text="Code projects" linkW="/projects" img="https://www.systemuicons.com/images/icons/paper.svg" />
            <Button text="Photos (W.I.P.)" linkN="https://www.instagram.com/luciaaa.photos/" img="https://www.systemuicons.com/images/icons/camera_alt.svg" />
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
            This page is still a work in progress, I'm planning to add a gallery for my photography<br/>=￣ω￣=
            <Links />
        </div>
    )
}

function Home() {
  return (
    <div className="App">
      <Container />
    </div>
  );
};

export default Home;