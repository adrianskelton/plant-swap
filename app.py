from flask import Flask, request, jsonify, send_from_directory 
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, create_access_token
from flask_cors import CORS

app = Flask(__name__, static_folder='./plant-swap/build/static', static_url_path='/static')
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///plantswap.db'
app.config['JWT_SECRET_KEY'] = 'your_secret_key'

# Initialize extensions
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)
CORS(app)

# Models
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)
    location = db.Column(db.String(100), nullable=False)
    avatar = db.Column(db.String(200), nullable=False)

# Initialize the database
def initialize_database():
    with app.app_context():
        db.create_all()
        print("Database initialized!")

# Routes to serve React app and static files
@app.route('/')
def serve_react_app():
    # Serve the React app's index.html file
    return send_from_directory(os.path.join(app.root_path, 'plant-swap/build'), 'index.html')

@app.route('/static/<path:path>')
def serve_static(path):
    return send_from_directory(os.path.join(app.root_path, 'plant-swap/build/static'), path)

# Register Route
@app.route('/register', methods=['POST'])
def register():
    data = request.json
    hashed_password = bcrypt.generate_password_hash(data['password']).decode('utf-8')
    user = User(
        username=data['username'],
        email=data['email'],
        password=hashed_password,
        location=data['location'],
        avatar=data['avatar']  # selected avatar URL
    )
    db.session.add(user)
    db.session.commit()
    return jsonify({"message": "User registered successfully!"})

# Login Route
@app.route('/login', methods=['POST'])
def login():
    data = request.json
    user = User.query.filter_by(email=data['email']).first()
    if user and bcrypt.check_password_hash(user.password, data['password']):
        access_token = create_access_token(identity={'username': user.username, 'avatar': user.avatar})
        return jsonify(access_token=access_token)
    return jsonify({"message": "Invalid credentials!"}), 401

@app.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()  # Retrieve all users
    user_data = [{"username": user.username, "email": user.email, "location": user.location, "avatar": user.avatar} for user in users]
    return jsonify(user_data)

# Main entry point
if __name__ == '__main__':
    initialize_database()  # Initialize the database before running the app
    app.run(debug=True)
