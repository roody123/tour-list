import { useState } from "react";

function CityCard({city, removeCity}) {
    const {id, name, description, images} = city;
    const [image, setImage] = useState(0);
    const [showMore, setShowMore] = useState(true);

    const previousImage = () => {
        image === 0 ? setImage(images.length - 1) : setImage(image - 1);
    }

    const nextImage = () => {
        image === images.length - 1 ? setImage(0) : setImage(image + 1);
    }

    return (
        <div className="city-card">
            <div className="container">
                <h2>{id} - {name}</h2>
            </div>

            <div className="container">
                <button className="btn" onClick={previousImage}>previous</button>
                <img src={images[image]} width="500px" alt="city" />
                <button className="btn" onClick={nextImage}>next</button>
            </div>

            <div className="container">
                <p className="description">{showMore ? description.substring(0, 240) + '.....' : description}
                    <button onClick={() => setShowMore(!showMore)}>Show {showMore ? 'more' : 'less'}</button>
                </p>
            </div>

            <div className="container">
                <button id="btnRemove" onClick={() => removeCity(id)}>remove city</button>
            </div>
        </div>
    )
}

export default CityCard;