from flask import Flask, jsonify

app = Flask(__name__)

# Dummy list of image URLs
IMAGES = [
    "http://example.com/images/image1.jpg",
    "http://example.com/images/image2.jpg",
    "http://example.com/images/image3.jpg",
    # Add as many images as you have
]

@app.route('/images')
def list_images():
    return jsonify(IMAGES)

if __name__ == '__main__':
    app.run(debug=True)
