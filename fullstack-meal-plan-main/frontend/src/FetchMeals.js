import axios from "axios";

const baseUrl = 'meal-planner-skgh.vercel.app'

const getAllMeals = (setMeal) => {
  axios.get("https://meal-planner-2-hh9h.onrender.com/").then(({ data }) => {
    setMeal(data)
  });
};

const addMeal = (title, setTitle, setMeal) => {
  axios.post(`https://meal-planner-2-hh9h.onrender.com/saveMeals`, { title }).then(() => {
    setTitle("")
    getAllMeals(setMeal)
  });
};

const editMeal = (mealId, title, setTitle,setMeal, setEditing) => {
  axios.put(`https://meal-planner-2-hh9h.onrender.com/editMeal`, { _id: mealId, title }).then(() => {
    setTitle("")
    setEditing(false)
    getAllMeals(setMeal)
  });
}

const deleteMeal = (mealId, setMeal) => {
  axios.delete(`https://meal-planner-2-hh9h.onrender.com/deleteMeal`, {data : { _id: mealId }}).then(() => {
    getAllMeals(setMeal)
  });
}

export { getAllMeals, addMeal, editMeal, deleteMeal };
