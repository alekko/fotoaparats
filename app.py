from flask import Flask, render_template, request, jsonify
from flask_cors import CORS

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


app.run(
  host = "0.0.0.0", # or 127.0.0.1 (DONT USE LOCALHOST)
  port = 8080,
  debug = False
)
