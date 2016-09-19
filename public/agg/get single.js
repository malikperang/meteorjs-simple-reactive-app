db.signals.aggregate(

  // Pipeline
  [
    // Stage 1
    {
      $sort: {
      	date:-1
      }
    },

    // Stage 2
    {
      $limit: 1
    }

  ]

  // Created with 3T MongoChef, the GUI for MongoDB - http://3t.io/mongochef

);
