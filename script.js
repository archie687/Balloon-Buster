// const balloonContainer = document.querySelector('.ballon-container');
// const balloonImages = balloonContainer.querySelectorAll('img');

// for (var i = 0; i < balloonImages.length; i++) {
//     console.log('fakeImage: ', balloonImages[i]);
//   }


// const balloonImages = document.querySelectorAll('.balloon');

// // Add event listener to each image
// balloonImages.forEach(image => {
//   image.addEventListener('click', () => {
//     // Apply breaking effect
//     image.classList.add('broken');

//     // Remove the image element after a delay
//     setTimeout(() => {
//       image.remove();
//     }, 10); // Adjust the delay as needed
//   });
// });


const balloonImages = document.querySelectorAll('.balloon');

// Delay between each image appearance
const delay = 400; // 10 seconds

// Function to show images one by one with a delay
const showImagesOneByOne = (images, index) => {
  if (index >= images.length) {
    return; // Stop when all images have been shown
  }

  const image = images[index];

  // Add a delay before showing the image
  setTimeout(() => {
    image.style.display = 'inline-block'; // Show the image

    // Add event listener to the image
    image.addEventListener('click', () => {
      // Apply breaking effect
      image.classList.add('broken');

      // Remove the image element after a delay
      setTimeout(() => {
        image.remove();
      }, 10); // Adjust the delay as needed
    });

    // Show the next image after a delay
    showImagesOneByOne(images, index + 1);
  }, delay * index);
};

// Hide all images initially
balloonImages.forEach(image => {
  image.style.display = 'none';
});

// Start showing the images one by one
showImagesOneByOne(balloonImages, 0);



// const balloonContainer = document.querySelector('.balloon-container');
// const balloonImages = balloonContainer.querySelectorAll('.balloon');

// // Delay between each image appearance
// const delay = 10000; // 10 seconds

// // Function to show images one by one with a delay
// const showImagesSequentially = () => {
//   let index = 0;

//   const showNextImage = () => {
//     const currentImage = balloonImages[index];

//     // Show the current image
//     currentImage.style.display = 'inline-block';

//     // Add event listener to the image
//     currentImage.addEventListener('click', () => {
//       // Apply breaking effect
//       currentImage.classList.add('broken');

//       // Remove the image element after a delay
//       setTimeout(() => {
//         currentImage.remove();
//       }, 10); // Adjust the delay as needed
//     });

//     index++;

//     // Reset index if all images have been shown
//     if (index >= balloonImages.length) {
//       index = 0;
//     }

//     // Show the next image after a delay
//     setTimeout(() => {
//       currentImage.style.display = 'none'; // Hide the current image
//       showNextImage();
//     }, delay);
//   };

//   // Start showing the images
//   showNextImage();
// };

// // Hide all images initially
// balloonImages.forEach(image => {
//   image.style.display = 'none';
// });

// // Start showing the images sequentially
// showImagesSequentially();




// const balloonContainer = document.querySelector('.balloon-container');
// const balloonImages = balloonContainer.querySelectorAll('.balloon');

// // Delay between each image appearance
// const delay = 400; // milliseconds

// // Function to show images one by one with a delay
// const showImagesOneByOne = () => {
//   let index = 0;

//   const showNextImage = () => {
//     const currentImage = balloonImages[index];

//     // Show the current image
//     currentImage.style.display = 'inline-block';

//     // Add event listener to the image
//     currentImage.addEventListener('click', () => {
//       // Apply breaking effect
//       currentImage.classList.add('broken');

//       // Remove the image element after a delay
//       setTimeout(() => {
//         currentImage.remove();
//       }, 10); // Adjust the delay as needed
//     });

//     index++;

//     // Reset index if all images have been shown
//     if (index >= balloonImages.length) {
//       index = 0;
//     }

//     // Show the next image after a delay
//     setTimeout(() => {
//       currentImage.style.display = 'none'; // Hide the current image
//       showNextImage();
//     }, delay);
//   };

//   // Start showing the images
//   showNextImage();
// };

// // Hide all images initially
// balloonImages.forEach(image => {
//   image.style.display = 'none';
// });

// // Start showing the images one by one
// showImagesOneByOne();
