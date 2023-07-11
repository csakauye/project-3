DROP TABLE ufo;

CREATE TABLE ufo (
	" " INT PRIMARY KEY,
	"Country" VARCHAR,
	"City" VARCHAR, 
	"State" VARCHAR,
	"Shape" VARCHAR,
	"Summary" TEXT,
	"lat" DECIMAL,
	"lng" DECIMAL,
	"Clean Date" DATE
);

SELECT * FROM ufo

ALTER TABLE ufo
RENAME COLUMN "Clean Date" to "Clean_Date";
