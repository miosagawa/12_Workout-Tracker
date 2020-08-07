const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then(dbworkout => {
      res.json(dbworkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.push("/api/workouts/:id", ({ body }, res) => {
  Workout.findByIdAndUpdate(
      params.id,
      {$push:{exercises:body}},
      {new: true,runValidators: true}
  )
    .then(dbworkout => {
      res.json(dbworkout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/api/Workouts", (req, res) => {
  Workout.find()
    .then(dbworkout => {
      res.json(dbworkout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/api/Workouts/range", (req, res) => {
    Workout.find({}).limit(7)
      .then(dbworkout => {
          console.log(bworkout)
        res.json(dbworkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

router.delete("/api/Workouts", ({ body }, res) => {
    Workout.findByIdAndUpdate(body.id)
      .then({} => {
        res.json(true);
      })
      .catch(err => {
        res.json(err);
      });
  });

module.exports = router;
