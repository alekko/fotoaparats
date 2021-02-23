// After DOM is fully loaded
window.addEventListener('load', () => {
    const form = document.getElementById('new_user_form');
    // Add submit event listener -> gets triggered on submit button click
    form.addEventListener('submit', (e) => {
        // To prevent reload
        e.preventDefault();

        const data = new FormData(form);
        addUser(data);
    });
});

// Check if all form data is filled
function isFormDataValid(data) {
    for (const value of data) {
        if (!value) {
            return false;
        }
    }
    return true;
}

// After successfull submision we can append user to the table
function addUserToTable(user) {
    const { id, name, surname, password, role } = user

    const row = this.getRowHtml(id, name, surname, password, role);
    const table = document.getElementById('users_table');
    const tableBody = table.getElementsByTagName('tbody')[0];

    tableBody.innerHTML += row;
}

function removeRowFromTable(users) {
  const table = document.getElementById('users_table');
  for (let i = 1; i < table.rows.length;) {
    table.deleteRow(i);
  }
}

function getRowHtml(id, name, surname, password, role) {
    return `
        <tr class="visasrindas" id="user-row-${id}">
            <td class="kolona">${id}</td>
            <td class="kolona">${name}</td>
            <td class="kolona">${surname}</td>
            <td class="kolona">${password}</td>
            <td class="kolona">${role}</td>
            <td class="kolona">
            <button>
                <img src="../static/images/labot.svg">
            </button>
            <button onclick="deleteUser(${id});">
                <img src="../static/images/dzest.svg">
            </button>
            </td>
        </tr>`
}

function addUser(data) {
    if (!isFormDataValid(data.values())) {
        alert('Visiem laukiem jābūt aizpildītiem!');
        return;
    }

    axios({
        method: 'post',
        url: '/new_user',
        data: data
    }).then((response) => {
        this.addUserToTable(response.data)
        alert('Lietotājs veiksmīgi pievienots!')
    }).catch((error) =>
        alert(`Kaut kas nogāja greizi: ${error}`)
    );
}

function deleteUser(id) {
    const data = {
        id: id
    }

    axios({
        method: 'post',
        url: '/delete_user',
        data: data
    }).then((response) => {
        // Remove all table rows
        this.removeRowFromTable();

        // Add left users to the table body
        for (const user of response.data) {
          this.addUserToTable(user);
        }

        alert('Lietotājs veiksmīgi izdzēsts!');
    }).catch((error) =>
        alert(`Kaut kas nogāja greizi: ${error}`)
    );
}
