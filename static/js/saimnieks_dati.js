function tableFromJson() {

    var col = [];
    for (var i = 0; i < users.length; i++) {
        for (var key in users[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    // Create a table.
    var table = document.createElement("table");
    table.setAttribute('class', 'tabula');

    // Create table header row using the extracted headers above.
    var tr = table.insertRow(-1);                   // table row.

    for (var i = 1; i <= col.length; i++) {
        var th = document.createElement("th");      // table header.
        th.innerHTML = col[i];
        tr.appendChild(th);
        th.setAttribute('class', 'pirmarinda kolona')
    }

    // add json data to the table as rows.
    for (var i = 1; i < users.length; i++) {

        tr = table.insertRow(-1);
        tr.setAttribute('class', 'visasrindas kolona');

        for (var j = 1; j < col.length + 1; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = users[i][col[j]];
        }
    }

    // Now, add the newly created table with json data, to a container.
    var divShowData = document.getElementById('showData');
    divShowData.innerHTML = "";
    divShowData.appendChild(table);

}
