const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema
(
  {
        day: 
        {
          type: Date,
          default:() => new Date()
        },
        exercise: 
    [
      {
            type: 
            {
              type: String,
              trim: true,
              required: "Enter an exercise type"
            },

            name: 
            {
              type: String,
              trim: true,
              required: "Enter an exercise name"
            },

            duration: 
            {
              type: Number,
              required: "Enter an exercise duration in minutes"
            },

            weight:
            {
              type: Number
            },

            reps:
            {
              type: Number
            },

            sets:
            {
              type: Number
            },

            sets:
            {
              type: Number
            },

            distance:
            {
              type: Number
            }
      }
    ]
  },


    {
      toJOSON: {
        virtuals: true
      }
    }

);

workoutSchema.virtual("totalDiration").get(function(){
  return this.exercises.reduce((total,exercise) => {
    return total + exercise.duration;
  },0);
});

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;
