

export const getTopStoriesIds = async( category ) => {
    try {
        
        const url = `https://hacker-news.firebaseio.com/v0/${category}.json?print=pretty`;
        const resp = await fetch(url);
        const data =  await resp.json();
        const topstories = data.slice(0,10);
        // console.log(topstories);
        return topstories;
    } catch (error) {
        console.log(error);
    }
};

export const getComments = (comments) => {
    const topComments = comments.slice(0,20);
    return topComments;

};

export const getStoryInfo = async(id) => {

    try {
        const url = `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`;
        const resp = await fetch(url);
        const data =  await resp.json();
        return data;
        
    } catch (error) {
        console.log(error);
    }

};

export const LoadComents = async (commentsIDs) => {
    
    const topComments = commentsIDs.slice(0,20);
    const comments = await Promise.all(
        topComments.map(async (comment) =>{
            return await getStoryInfo(comment);
        })
    )
    
    await localStorage.setItem("activeComments", JSON.stringify(comments));


    return(comments);
  
};