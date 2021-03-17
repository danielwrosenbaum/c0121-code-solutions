select "filmId",
      "title",
      "rentalRate"
from "films"
where "rentalRate" < '1.00'
limit 50;
