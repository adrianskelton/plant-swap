import os
from flask import Flask, request, jsonify, send_from_directory, make_response
from flask_jwt_extended import create_refresh_token, jwt_required, get_jwt_identity
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, create_access_token
from flask_cors import CORS
from datetime import timedelta
from flask_wtf.csrf import CSRFProtect


app = Flask(__name__, static_folder='./plant-swap/build/static', static_url_path='/static')
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///plantswap.db'
app.config['JWT_SECRET_KEY'] = 'your_secret_key'
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(minutes=15)  # Adjust as needed
app.config["JWT_REFRESH_TOKEN_EXPIRES"] = timedelta(days=30)

# Initialize extensions
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)
CORS(app)
CORS(app, supports_credentials=True)
csrf = CSRFProtect(app)
csrf.init_app(app)

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

@app.route('/refresh', methods=['POST'])
@jwt_required(refresh=True)
def refresh():
    current_user = get_jwt_identity()
    new_access_token = create_access_token(identity=current_user)
    return jsonify(access_token=new_access_token)

@app.route('/<path:path>')
def serve_static_files(path):
    return send_from_directory('plant-swap/build', path)

@app.route('/')
def serve_react_app():
    return send_from_directory('plant-swap/build', 'index.html')

@app.route('/se.json')
def get_cities():
    try:
        # Open and load the se.json file
        with open('se.json', 'r', encoding='utf-8') as file:
            cities = json.load(file)
        return jsonify(cities)
    except Exception as e:
        # Handle errors if the file is missing or invalid
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)

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
        avatar=data['avatar']  
    )
    db.session.add(user)
    db.session.commit()
    return jsonify({"message": "User registered successfully!"})

@app.errorhandler(Exception)
def handle_exception(e):
    return jsonify({"error": str(e)}), 500

# Login Route
@app.route('/login', methods=['POST'])
def login():
    data = request.json
    user = User.query.filter_by(email=data['email']).first()
    if user and bcrypt.check_password_hash(user.password, data['password']):
        access_token = create_access_token(identity={'username': user.username, 'avatar': user.avatar})
        refresh_token = create_refresh_token(identity={'username': user.username, 'avatar': user.avatar})
        response = make_response(jsonify({"message": "Login successful!"}))
        response.set_cookie('access_token', access_token, httponly=True)
        response.set_cookie('refresh_token', refresh_token, httponly=True)
        return response
    return jsonify({"message": "Invalid credentials!"}), 401

@app.route('/users', methods=['GET'])
@jwt_required()
def get_users():
    users = User.query.all()
    user_data = [{"username": user.username, "email": user.email, "location": user.location, "avatar": user.avatar} for user in users]
    return jsonify(user_data)

# Main entry point
if __name__ == '__main__':
    initialize_database()  # Initialize the database before running the app
    app.run(debug=True)
