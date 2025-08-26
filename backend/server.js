
const express= require("express");
const cors=require("cors");


const app= express();
app.use(cors());
app.use(express.json());


//Routes
const workoutRoutes= require("./routes/workouts");
app.use("/workouts", workoutRoutes);


const PORT =5000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
