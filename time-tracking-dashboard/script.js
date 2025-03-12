
/*document.addEventListener('DOMContentLoaded', () => {
    // Fetch JSON data and initialize the functionality
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const buttons = document.querySelectorAll('.activity-trackers');
            const defaultButton = document.querySelector('[data-option="weekly"]');
            // Set the default active button
            if (defaultButton) {
                setActiveButton(defaultButton);
            }
            // Add click event listeners to all buttons
            buttons.forEach(button => {
                button.addEventListener('click', function () {
                    const selectedView = button.getAttribute('data-option');
                    updateData(selectedView, data);
                    setActiveButton(button);

                });
            });
            updateData('weekly', data);
        });
    // Update DOM elements with new data based on the selected view
    function updateData(view, data) {
        data.forEach(item => {
            const title = item.title.toLowerCase().replace(' ', '-');
            const current = item.timeframes[view].current;
            const previous = item.timeframes[view].previous;
            const currentElement = document.querySelector(`#${title}-current`);
            if (currentElement) {
                currentElement.textContent = `${current}hrs`;
            }
            const previousElement = document.querySelector(`#${title}-previous`);
            if (previousElement) {
                previousElement.textContent = `Previous - ${previous}hrs`;
            }

        });
    }

    // Update button styles to indicate the active state
    function setActiveButton(clickedButton) {
        const buttons = document.querySelectorAll('.activity-trackers');
        buttons.forEach(button => {
            button.classList.remove('text-PaleBlue');
            button.classList.add('text-DesaturatedBlue');
        });
        clickedButton.classList.remove('text-DesaturatedBlue');
        clickedButton.classList.add('text-PaleBlue',);

    }
});*/

document.addEventListener('DOMContentLoaded', async () => {
    // Fetch JSON data
    const response = await fetch('data.json');
    const data = await response.json();

    const buttons = document.querySelectorAll('.activity-trackers');
    const defaultView = 'weekly';

    // Set default view and active button
    updateData(defaultView, data);
    setActiveButton(document.querySelector(`[data-option="${defaultView}"]`));

    // Add event listeners to buttons
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const view = button.getAttribute('data-option');
            updateData(view, data);
            setActiveButton(button);
        });
    });

    function updateData(view, data) {
        data.forEach(({ title, timeframes }) => {
            const id = title.toLowerCase().replace(' ', '-');
            document.querySelector(`#${id}-current`).textContent = `${timeframes[view].current}hrs`;
            document.querySelector(`#${id}-previous`).textContent = `Previous - ${timeframes[view].previous}hrs`;
        });
    }

    function setActiveButton(activeButton) {
        buttons.forEach(button => button.classList.toggle('text-PaleBlue', button === activeButton));
    }
});
