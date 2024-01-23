CREATE TABLE IF NOT EXISTS car (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    model TEXT NOT NULL,
    year_production INTEGER NOT NULL,
    price INTEGER NOT NULL,
    class TEXT NOT NULL,
    id_car_engine INTEGER NOT NULL,
    id_car_weight_performance INTEGER NOT NULL,
    FOREIGN KEY (id_car_engine) REFERENCES car_engine(id),
    FOREIGN KEY (id_car_weight_performance) REFERENCES car_weight_performance(id)
);

CREATE TABLE IF NOT EXISTS car_engine (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    power_max INTEGER NOT NULL,
    energy_type TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS car_weight_performance (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    weight INTEGER NOT NULL,
    acceleration INTEGER NOT NULL,
    max_speed INTEGER NOT NULL
);

