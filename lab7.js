document.getElementById("button").addEventListener("click", addTask);
function addTask() {
    let newContainer = document.createElement("div"); // main container
    let newCheckbox = document.createElement("input"); // first tag inside container
    newCheckbox.setAttribute("type", "checkbox"); //attributes to the 1st tag
    newCheckbox.setAttribute("name", "task"); //attributes to the 1st tag
    let newText = document.createElement("label"); // second tag for the content near checkbox
    newText.setAttribute("for", "task"); // attribute for 2nd tag
    newText.textContent = document.getElementById("prompt").value; //store input from textarea in a second tag
    let innerButton = document.createElement("button"); // a tag inside 2nd tag for delete button
    innerButton.setAttribute("class", "close"); //attribute for delete button
    innerButton.setAttribute("onclick", "deleteTask(this)");
    innerButton.textContent = "×"; // text on the button
    newText.appendChild(innerButton); // add delete button into second tag
    newContainer.appendChild(newCheckbox); // add checkbox into main container
    newContainer.appendChild(newText); // add text into main container after checkbox (2nd tag + delete button)
    document.getElementById("list").appendChild(newContainer); //add main container to the "list"
    document.getElementById("prompt").value = ""; // making input field blank again
}

function deleteTask(item){ // function for deleting the task
    item.parentElement.parentElement.remove(); //invoking a div tag to delete it 
}