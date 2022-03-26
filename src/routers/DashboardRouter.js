
import { Route, Routes } from "react-router-dom"
import { StoryScreen } from "../components/newsStories/StoryScreen"
import { TopStoriesScreen } from "../components/newsStories/TopStoriesScreen"
import { Navbar } from "../components/ui/Navbar"


export const DashboardRouter = () => {

    
  return (
      <>
        <Navbar />
        <div className="container">
            <Routes>
                <Route path="topstories" element={<TopStoriesScreen/>}/>
                <Route path="story/:storyId" element={<StoryScreen />}/>
                <Route path="/" element={<TopStoriesScreen/>}/>
                
            </Routes>
            
        </div>
      </>
  )
}


