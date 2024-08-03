import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { IoMdAddCircle } from "react-icons/io";

export default function DialogDemo() {
  const [meal, setMeal] = useState({
    name: "",
    calories: "",
    protein: "",
    fat: "",
  });
  const [list, setList] = useState(
    () => JSON.parse(localStorage.getItem("meallist")) || []
  );

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("meallist"));
    if (storedList) {
      setList(storedList);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("meallist", JSON.stringify(list));
  }, [list]);

  const handleNameChange = (e) => {
    setMeal({ ...meal, name: e.target.value });
  };

  const handleCaloriesChange = (e) => {
    setMeal({ ...meal, calories: e.target.value });
  };

  const handleProteinChange = (e) => {
    setMeal({ ...meal, protein: e.target.value });
  };

  const handleFatChange = (e) => {
    setMeal({ ...meal, fat: e.target.value });
  };

  const addArrayofMeal = () => {
    if (meal.name && meal.calories && meal.protein && meal.fat) {
      setList((prevArray) => [...prevArray, meal]);
      setMeal({ name: "", calories: "", protein: "", fat: "" });
      console.log(meal);
      console.log(list);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <IoMdAddCircle className=" text-4xl cursor-pointer" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add a Meal</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Name of the meal"
              className="col-span-3"
              value={meal.name}
              onChange={handleNameChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="calories" className="text-right">
              Calories
            </Label>
            <Input
              id="calories"
              defaultValue="0"
              type="number"
              className="col-span-3"
              value={meal.calories}
              onChange={handleCaloriesChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="protein" className="text-right">
              Protein
            </Label>
            <Input
              id="protein"
              defaultValue="0"
              type="number"
              className="col-span-3"
              value={meal.protein}
              onChange={handleProteinChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="fat" className="text-right">
              Fat
            </Label>
            <Input
              id="fat"
              defaultValue="0"
              type="number"
              className="col-span-3"
              value={meal.fat}
              onChange={handleFatChange}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={addArrayofMeal}>
            Add
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
