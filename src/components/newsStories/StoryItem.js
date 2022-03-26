import moment from 'moment';
import React from 'react'
import { useDispatch } from 'react-redux';

import { setActiveStory,} from '../../actions/stories';
import { useNavigate } from 'react-router-dom';
import ReactHtmlParser  from 'react-html-parser';

import './StoryItem.css';


export const StoryItem = (story) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleOnClick = async() =>{

        await dispatch(setActiveStory(story));
        navigate(`/story/${story.id}`);

    }

    const date = moment(story.time*1000).fromNow();


  return (
    <div className="shadow card mb-3 news__card" onClick={handleOnClick} >
        <div className="card-header ">
            <h5 className="card-title">{story.title}</h5>
            <small className="text-muted"> {date}</small>
        </div>
        {
            (story.text)&&
            <div className="card-body">
                <p className="card-text news__text">
                    { ReactHtmlParser(story.text)}
                </p>

            </div>

        }
    </div>
  )
}
