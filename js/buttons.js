// Wait for the page to finish loading before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Find all the card wrappers on the page
    const cardWrappers = document.querySelectorAll('.card-wrapper');

    // Loop through each card wrapper
    cardWrappers.forEach(cardWrapper => {
        // Find the hidden text and "more" button within this card wrapper
        const hiddenText = cardWrapper.querySelector('.hidden-text');
        const moreButton = cardWrapper.querySelector('.more-btn');

        // Add a click event listener to the "more" button
        moreButton.addEventListener('click', () => {
            // Toggle the "show-text" class on the hidden text element
            hiddenText.classList.toggle('show-text');

            // Toggle the button text
            if (moreButton.textContent === 'More') {
                moreButton.textContent = 'Less';
            } else {
                moreButton.textContent = 'More';
            }
        });
    });
});