function openUserEditForm(user) {
    $('#user-edit-modal').modal().show();

    const { id, name, surname, password, role } = user;

    const form = document.getElementById('user-edit-form');
    form['id'].value = id;
    form['name'].value = name;
    form['surname'].value = surname;
    form['password'].value = password;
    form['role'].value = role;
}
