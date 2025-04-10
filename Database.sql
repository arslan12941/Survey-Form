CREATE DATABASE survey;
USE survey;

CREATE TABLE IF NOT EXISTS survey_responses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    age INT CHECK (age BETWEEN 1 AND 120),
    satisfaction TINYINT CHECK (satisfaction BETWEEN 1 AND 5) NOT NULL,
    recommend ENUM('Yes', 'No') NOT NULL,
    improvements TEXT NOT NULL,
    comments VARCHAR(500),
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
