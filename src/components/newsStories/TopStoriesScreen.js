import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { clearActive, startLoadingStories } from '../../actions/stories';

import { StoriesList } from './StoriesList'

export const TopStoriesScreen = () => {
    
    const dispatch = useDispatch();
    

    useEffect(() => {
      dispatch(startLoadingStories('topstories'));

      dispatch(clearActive());
      localStorage.setItem("activeStory", JSON.stringify(null));
      
    }, [dispatch]);

  return (
    <div >


        <h1 className="text-center mt-3">Top 10 Stories</h1>

        <StoriesList />
       
    </div>
  )
}
