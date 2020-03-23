require('../../node_modules/neo4j-driver/lib/browser/neo4j-web.min.js');
var Movie = require('./Movie');
var _ = require('lodash');
var neo4j = require('neo4j-driver');
var driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "Hailee613"));

function Test(queryString) {
    var session = driver.session();
    return session
      .run(
        'MATCH (movie:Movie) \
        WHERE movie.title =~ $title \
        RETURN movie',
        {title: '(?i).*' + queryString + '.*'}
      )
      .then(result => {
        session.close();
        return result.records.map(record => {
          console.log('hi')
          console.log(new Movie(record.get('movie')).title)
          return new Movie(record.get('movie')).title;
          
        });
      })
      .catch(error => {
        session.close();
        throw error;
      });
  }

  module.exports = Test;
