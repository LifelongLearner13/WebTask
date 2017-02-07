DROP TABLE IF EXISTS "car" CASCADE;

CREATE TABLE "car" (
  id SERIAL PRIMARY KEY,
  item_number VARCHAR(10) NOT NULL,
  vin VARCHAR(250) NOT NULL UNIQUE,
  car_name VARCHAR(250) NOT NULL UNIQUE,
  release_year INTEGER NOT NULL,
  min_price MONEY NOT NULL,
  max_price MONEY NOT NULL,
  mileage DECIMAL NOT NULL,
  cylinders INTEGER,
  city_mpg INTEGER,
  highway_mpg INTEGER,
  engine DECIMAL,
  views INTEGER DEFAULT 0,
  saves INTEGER DEFAULT 0,
  shares INTEGER DEFAULT 0
);
