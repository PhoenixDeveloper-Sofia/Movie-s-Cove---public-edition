import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetchPlayerQuery } from '../../../store/endpoints/player/playerEndpoints';
import ErrorRouter from '../../../pages/ErrorRout'
import Loader from '../../../pages/Loader'

const ViewPlayer = () => {
    const { id } = useParams()
    const { data: player, isError, isLoading } = useFetchPlayerQuery(id)
    return (
        <section className='viewPlayer'>

            {isLoading ?
                <Loader />
                :
                isError ?
                    <ErrorRouter />
                    :
                    <>
                        {(player[0].iframeUrl || player[0].iframeUrl !== null) &&
                            <div className="viewPlayer__player-box">
                                <iframe src={player[0].iframeUrl} allow=" fullscreen ; camera 'none'; microphone 'none'; geolocation'none'; gyroscope'none';layout-animations 'none'; unoptimized-images 'none'; oversized-images 'none'; sync-script 'none'; sync-xhr 'none'; unsized-media 'none'; self 'none';" align="left"></iframe>
                            </div>
                        }
                    </>
            }
        </section>
    );
};

export default ViewPlayer;