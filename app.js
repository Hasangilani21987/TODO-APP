

var list = document.getElementById('list')


function add () {
    var input = document.getElementById('input')
    var li = document.createElement('li')
    var lidata = document.createTextNode(input.value)
    li.appendChild(lidata);


    // Delete Button
    var delbtn = document.createElement('button')
    var deldata = document.createTextNode('Delete')
    delbtn.appendChild(deldata)
    delbtn.setAttribute('class', 'delbtn')
    delbtn.setAttribute('onclick', 'deleteItem(this)')
    li.appendChild(delbtn);

    // Edit Button
    var editbtn = document.createElement('button')
    var editdata = document.createTextNode('Edit')
    editbtn.appendChild(editdata)
    editbtn.setAttribute('class', 'editbtn')
    li.appendChild(editbtn)

    list.appendChild(li)
    li.setAttribute('class', 'list-item')
    input.value = ""
}

function deleteItem(e) {
    e.parentNode.remove()
}

function deleteAll() {
    list.innerHTML = ""
}