function delay(time) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, time);
    });
}

delay(300).then(() => {
    console.log("After 300 miliseconds this message appears.");
});


function loadImage(url) {
    return new Promise((resolve, reject) => {

        const image = new Image();

        function removeListeners() {
            image.removeEventListener('load', onLoad);
            image.removeEventListener('error', onError);
        }

        function onLoad() {
            removeListeners();
            resolve(image);
        }

        function onError(error) {
            removeListeners();
            reject(new Error(error));
        }

        image.addEventListener('load', onLoad, false);
        image.addEventListener('error', onError, false);
        
        image.src = url;
    });
}

// load an image
loadImage('/images/pig.jpg')
.then((image) => {
    document.body.addElement(image);
})
.catch((error) => {
    console.error(error);
})

// load multiple images
Promise.all([
    loadImage('/images/chicken.jpg'),
    loadImage('/images/cow.jpg'),
    loadImage('/images/horse.jpg'),
    loadImage('/images/kitten.jpg')
]).then((images) => {
    images.forEach((image) => {
        document.body.addElement(image);
    });
}).catch((error) => {
    console.error(error);
});

// load an image with a timeout
Promise.race([
    loadImage, 
    delay(300).then(() => {
        throw new Error('Operation timed out');
    })
]).then((image) => {
    console.log("Image loaded within 300 miliseconds");
}).catch((error) => {
    console.error("Something went wrong with loading the image or it took longer as 300 miliseconds");
})
