-- select "f"."title"
--   from "films" as "f"
--   limit 10;

-- with cte_revenue as (
  select "f"."title" as "filmTitle",
    sum ("p"."amount") as "totalAmount"
  from "films" as "f"
  join "inventory" using ("filmId")
  join "rentals" using ("inventoryId")
  join "payments" as "p" using ("rentalId")
  group by "filmTitle"
  order by "totalAmount" desc
  limit 5;
-- )
-- with cte_cost as (
  select "f"."title" as "filmTitle",
    -- sum ("p"."amount") as "totalAmount"
    sum ("f"."replacementCost") as "totalCost"
  from "films" as "f"
  join "inventory" using ("filmId")
  -- join "rentals" using ("inventoryId")
  -- join "payments" as "p" using ("rentalId")
  group by "filmTitle"
  order by "totalCost" desc
  limit 5;
-- )
