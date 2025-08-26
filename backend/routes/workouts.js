const express= require ("express");
const router= express.Router();
const db= require("../db");



// Get all workouts
router.get("/", (req, res)=>{
    db.query("SELECT * FROM workouts", (err, results)=>{
        if (err) return res.status (500).json(err);
        res.json(results);

    });
});


// Add new workout
router. post("/", (req,res)=>{
    const {name, sets, reps, date, notes}= req.body;
    db.query(
        "INSERT INTO workouts(name, sets, reps, date, notes) VALUES(?,?,?,?,?)",
        [name, sets, reps, date, notes],
        (err, result)=>{
            if (err) return res .status(500).json(err);
            res.json({id: result.insertId, name, sets, reps, date, notes});
        }
    );
});


// Update workout
router.put("/:id", (req,res)=>{
    const{id}= req.params;
    const {name, sets, reps, date, notes}= req.body;
    db.query(
        "UPDATE workouts SET name=?, sets=?, reps=?, date=?, notes=? WHERE id=?",
        [name,sets,reps,date, notes,id],
        (err)=>{
            if(err)return res.status(500).json(err);
            res.json({message:"Workout updated"});
        }
    );

  

});

  // Delete workout
    router.delete ("/:id", (req,res)=>{
        const {id}=req.params;
        db.query("DELETE FROM workouts WHERE id=?",
             [id], 
             (err)=>{
               if (err) return res.status(500).json(err);
               res.json({message: "Workout deleted"});

             }
            );
    });


    module.exports= router;