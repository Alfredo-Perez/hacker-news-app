
import { getStoryInfo, getTopStoriesIds } from "../helpers/getStories"
import { types } from "../types/types";


export const setActiveStory = (story) => ({
    type:types.storiesSetActive,
    payload: story
})

export const clearActive = () => ({
    type:types.storiesClearActive,
});

export const startLoadingStories = (category) => {
    return async (dispatch) => {
        const storiesId = await getTopStoriesIds(category);

        const stories = await Promise.all(
            storiesId.map(async (story) =>{
                return await getStoryInfo(story);
            })
        );


        dispatch(setStoriesIds(stories));
    }
};

export const setStoriesIds = (stories) => ({
    type: types.storiesTopTen,
    payload: stories
});

