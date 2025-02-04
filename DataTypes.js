var form = document.getElementById('addform');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//form submit event
form.addEventListener('submit', addItem);
//delete event
itemList.addEventListener('click', removeItem);
//filter event
filter.addEventListener('keyup', filterItems);

//add item
function addItem(e) {
    e.preventDefault();

    //get input value

    var newItem = document.getElementById('item').value;

    //create new li element
    var li = document.createElement('li');

    li.className = 'list-group-item';

    li.appendChild(document.createTextNode(newItem));

    //create del button
    var deleteBtn = document.createElement('button');

    //add class to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    //append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    
    //append button to li
    li.appendChild(deleteBtn);

    //append li to list
    itemList.appendChild(li);

    itemList.appendChild(li);
}
//remove item
function removeItem(e) {
    if(e.target.classList.contains('delete')) {
        if(confirm('Are You Sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
//filter Items
function filterItems(e) {
    //convert to lowercase
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');
    //convert to an array
    Array.from(items).forEach(function(item) {
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display ='none';
        }
        
    });

}








