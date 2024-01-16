from flask import Flask, render_template, request, redirect, url_for
import os

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = 'static/uploads'
app.config['ALLOWED_EXTENSIONS'] = {'png', 'jpg', 'jpeg', 'gif'}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in app.config['ALLOWED_EXTENSIONS']

@app.route('/')
def index():
    photos = os.listdir(app.config['UPLOAD_FOLDER'])
    return render_template('index.html', photos=photos)

@app.route('/upload', methods=['POST'])
def upload():
    if 'photo' not in request.files:
        return redirect(url_for('index'))

    photo = request.files['photo']

    if photo.filename == '':
        return redirect(url_for('index'))

    if photo and allowed_file(photo.filename):
        photo.save(os.path.join(app.config['UPLOAD_FOLDER'], photo.filename))

    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)
