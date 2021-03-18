select "c"."name" as "categoryName",
  count ("c".*) as "totalCategories"
  from "categories" as "c"
  join "filmCategory" using ("categoryId")
  join "castMembers" using ("filmId")
  join "actors" as "a" using ("actorId")
  where "a"."firstName" = 'Lisa'
    and  "a"."lastName" = 'Monroe'
  group by "c"."name";
