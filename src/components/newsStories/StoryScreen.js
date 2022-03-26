import moment from 'moment';
import React, { useEffect, useState} from 'react'
import { useSelector } from 'react-redux';
import ReactHtmlParser  from 'react-html-parser';
import { CommentSection } from './CommentSection';
import './StoryItem.css';
import { LoadComents } from '../../helpers/getStories';


 
export const StoryScreen = () => {

    const {active} = useSelector( state => state.stories );
    
    localStorage.setItem("activeStory", JSON.stringify(active));

    const [activeComments, setActiveComments] = useState({});
    const [checking, setChecking] = useState(true);

    
        
    
    useEffect(async () => {
        let isMounted = true;
          async function fetchMyAPI () {
            const response = await LoadComents(active.kids);

            await setActiveComments(response)
            if (isMounted) {
                setChecking(false);

            }
          }
      
          fetchMyAPI()

        return () => { isMounted = false };

    }, [setChecking, setActiveComments])

    
  return (
    <div >
        <div className="shadow card mt-4"> 

            <div className="card-header">
                <h2 className="mt-3">{active.title}</h2>

            </div>
            <div className="card-body">
                <div className="row">
                    <div className="row col-md-8 col-sm-12">
                        <small className="mb-1">By "{active.by}"</small>
                        <small className="mb-3">{moment(active.time *1000).format('MMM DD YYYY, h:mm:ss a')}</small>
                    </div>
                    <div className="row col-md-4 col-sm-12">
                        <small className="mb-1">Score:</small>
                        <small className="mb-3">{active.score}</small>
                    </div>
                    <hr />


                </div>

                <div className='row'>
                    
                    <div>

                            {ReactHtmlParser(active.text)}
                    </div>
                    
                    {
                        (active.url) &&
                        <div>
                            <span className="me-3">Source:</span>

                            <a
                                href={active.url}
                            >
                                {active.url}
                            </a>
                        </div>
                    }
                    

                </div>
            </div>

        </div>
           
        {
            (!checking ) &&
            <div className="container col-10 ">
                
                <h4 className = "fw-bold mt-4 text-black-50">Comment section</h4>
                <CommentSection activeComments={activeComments} />
            </div>

        }
    </div>
  )
}
