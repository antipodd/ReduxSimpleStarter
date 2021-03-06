//do i expect this component to use any kind of state
// only need functional component since we are only receiving props
// whenever embed video, only thing that changes in the url is the id of the video
// want ajax spinner on high level / parent component
import React from 'react';
const VideoDetail = ({video}) => {
	if (!video) {
		return <div>Loading...</div>;
	}
	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;

	return (
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={url}></iframe>
			</div>
			<div className="details">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	)
};

export default VideoDetail