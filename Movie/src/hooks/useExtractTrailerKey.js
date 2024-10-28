
const useExtractTrailerKey = (url) => {
    if (url.includes('youtu.be')) {
        return url.split('/').pop().split('?')[0];
    }  
    else if (url.includes('youtube.com/embed')) {
        return url.split('embed/')[1].split('&')[0];
    }
    else if (url.includes('youtube.com/watch?v=')) {
        return url.split('v=')[1].split('&')[0];
    }
    else if (url.includes('youtube.com')) {
        return url.split('/')[1].split('&')[0];
    }
    return null;
}

export default useExtractTrailerKey;