from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import replit

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
  return render_template('index.html')

@app.route('/users')
def users():
  return render_template('users.html')

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
  database = replit.db
  vardnica = dict()
  vardnica["vards"] = "Vards"
  vardnica["uzvards"] = "Uzvards"
  database['lietotaji'] = vardnica

  lietotaji = database.get('lietotaji', [])

  return str(lietotaji)

if __name__ == '__main__':
  app.run(host='0.0.0.0', port=8080) # This line is required to run Flask on repl.it
