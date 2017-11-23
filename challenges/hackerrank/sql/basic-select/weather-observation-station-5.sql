-- Query the two cities in STATION with the shortest and longest CITY names, as well as their respective lengths (i.e.: number of characters in the name).
-- If there is more than one smallest or largest city, choose the one that comes first when ordered alphabetically.

-- Input Format

-- The STATION table is described as follows:

/* 
STATION

Field   | Type
--------|--------
ID      | NUMBER
CITY    | VARCHAR2(21)
STATE   | VARCHAR2(2)
LAT_N   | NUMBER
LONG_W  | NUMBER

where LAT_N is the northern latitude and LONG_W is the western longitude.

Sample Input

Let's say that CITY only has four entries: DEF, ABC, PQRS and WXY

Sample Output

ABC 3
PQRS 4

Explanation

When ordered alphabetically, the CITY names are listed as ABC, DEF, PQRS, and WXY, with the respective lengths  and . 
The longest-named city is obviously PQRS, but there are  options for shortest-named city; we choose ABC, because it comes first alphabetically.

Note 
You can write two separate queries to get the desired output. It need not be a single query. 
*/

SELECT * FROM (SELECT CITY, CHAR_LENGTH(CITY) FROM STATION ORDER BY CHAR_LENGTH(CITY) ASC, CITY ASC LIMIT 1) a
UNION ALL
SELECT * FROM (SELECT CITY, CHAR_LENGTH(CITY) FROM STATION ORDER BY CHAR_LENGTH(CITY) DESC, CITY ASC LIMIT 1) b

-- MYSQL FIND THE LENGTH OF STRING
-- LENGTH() Represent the length in bytes.
-- CHAR_LENGTH() Represent the number of characters ie. SELECT CHAR_LENGTH('abcde') == 5 SELECT CHAR_LENGTH('안녕') == 2
-- BIT_LENGTH() Represent the length in bit 
-- MYSQL UTF8: KOREAN 3 bytes ENGLISH 1 byte