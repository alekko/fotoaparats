from flask import Flask, render_template, request, jsonify, redirect, url_for, flash, session
from flask_cors import CORS
from services.users_service import users_service

app = Flask(__name__)
# Need this so flash messages can work
app.secret_key = 'super secret key'

CORS(app)

@app.route('/')
def index():
  return render_template('index.html')

@app.route('/users')
def users():
  service = users_service()
  users = service.get_users()

  return render_template('users.html', users = users)

@app.route('/new_user',  methods=['POST'])
def new_user():
  service = users_service()

  new_user = {
    'name': request.form.get('name'),
    'surname': request.form.get('surname'),
    'role': request.form.get('role'),
    'password': request.form.get('password')
  }

  service.add_user(new_user)

  flash('Lietotājs veiksmīgi pievienots!')

  return redirect(url_for('users'))

@app.route('/edit_user',  methods=['POST'])
def edit_user():
  service = users_service()

  edited_user = {
    'id': request.form.get('id'),
    'name': request.form.get('name'),
    'surname': request.form.get('surname'),
    'role': request.form.get('role'),
    'password': request.form.get('password')
  }

  service.edit_user(edited_user)

  flash('Lietotājs veiksmīgi atjaunināts!')

  return redirect(url_for('users'))

@app.route('/delete_user/<int:user_id>')
def delete_user(user_id):
  service = users_service()
  service.delete_user(user_id)

  flash('Lietotājs veiksmīgi izdzēsts!')

  return redirect(url_for('users'))

@app.route('/my_tasks')
def my_tasks():
  return render_template('my_tasks.html')

@app.route('/problem')
def problem():
  return render_template('problem.html')

@app.route('/all_tasks')
def all_tasks():
  return render_template('all_tasks.html')

if __name__ == '__main__':
  app.run(host='0.0.0.0', port=8080) # This line is required to run Flask on repl.it
