import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { setActiveStory } from "../actions/stories";
import { LoginScreen } from "../components/LoginScreen"
import { DashboardRouter } from "./DashboardRouter"


export const AppRouter = () => {

    const activeStory = JSON.parse(localStorage.getItem("activeStory"));

    const dispatch = useDispatch();
    dispatch(setActiveStory(activeStory));

    console.log(activeStory);

  return (

    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<LoginScreen/> } />

            <Route path="/*" element={<DashboardRouter/>} />
        </Routes>
    </BrowserRouter>
  )
}
