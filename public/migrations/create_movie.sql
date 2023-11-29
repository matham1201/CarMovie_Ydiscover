CREATE TABLE IF NOT EXISTS movie (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    year INTEGER NOT NULL,
    genre TEXT NOT NULL,
    rating INTEGER NOT NULL,
    description TEXT NOT NULL,
    image TEXT NOT NULL
);
``` 