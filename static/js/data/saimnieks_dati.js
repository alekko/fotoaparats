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
    let virsraksti = ["VĀRDS", "UZVĀRDS", "PAROLE", "LOMA", "LABOT"];

    for (var i = 0; i < virsraksti.length; i++) {
        var th = document.createElement("th");      // table header.
        th.innerHTML = virsraksti[i];
        tr.appendChild(th);
        th.setAttribute('class', 'pirmarinda kolona')
    }

    for (var i = 1; i < users.length; i++) {

        tr = table.insertRow(-1);
        tr.setAttribute('class', 'visasrindas kolona');

        for (var j = 1; j < col.length + 1; j++) {
            if (j == 4) {
                var list = "<select class='lomatab'>" +
                    "<option selected>" + roles[users[i][col[j]] - 1] + "<\/option>" +
                    "<option value=\"1\">Saiminieks<\/option>" +
                    "<option value=\"2\">Darbinieks<\/option>" +
                    "<option value=\"3\">Galdnieks<\/option>" +
                    "<option value=\"4\">Santehniķis<\/option>" +
                    "<option value=\"5\">Dežurante-apkopēja<\/option>" +
                    "<option value=\"6\">Skolotājs<\/option>" +
                    "<\/select>";
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = list;
            }
            else if (j == 5) {
                var labot = "<button id=" + i + "><img src='./static/images/labot.svg'></button>"
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = labot;
            }
            else {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = users[i][col[j]];
            }

        }
    }

    // Now, add the newly created table with json data, to a container.
    var divShowData = document.getElementById('showData');
    divShowData.innerHTML = "";
    divShowData.appendChild(table);

}
