
import { useSelector } from "react-redux";
import { StoryItem } from "./StoryItem";


export const StoriesList = () => {

    const {stories} = useSelector( state => state.stories );
 

    return (
    <div className="container col-10 mt-5 ">
        {/* <h3>Stories container</h3> */}
        {
            (stories.length > 0) &&
            stories.map( story => (
                <StoryItem 
                    key={story.id}
                    {...story}
                />
            ) )
        }
    </div>

  )
}
