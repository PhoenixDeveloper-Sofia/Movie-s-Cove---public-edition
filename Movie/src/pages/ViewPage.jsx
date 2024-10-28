import React, { useEffect, useRef, useState } from 'react';
import ViewInfo from '../сomponents/ViewPage/ViewInfo/ViewInfo';
import ViewPlayer from '../сomponents/ViewPage/ViewPlayer/ViewPlayer';
import ViewRecommendation from '../сomponents/ViewPage/ViewRecommendation/ViewRecommendation';
import { useFetchTrailerQuery } from '../store/endpoints/info/supportEndpoints';
import { useFetchContentByIdQuery } from '../store/endpoints/info/kinopoiskEndpoints';
import { useParams } from 'react-router-dom';
import Loader from './Loader';
import ErrorRouter from './ErrorRout'


const ViewPage = () => {

    const { id } = useParams()
    const { data: content, isError, isLoading } = useFetchContentByIdQuery(id, { cacheTime: 20 * 60 * 1000, })
    const { data: trailer, isError: trailerIsError, isLoading: trailerIsLoding } = useFetchTrailerQuery(id, { cacheTime: 15 * 60 * 1000 })
    const [recommendation, setRecommendation] = useState(null)
    useEffect(() => {
        if (!isLoading && content && content.similarMovies && content.sequelsAndPrequels) {
            setRecommendation(content.similarMovies.concat(content.sequelsAndPrequels))
        }
    }, [content, isLoading])

    return (
        <>
            {isLoading || trailerIsLoding ?
                <Loader />
                :
                isError ?
                    <ErrorRouter />
                    :
                    <ViewInfo trailer={trailer} trailerIsLoding={trailerIsLoding} trailerIsError={trailerIsError} content={content} />
            }

            <ViewPlayer />

            {isLoading || trailerIsLoding ?
                <Loader />
                :
                isError ?
                    <ErrorRouter />
                    :
                    <>
                        { (recommendation != null && recommendation.length > 0) &&
                            <ViewRecommendation content={recommendation} />
                        }
                    </>
            }
        </>
    );
};

export default ViewPage;