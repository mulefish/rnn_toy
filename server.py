from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

if __name__ == '__main__':
    print("http://localhost:8080/")
    app.run(debug=True, host='0.0.0.0', port=8080)
