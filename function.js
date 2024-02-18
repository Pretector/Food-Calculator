function submit() {
    try {
        let calories_more = parseInt(document.getElementById('calories_add').value);
        let calories_less = parseInt(document.getElementById('calories_delete').value);
        let calories_tol = calories_more - calories_less;
        let weight_tol = calories_tol / 7000;
        let weight_gain = calories_more / 7000;
        let weight_less = calories_less / 7000;
        document.getElementById('result').innerText = `Weight gained: ${weight_gain.toFixed(3)} kg\nWeight loss: ${weight_less.toFixed(3)} kg\nTotal weight: ${weight_tol.toFixed(3)} kg`;
    } catch (e) {
        let result = document.getElementById('result');
        if (!calories_more || !calories_less) {
            result.innerText = 'Error: Please enter values in both fields';
        } else {
            result.innerText = 'Error: Please enter number variables only';
        }
    }
}

function Saving() {
    try {
        let file1 = 'save.txt'; // Assuming 'save.txt' is a placeholder and not actual file writing functionality
        let content = file1.read(); // Assuming file reading functionality is in place
        let calories_more = parseInt(document.getElementById('calories_add').value);
        let calories_less = parseInt(document.getElementById('calories_delete').value);
        let calories_tol = calories_more - calories_less;
        let weight_tol = calories_tol / 7000;
        let weight_gain = calories_more / 7000;
        let weight_less = calories_less / 7000;
        let select_date = document.getElementById('calendar').value; // Assuming calendar is an input element
        let new_content = `${select_date}\nWeight gained: ${weight_gain.toFixed(3)} kg\nWeight loss: ${weight_less.toFixed(3)} kg\nTotal weight: ${weight_tol.toFixed(3)} kg\n\n${content}`;
        file1.write(new_content); // Assuming file writing functionality is in place
        document.getElementById('result').innerText = 'Saved';
    } catch (e) {
        document.getElementById('result').innerText = 'Error: Please enter number variables only';
    }
}

function toggle_calendar() {
    let calendar = document.getElementById('calendar');
    let toggle_calendar = document.getElementById('toggle_calendar');
    if (calendar.style.display === 'none') {
        calendar.style.display = 'block';
        toggle_calendar.innerText = 'Hide Calendar';
    } else {
        calendar.style.display = 'none';
        toggle_calendar.innerText = 'Show Calendar';
    }
}

function ViewSave() {
    let file1 = 'save.txt'; 
    let content = file1.read(); 
    show_save_window(content);
}
