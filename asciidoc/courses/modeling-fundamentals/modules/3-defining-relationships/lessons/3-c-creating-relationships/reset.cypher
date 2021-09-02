MATCH (n)
DETACH DELETE n;
MERGE (apollo:Movie {title: 'Apollo 13', tmdbId: 568, released: '1995-06-30', imdbRating: 7.6, genres: ['Drama', 'Adventure', 'IMAX']})
MERGE (tom:Person {name: 'Tom Hanks', tmdbId: 31, born: '1956-07-09'})
MERGE (meg:Person {name: 'Meg Ryan', tmdbId: 5344, born: '1961-11-19'})
MERGE (danny:Person {name: 'Danny DeVito', tmdbId: 518, born: '1944-11-17'})
MERGE (sleep:Movie {title: 'Sleepless in Seattle', tmdbId: 858, released: '1993-06-25', imdbRating: 6.8, genres: ['Comedy', 'Drama', 'Romance']})
MERGE (hoffa:Movie {title: 'Hoffa', tmdbId: 10410, released: '1992-12-25', imdbRating: 6.6, genres: ['Crime', 'Drama']})
MERGE (jack:Person {name: 'Jack Nicholson', tmdbId: 514, born: '1937-04-22'})
MERGE (:User {name: 'Sandy Jones', userId: 534})
MERGE (:User {name: 'Clinton Spencer', userId: 105})
MERGE (tom)-[:ACTED_IN {role: 'Jim Lovell'}]->(apollo)
MERGE (tom)-[:ACTED_IN {role: 'Sam Baldwin'}]->(sleep)
MERGE (meg)-[:ACTED_IN {role: 'Annie Reed'}]->(sleep)
MERGE (danny)-[:ACTED_IN {role: 'Bobby Ciaro'}]->(hoffa)
MERGE (danny)-[:DIRECTED]->(hoffa)
MERGE (jack)-[:ACTED_IN {role: 'Jimmy Hoffa'}]->(hoffa)