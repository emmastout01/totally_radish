var express = require('express');
var router = express.Router();
var path = require('path');
var pool = require('../modules/pool.js');

//GET current ingredients;
router.get('/:ingredients', function (req, res) {
  console.log('we\'re here!');
  var ingredients = req.params.ingredients;
  console.log('ingredients', ingredients);
  pool.connect(function (err, client, done) {
    if (err) {
      res.sendStatus(500);
    }
  var query = "insert into stringParse (ingredient) select unnest(string_to_array(UPPER('" + ingredients + "'), ', '));";
    client.query(query, function (err, result) {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      }
      else {
        console.log('in second query', query);
        var secondQuery = "select * from vegan v inner join stringParse s on v.ingredient = s.ingredient;";
        client.query(secondQuery, function (err, result) {
          if (err) {
            console.log(err);
            res.sendStatus(500);
          }
          else {
            console.log('result.rows', result.rows);
            res.send(result.rows);
            console.log('in third query');
            var thirdQuery = "truncate stringParse;";
            client.query(thirdQuery, function (err, result) {
              if (err) {
                console.log(err);
                res.sendStatus(500);
              }
              else {
                console.log('done with 3rd query');
              }
            })
          }
        })
      }
    });
  });
});

module.exports = router;
