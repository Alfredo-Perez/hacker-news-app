import moment from 'moment';
import { useEffect, useState } from 'react';
import ReactHtmlParser  from 'react-html-parser';
import {  LoadComents } from '../../helpers/getStories';
import { CommentSection } from './CommentSection';

export const CommentInfo = (comment) => {
   
    const [activeComments, setActiveComments] = useState({});
    const [checking, setChecking] = useState(false);
        
    useEffect(async () => {
          async function fetchMyAPI () {
            if(comment.kids){
              const response = await LoadComents(comment.kids);
  
              await setActiveComments(response)


            }
          }
          fetchMyAPI()

    }, [setChecking, setActiveComments, comment.kids])

    const handleClick = () => {
      setChecking(!checking)
    }

    
    
  return (
    < >{

        (!comment.deleted && !comment.dead) && 
        <div className="mt-4">



            <div className="row ">
              <div className="col-12 col-sm-6 col-md-3 fw-bold">
                {comment.by}
              </div>
              <div className="col-12 col-sm-6 col-md-3 fw-bold">
                {moment(comment.time*1000).fromNow()}
              </div>
            </div>

            <div className="mt-3">
              <div>
                  {ReactHtmlParser(comment.text)}
              </div>

            </div>
            {
              (comment.kids > 0) &&
              <button
                className="btn btn-outline-secondary"
                onClick={ handleClick }
              >
                Load responses
              </button>
            }
            <hr />
            
               {(checking) &&
              < div className="ms-4">
                  < CommentSection activeComments={activeComments} />
              </div>}

            
        </div>
      }

    </>
  )
}
