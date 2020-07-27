# Sql

## Intro

Sql is short for Structured Query Language and is an old language! It behaves differently than other languages we have learned so far including syntax and structure. It was made by some super math nerds so just know that going in.

JS curly braces came from SQL. Do/end in Ruby came from Perl. If statements, which both have come from even older programming languages. So we see a gradual evolution of languages through time. However, SQL is the weird unicorn that doesn't fall into these rules.

SQL is a full blown programming language but it is made for a very specific niche, which is database structuring. Databases are incredibly important to full-stack development.

## Schema
Schema is a map of all the tables and fields. It's ok to think of them like spreadsheets with columns and rows where each table is a different spreadsheet.
- Tables can house different sets on info but the schema is all of the tables

_create a new table called people_

_create a new table called books_

- All of the tables we will make today can also be called relations. The word relations is gonna call back our math nerd friends. It has to do with Relational Algebra. Which is the idea that all problems can be solved using models. Basically we have a set of tables that can relate to each other. Thus, relational.

## Model
Model can be thought of as the summary of the table. The name of the table, the fields or columns, and the datatypes held in each column.

- our table is called people, it consists of a name, a phone number, and a DOB. All are strings except DOB.

## Keys
This is the unique identifier that will refer back to a specific row in a model. Different than arrays, etc., id's start at 1. The primary key is unchangeable and allows us to not be confused when two rows are very similar!

What could be an example of a primary key that people have? SSN, fingerprint, etc.

_assign id's to people and books_

No matter what cells might change in my table, I always know that record 1 is record 1.

Now let's create a relationship between the tables, using the primary keys we have identified.

_create a new table to link people to books_

#### Objectives Met Thus Far

- We understand why it's called relations
- We have a way to visualize what a model is (excel)

## Postgres

So Postgresql or Postgres is one sort of SQL. Let's talk about querying. Querying is simply asking the DB a question, with the hopes of getting the information we want back. Queries are important because we want to have a way to receive specific information from our database based on certain parameters.

If I have my giant spreadsheet of information, that's great. But I need a way that I can extract particular data. Your data is really only as powerful as what you do with it. Having massive amount of data is essentially worthless if you can't query it effectively. Especially when you get into really large data sets AKA "big data."

For example, if I was going to cook dinner, I'm not going to pull every item out of my fridge and cabinets, then go searching through that pile to find my ingredients. I have a set of internal instructions to fetch the necessary items.

_go into terminal and open up psql_

- Initially, it'll throw and error. Don't freak out. Postgres is looking for a database in your computer with the same name as your username. It's looking for a database called "rachael."
- Just type psql + the name of the database you're looking to query
- Dump using \d
- In my mental spreadsheet, I know I have a tab for city, country, and countrylanguage
- Let's look at all the items in one of these tables!

select * from country
select * from city
select * from countrylanguage

Above, we used _select_ to query our database. **SELECT** specifies which columns you're going to want to return from the database. Here, we are saying `select ALL from country`

- Now let's look at it in our visual tool which is pgadmin.

_open pgadmin_
_start a server, etc._
_go into schema/tables/country/columns to see pieces of the table_

Above, we used `select *`. But what if we don't want to select the entire DB? Hint: you probably don't want to do that. You can specify certain columns after the key word `select`.

`SELECT name, continent, region
FROM country`

Let's get more specific! Using a `where` clause after the name of the db we are querying, we can add more specificity.

`SELECT name, continent, region, lifeexpectancy
FROM country
where lifeexpectancy < 50`

Another way to be more specific is with `IN`. `IN` refers to a set of values.

`SELECT name, population, governmentform
FROM country
WHERE governmentform
IN ('Republic', 'Monarchy')`

Use the `LIKE` operator when you're trying to return data that is similar. Here, a `%` is sort of like a wild card that can represent any character.

`SELECT name, population, governmentform
FROM country
WHERE governmentform
LIKE '%onarchy'`

Use `NOT` to keep certain rows from appearing in your query, while `AND` allows you to add another perameter to your search.

`SELECT name, continent, region, lifeexpectancy
FROM country
WHERE
NOT(continent='North America')
AND lifeexpectancy > 50`

`SELECT name, continent, indepyear
FROM country
WHERE indepyear >= -2000
AND indepyear <= 1099`

`OR` allows for a more broad search, allowing multiple conditions to be met.

`SELECT code, name, population, gnp
FROM country
WHERE population > 1e+8
OR gnp > 1e+6`

Another keyword you can use is `BETWEEN`.

`SELECT name, population
FROM country
WHERE population
BETWEEN 250000
AND 500000`

Let's use an example from above and put the data into a specific order that would be easy for human eyes to read using `ORDER BY`.

`SELECT name, continent, indepyear
FROM country
WHERE indepyear >= -2000
AND indepyear <= 1099
ORDER BY indepyear`

Now let's flip it on it's head and reverse the order

`SELECT name, continent, indepyear
FROM country
WHERE indepyear >= -2000
AND indepyear <= 1099
ORDER BY indepyear DESC`

Maybe we don't want every single item, we just want say, the top 3 of a group, from oldest to newest.

`SELECT name, continent, indepyear
FROM country
WHERE indepyear >= -2000
AND indepyear <= 1099
ORDER BY indepyear
LIMIT 3`

AS

`AS` creates an alias for an additional column that will show up in your query results.
Think of it like a variable that will house a specific set of information. The alias will be another selection!

`SELECT name, surfacearea, population,
population / surfacearea AS people_per_mile
FROM country
WHERE population >  
ORDER BY people_per_mile DESC
LIMIT 10`

WITH
`WITH` is similar to `AS` but it creates an alias for your `SELECT` statement.

`WITH high_life_expectancy_countries AS (
  SELECT name, lifeexpectancy, gnp
  FROM country
  WHERE lifeexpectancy > 70
  )
SELECT name, lifeexpectancy, gnp
FROM high_life_expectancy_countries
ORDER BY lifeexpectancy DESC`

NULL

Null means "no value"!! Null is the absence of a value, meaning it is equal to no other thing, including itself, because it does not exist.

When we select all folrm country, we can see some null values. Let's see how we can account for those.

`SELECT name, indepyear
FROM country
WHERE indepyear IS NOT NULL
ORDER BY indepyear`

`SELECT name, indepyear
FROM country
WHERE indepyear IS NULL
ORDER BY indepyear`

AGGREGATE FUNCTIONS

Aggregate functions do exactly that, aggregate information.

`SELECT SUM(population)
FROM country;`

`SELECT SUM(surfacearea)
FROM country;`

`SELECT language, COUNT(*)
FROM countrylanguage
GROUP BY language
ORDER BY count DESC
LIMIT 5`

GROUP BY

Above, you see that we used `GROUP BY`. That will group together rows that have the same data. It can either be used in the SELECT or in funcitons like we see above like COUNT or AVG.

`SELECT region, AVG(lifeexpectancy)
FROM country
GROUP BY region`

Here we can see how many countries are in a particular region using COUNT and GROUP BY.

`SELECT region, COUNT(name)
FROM country
WHERE region='South America'
GROUP BY region`
