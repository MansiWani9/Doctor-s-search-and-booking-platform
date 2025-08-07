CREATE DATABASE practo;
USE practo;

CREATE TABLE doctor (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100),
  specialization VARCHAR(100),
  location VARCHAR(100),
  experience INT,
  consultation_fee INT,
  rating INT,
  patient_stories INT
);

INSERT INTO doctor (name, specialization, location, experience, consultation_fee, rating, patient_stories) VALUES
('Aesthetic Heart Dermatology', 'Dermatologist', 'Jayanagar', 12, 800, 97, 159),
('Dr. Sheelavathi Natraj', 'Dermatologist', 'JP Nagar, Bangalore', 21, 800, 94, 1506);
