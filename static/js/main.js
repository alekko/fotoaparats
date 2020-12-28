function tableFromJson() {

    var col = [];
    for (var i = 0; i < tasks.length; i++) {
        for (var key in tasks[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    // Create a table.
    var table = document.createElement("table");
    table.setAttribute('class', 'table list');

    // Create table header row using the extracted headers above.
    var tr = table.insertRow(-1);                   // table row.

    for (var i = 1; i < col.length; i++) {
        if ((i==3) || (i==6)){
            continue;
        }
        else{
        var th = document.createElement("th");      // table header.
        th.innerHTML = col[i];
        tr.appendChild(th);
    }
    }

    // add json data to the table as rows.
    for (var i = 0; i < tasks.length; i++) {
        tr = table.insertRow(-1);
        tr.setAttribute('class', 'pabeigts');

            for (var j = 1; j < col.length; j++) {
                if ((j==3) || (j==6)){
                continue;
                }
                else{
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = tasks[i][col[j]];
                }
            }
    }

    // Now, add the newly created table with json data, to a container.
    var tabShowData = document.getElementById('showData');
    tabShowData.innerHTML = "";
    tabShowData.appendChild(table);
    
}

function dropdownRoomFromJson() {
    var list1 = [];
    for (var i = 0; i < rooms.length; i++) {       
            var opt = rooms[i];
            var el = document.createElement("Izvēlies kabinetu");
            el.textContent = opt;
            el.value = rooms[i][1];
            list1.appendChild(el);    
    }
}

    var  selectList1 = document.getElementById("list1");
    selectList1.innerHTML = "";
    selectList1.appendChild(el);
