--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.1
-- Dumped by pg_dump version 9.6.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: car; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE car (
    id integer NOT NULL,
    item_number character varying(10) NOT NULL,
    vin character varying(250) NOT NULL,
    car_name character varying(250) NOT NULL,
    release_year integer NOT NULL,
    min_price money NOT NULL,
    max_price money NOT NULL,
    mileage numeric NOT NULL,
    cylinders character varying(10),
    city_mpg integer,
    highway_mpg integer,
    engine numeric,
    views integer DEFAULT 0,
    saves integer DEFAULT 0,
    shares integer DEFAULT 0
);


--
-- Name: car_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE car_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: car_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE car_id_seq OWNED BY car.id;


--
-- Name: car id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY car ALTER COLUMN id SET DEFAULT nextval('car_id_seq'::regclass);


--
-- Data for Name: car; Type: TABLE DATA; Schema: public; Owner: -
--

COPY car (id, item_number, vin, car_name, release_year, min_price, max_price, mileage, cylinders, city_mpg, highway_mpg, engine, views, saves, shares) FROM stdin;
1	1395P	3GNDA13D96S631406	Ford Focus	2012	$8,500.00	$9,000.00	200000	L4	20	25	1.3	37	20	15
\.


--
-- Name: car_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('car_id_seq', 1, true);


--
-- Name: car car_car_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY car
    ADD CONSTRAINT car_car_name_key UNIQUE (car_name);


--
-- Name: car car_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY car
    ADD CONSTRAINT car_pkey PRIMARY KEY (id);


--
-- Name: car car_vin_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY car
    ADD CONSTRAINT car_vin_key UNIQUE (vin);


--
-- PostgreSQL database dump complete
--

