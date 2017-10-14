-- Given the CITY and COUNTRY tables, query the sum of the populations of all cities where the CONTINENT is 'Asia'.

-- Note: CITY.CountryCode and COUNTRY.Code are matching key columns.

-- Input Format

-- The CITY and COUNTRY tables are described as follows:

/*

CITY

Field                   | Type
------------------------|------------------------
ID                      | NUMBER
NAME                    | VARCHAR2(17)
COUNTRYCODE             | VARCHAR2(3)
DISTRICT                | VARCHAR2(20)
POPULATION              | NUMBER


COUNTRY

Field                       | Type
----------------------------|----------------------------
CODE                        | NUMBER
NAME                        | VARCHAR2(17)
CONTINENT                   | VARCHAR2(3)
REGION                      | VARCHAR2(20)
SURFACEAREA                 | NUMBER
INDEPYEAR                   | VARCHAR2(20)
POPULATION                  | NUMBER
LIFEEXPECTANCY              | VARCHAR2(20)
GNP                         | NUMBER
GNPOLD                      | VARCHAR2(20)
LOCALNAME                   | VARCHAR2(20)
GOVERNMENTFORM              | VARCHAR2(20)
HEADOFSTATE                 | VARCHAR2(20)
CAPITAL                     | VARCHAR2(20)
CODE2                       | VARCHAR2(20)

*/

SELECT SUM(CITY.POPULATION) FROM CITY, COUNTRY WHERE CITY.COUNTRYCODE = COUNTRY.CODE AND COUNTRY.CONTINENT = 'Asia';