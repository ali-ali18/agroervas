export const proximaImg = (images, setIndexImgs) => {
    setIndexImgs((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
};

export const anteriorImg = (images, setIndexImgs) => {
    setIndexImgs((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
};
