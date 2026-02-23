// W.I.P.
/*
import './css/photos.css';
import photos from "../assets/photos-info.json"

const photosLoc = "../assets/photos/"
function Button({text, img, date, }) {
    return (
        <button className="photo-gallery" onClick={() => console.log("Not done yet")}>
            <img src={img ? img : ""} alt={text} />
            <p>{text}</p>
            
        </button>
    );
}

function Gallery(){
    return (
        <div className="gallery-container">
            {photos.map((p) => (
                <Button 
                    key={p.name} 
                    text={p.name} 
                    img={photosLoc+p.name}
                />
            ))}
        </div>
    )
}


function Photos() {  
    return (
        <div className="container">
            <button className='redirect' onClick={(() => window.location = "/")}>Go back to homepage</button>
            <h1 className="title">Photos</h1>
            <Gallery />
        </div>
    );
};

export default Photos;*/