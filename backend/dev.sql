CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) not null,
  password varchar(255) not null,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (email, password) VALUES
('ankiney@gmail.com', '$2b$10$hNxUtnh5foMVdGCm3lb6XOUrTyY6GViN1CkhEy1.PSrXR00INbkEK'),
('ankiney2004@gmail.com', '$2b$10$M0nNF84HguXfEQvG9C.QDOymzC/8SC6eCLiSv3a5WRApkOggMHrbO'),
('ankiney2000@gmail.com', '$2b$10$k1iwSTHMe//b.uCbtELpX.3mJoU8GA1QI7ZVW/Q6q4kJ5UbS.isSi');