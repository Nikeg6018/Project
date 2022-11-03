// this function use for add the item in page.
function additem() {


    // get the input from input line
    var item = document.getElementById("additems").value;

    if (item == "") {
        alert("Please enter the topic.");
        return;
    }

    // if list is add remove the empty msg.
    let emptylist = document.getElementById("item").children;
    if (emptylist[0].className == "emptyMsg")
        emptylist[0].remove();

    // select the div tag (id == item) 
    let numberItem = document.getElementById("item");
    // and add the div tag in the div tag (id == item).
    let newitems = document.createElement('div');
    // upper div tag inner html. 
    newitems.innerHTML = `<h2 class="item">${item}</h2>
    <button class="edit" onclick="edit(this)" type="button">Edit</button>
    <button class="delete" onclick="Del(this)" type="button">Delete</button>
    <hr />`
    // append the all list in the upper created div tag.
    numberItem.appendChild(newitems);
}

// remove item in the page.
function Del(currElement) {

    // remove currElement
    console.log(currElement);
    currElement.parentElement.remove();

    // if all list delete show a msg.
    let item = document.getElementById("item");
    if (item.children.length <= 0) {
        let newEmptyMsg = document.createElement("h3");
        newEmptyMsg.classList.add("emptyMsg");
        newEmptyMsg.textContent = "Nothing is here.";
        item.appendChild(newEmptyMsg)
    }

}

// edit the value in todo list.
function edit(currele) {
    if (currele.textContent == "Edit") {
        // Edit (Button Text) convert in to "Done"
        currele.textContent = "Done";

        // get the text of H2 tag using "previousElementSibling.textContent";
        let text = currele.previousElementSibling.textContent;

        // create the new input tag
        let newinput = document.createElement("input");
        newinput.placeholder = "add the new item...";
        newinput.value = text;
        currele.parentElement.replaceChild(
            newinput,
            currele.previousElementSibling
        );
    }
    else {
        // Done (Button Text) convert in to "Edit"
        currele.textContent = "Edit";

        // get the text of H2 tag using "previousElementSibling.value"
        let text = currele.previousElementSibling.value;

        // create the new h2 tag
        let currHeading = document.createElement("h2");
        currHeading.className = "item";
        currHeading.textContent = text;
        currele.parentElement.replaceChild(
            currHeading,
            currele.previousElementSibling
        );
    }
}