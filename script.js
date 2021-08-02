function doShowAll() {
    var key = "";

    var list = "<tr><th>Item</th><th>Value</th></tr>\n";
    var i = 0;
    for (i = 0; i <= localStorage.length-1; i++) {
        key = localStorage.key(i);
        list += "<tr><td>" + key + "</td>\n<td>"
        + localStorage.getItem(key) + "</td></tr>\n";
    }
    if (list == "<tr><th>Item</th><th>Value</th></tr>\n") {
        list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
    }

    document.getElementById('list').innerHTML = list;
}

function SaveItem() {

    var name = document.forms.ShoppingList.name.value;
    var data = document.forms.ShoppingList.data.value;
    localStorage.setItem(name, data);
    doShowAll();

}

//Change an existing key-value in HTML5 storage.
function ModifyItem() {
    var name1 = document.forms.ShoppingList.name.value;
    var data1 = document.forms.ShoppingList.data.value;
    //check if name1 is already exists

    //Check if key exists.
    if (localStorage.getItem(name1) != null) {
        //update
        localStorage.setItem(name1, data1);
        document.forms.ShoppingList.data.value = localStorage.getItem(name1);
    }

    doShowAll();
}

function RemoveItem() {
    var name = document.forms.ShoppingList.name.value;
    document.forms.ShoppingList.data.value = localStorage.removeItem(name);
    doShowAll();
}

function ClearAll() {
    localStorage.clear();
    doShowAll();
}