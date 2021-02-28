from flask import Flask, render_template, url_for, Response
from flask_bootstrap import Bootstrap
from camera import VideoCamera
import os

app = Flask(__name__)
app.secret_key = os.urandom(24)

def gen(camera):
    while True:
        frame = camera.get_frame()
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/meeting")
def meeting():
    return render_template('Livemeeting.html')

@app.route('/emotions')
def emotions():
    return Response(gen(VideoCamera()), mimetype='multipart/x-mixed-replace; boundary=frame')

if (__name__ == "__main__"):
    app.run()

if __name__ =="__main__":
    app.run(port=5000,debug=True)