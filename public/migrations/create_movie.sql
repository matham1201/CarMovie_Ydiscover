CREATE TABLE IF NOT EXISTS movie (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    year INTEGER NOT NULL,
    genre TEXT NOT NULL,
    rating INTEGER NOT NULL
    id_car INTEGER NOT NULL,
    FOREIGN KEY (id_car) REFERENCES car(id)
);

``` 