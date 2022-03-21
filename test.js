document.addEventListener('DOMContentLoaded', () => {
    var button = document.getElementById("my-button")
    button.addEventListener('mouseover', (e) => {
        e.preventDefault();
        button.style.backgroundColor = 'red';
    })
    button.addEventListener('mouseout', (e) => {
        e.preventDefault();
        button.style.backgroundColor = 'yellow';
    })

    button.addEventListener('click', (e) => {
        e.preventDefault();
        button.innerText = " I have been clicked";
    })
})