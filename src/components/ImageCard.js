import React from 'react';
import 'jquery';
import 'lightbox2';

const ImageCard = ({ data, onLoad }) => {

    return (
        <div className="col">
            <a href={`//gallery.ugworks.com/albums/${data.filepath}${data.filename}`} 
                title={data.title} 
                data-lightbox={data.filename} 
                data-title={data.title}>
                    <img 
                        className="shadow"
                        src={`//gallery.ugworks.com/albums/${data.filepath}thumb_${data.filename}`} 
                        alt={data.title}
                        onLoad={onLoad}
                        onError={onLoad} />
            </a>
            <h2>
                <a href={data.user1} 
                    target="_blank" 
                    rel="noreferrer" 
                    title={`Click to go to ${data.title}'s website.`} 
                    dangerouslySetInnerHTML={{ __html: data.title }}>
                </a>
            </h2>
            <p className="d-none d-md-block" dangerouslySetInnerHTML={{ __html: data.caption }} ></p>
        </div>
    )

}

export default ImageCard;