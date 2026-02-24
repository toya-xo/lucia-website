import './css/photos.css';
import photos from "../assets/photos-info.json"

const photosLoc = "./src/assets/photos/"
function Button({text, img, date, rotation}) {
    return (
        <button className={`photo-gallery ${rotation}`} onClick={() => console.log("Not done yet")}>
            <img className="photo" src={img ? img : ""} alt={text} />
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
                    date={p.date}
                    rotation={p.rotation}
                />
            ))}
        </div>
    )
}


function Photos() {  
    return (
        <div className="container-2">
            <button className='redirect' onClick={(() => window.location = "/")}>Go back to homepage</button>
            <h1 className="title">Photos</h1>
            <div id="gallery">
                <Gallery />
            </div>
        </div>
    );
};

export default Photos;