from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
from services.users_service import users_service

app = Flask(__name__)
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
    'surname': request.form.get('role'),
    'role': request.form.get('surname'),
    'password': request.form.get('password')
  }

  service.add_user(new_user)

  return jsonify(new_user)

@app.route('/delete_user',  methods=['POST'])
def delete_user():
  service = users_service()

  user_id = request.json['id']
  service.delete_user(user_id)

  return jsonify(service.get_users())

@app.route('/my_tasks')
def my_tasks():
  return render_template('my_tasks.html')

@app.route('/problem')
def problem():
  return render_template('problem.html')

@app.route('/all_tasks')
def all_tasks():
  return render_template('all_tasks.html')

@app.route('/datubazes_tests')
def datubazes_tests():
  lietotajs = dict()
  lietotajs['vards'] = 'Vards'
  lietotajs['uzvards'] = 'Uzvards'

  db['lietotaji'] = vardnica

  if db is None:
    return 'Nevar pieslēgties pie datubāzes!'

  lietotaji = db.get('lietotaji', [])

  return str(lietotaji)

if __name__ == '__main__':
  app.run(host='0.0.0.0', port=8080) # This line is required to run Flask on repl.it
