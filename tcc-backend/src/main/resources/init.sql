CREATE TABLE enterprise(
	id bigserial NOT NULL,
	entp_name TEXT NOT NULL,
	PRIMARY KEY (id)
)

CREATE TABLE mural(
	id bigserial NOT NULL,
	mura_name TEXT NOT NULL,
	entp_id int NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (entp_id) REFERENCES enterprise(id)
)

CREATE TABLE mural_item(
	id bigserial NOT NULL,
	title TEXT NOT NULL,
	description TEXT,
	mura_id int NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (mura_id) REFERENCES mural(id)
)

CREATE TABLE user_system(
	id bigserial NOT NULL,
	user_name TEXT NOT NULL,
	user_password TEXT NOT NULL,
	email TEXT NOT NULL,
	office TEXT,
	entp_id INT NOT NULL,
	ic_admin BOOLEAN NOT NULL,
	ic_use BOOLEAN NOT NULL,
	ic_eligible BOOLEAN NOT NULL,
	ic_election BOOLEAN NOT NULL,
	ic_first_access BOOLEAN NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (entp_id) REFERENCES enterprise(id)
)

CREATE TABLE result(
	id bigserial NOT NULL,
	user_id INT NOT NULL,
	ic_year BOOLEAN NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (user_id) REFERENCES user_system(id)
)

CREATE TABLE voting(
	id bigserial NOT NULL,
	entp_id INT NOT NULL,
	month_year INT NOT NULL,
	resu_id INT NOT NULL,
	date_oppened TIMESTAMP NOT NULL,
	date_planned_closure TIMESTAMP NOT NULL,
	date_closure TIMESTAMP NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (entp_id) REFERENCES enterprise(id),
	FOREIGN KEY (resu_id) REFERENCES result(id)
)

CREATE TABLE vote(
	id bigserial NOT NULL,
	voti_id INT NOT NULL,
	user_selected INT NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (user_selected) REFERENCES user_system(id),
	FOREIGN KEY (voti_id) REFERENCES voting(id)
)

CREATE TABLE participant(
	id bigserial NOT NULL,
	voti_id INT NOT NULL,
	user_id INT NOT NULL,
	ic_voted BOOLEAN NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (user_id) REFERENCES user_system(id),
	FOREIGN KEY (voti_id) REFERENCES voting(id)
)