import React, {useState} from 'react';
import RepeatedTitle from "../../Components/Repeated/Repeated";
import Card from "./Card";

const Portfolio = () => {
    const [selectedImage, setSelectedImage] = useState('');
    const images = [];
    for (let i = 1; i <= 6; i++) {
        const imageUrl = `/assets/images/card${i}.png`;
        images.push(imageUrl);
    }

    function openModal(image) {
        setSelectedImage(image);
    }


    function closeModal() {
        setSelectedImage(null);
    }

    return (
        <>
            <div className="title">
                <RepeatedTitle title="PORTFOLIO COMPONENT" color="var(--second-color)" />
            </div>

            <div className="cards container">
                {images.map((image, index) => (
                    <React.Fragment key={image}>
                        <Card picture={image} openModal={() => openModal(image)} />
                    </React.Fragment>
                ))}
            </div>

            {selectedImage&& (
                <div className="modal">
                    <div className="modal-content">
                        <img src={selectedImage} alt="modal" />
                        <span className=" icon fa-regular fa-rectangle-xmark fa-beat" onClick={closeModal}></span>
                    </div>
                </div>
            )}
        </>
    );
};

export default Portfolio;
