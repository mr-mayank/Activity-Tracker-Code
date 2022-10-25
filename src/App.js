import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Navbar from './components/navbar.components';
import ExerciseList from './components/exercise-list.component';
import EditExercise from './components/edit-exercise.component';
import CreateExercise from './components/create-exercise.component';
import CreateUser from './components/create-user.component';
function App() {
  return (
    <div>
      <BrowserRouter>
      <div className="container">
        <Navbar />
        <Routes>
        <Route path="/" exact element={<ExerciseList />} />
        <Route path="/edit/:id" element={<EditExercise />} />
        <Route path="/create" element={<CreateExercise />} />
        <Route path="/user" element={<CreateUser />} />

        </Routes>
        </div>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
