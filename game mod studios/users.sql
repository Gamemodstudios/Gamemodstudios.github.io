-- Users table
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Sessions table
CREATE TABLE sessions (
    session_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    token VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Optional: User roles table
CREATE TABLE user_roles (
    user_id INT REFERENCES users(user_id),
    role VARCHAR(50) NOT NULL,
    PRIMARY KEY (user_id, role)
);

-- Optional: Password reset tokens table
CREATE TABLE password_reset_tokens (
    user_id INT REFERENCES users(user_id),
    token VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Index on email for faster lookups
CREATE INDEX idx_email ON users(email);

-- Index on token for faster session lookups
CREATE INDEX idx_token ON sessions(token);
