
import { CommentInfo } from './CommentInfo';

export const CommentSection = ({activeComments}) => {

    
    
  return (
    <div>
        {
            (activeComments.length > 0) &&
            activeComments.map( comment => (
                <CommentInfo 
                    key={comment.id}
                    {...comment}

                />
            ) )
        }
    </div>
  )
}
