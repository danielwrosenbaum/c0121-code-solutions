select "a"."line1" as "line1",
      "a"."district" as "district",
      "city"."name" as "cityName",
      "country"."name" as "countryName"
    from "addresses" as "a"
    join "cities" as "city" using ("cityId")
    join "countries" as "country" using ("countryId");
