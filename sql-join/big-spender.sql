select "p"."amount" as "payment amount",
      "c"."firstName" as "firstName",
      "c"."lastName" as "lastName"
  from "payments" as "p"
  join "customers" as "c" using ("customerId")
  order by "amount" desc
  limit 10;
