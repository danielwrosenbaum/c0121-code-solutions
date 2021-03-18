select "c"."name" as "countryName",
  count ("ci".*) as "totalCities"
  from "countries" as "c"
  join "cities" as "ci" using ("countryId")
  group by "c"."name";
