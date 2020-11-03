DROP DATABASE IF EXISTS postgres;

\c postgres;

CREATE TABLE "users"
(
    id INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 15 CACHE 1 ),
    name text COLLATE pg_catalog."default",
    CONSTRAINT users_pkey PRIMARY KEY (id)
);

CREATE TABLE "visits"
(
    id INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 999999 CACHE 1 ),
    place_id TEXT COLLATE pg_catalog."default",
    time TIMESTAMP,
    name text COLLATE pg_catalog."default",
    user_id INTEGER,
    event text,
    CONSTRAINT visits_pkey PRIMARY KEY (id),
    CONSTRAINT user_id FOREIGN KEY (user_id)
        REFERENCES public.users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);

CREATE TABLE "sensorData"
(
    id INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 999999 CACHE 1 ),
    rssi INTEGER,
    temp INTEGER,
    name text COLLATE pg_catalog."default",
    user_id INTEGER,
    humidity INTEGER,
    pressure INTEGER,
    accelerationx INTEGER,
    accelerationy INTEGER,
    accelerationz INTEGER,
    batery INTEGER,
    tx INTEGER
    CONSTRAINT sensorData_pkey PRIMARY KEY (id),
    CONSTRAINT user_id FOREIGN KEY (user_id)
        REFERENCES public.users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);

\copy visits (name, place_id, time, event) FROM './VisitData.csv' DELIMITER ',' CSV HEADER;