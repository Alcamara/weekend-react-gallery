CREATE TABLE "gallery" (
"id" SERIAL PRIMARY KEY,
"path" VARCHAR(200) NOT NULL,
"description" VARCHAR(200) NOT NULL,
"likes" INTEGER
);

INSERT INTO "gallery" (path, description ,likes)
VALUES
('images/goat_small.jpg','Photo of a goat taken at Glacier National Park.',0),
('images/chun-li.jpg', 'Photo of Chun-li from Street Fighter 5', 0),
('images/Ken.jpg', 'Photo of Ken from Street Fighter 5', 0), 
('images/ryu.webp','Photo of Ryu from Street Fighter 5', 0), 
('images/juri.jpg', 'Photo of Juri from Street Fighter 5', 0);