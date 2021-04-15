--DROP TABLE answers, keywords, questions, users;
--DROP SCHEMA QATest;

CREATE SCHEMA QATest;

CREATE TABLE users(
   user_id SERIAL UNIQUE,
   email_address       TEXT  NOT NULL,
   passwrd            TEXT NOT NULL,
   PRIMARY KEY(user_id),
   UNIQUE(email_adress)
);

CREATE TABLE questions(
	question_id SERIAL PRIMARY KEY,
	user_id INT REFERENCES users(user_id),
	question_title TEXT NOT NULL,
	question_text TEXT,
	date_asked TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE answers(
	answer_id SERIAL PRIMARY KEY,
	question_id INT REFERENCES questions(question_id),
	user_id INT REFERENCES users(user_id),
	answer_text TEXT NOT NULL,
	date_answered TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE keywords(
	keyword VARCHAR(100) NOT NULL,
	question_id INT REFERENCES questions(question_id)
);

/*
INSERT INTO users (email_address, passwrd)
VALUES ('aggelospip@gmail.com', '1223pass');

INSERT INTO questions (user_id, question_text)
VALUES (1, 'will this really work?');

SELECT * FROM users INNER JOIN questions ON users.user_id = questions.user_id;
*/
