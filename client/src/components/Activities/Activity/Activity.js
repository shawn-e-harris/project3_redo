import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from "react-redux"

import { likeActivity } from "../../../actions/activities"

import useStyles from './styles';

const Activity = ({ activities, setCurrentId }) => {
	const classes = useStyles();
	const dispatch = useDispatch();

	return (
		<Card className={classes.card}>
			<CardMedia className={classes.media} image={activities.selectedFile} title={activities.title} />
			<div className={classes.overlay}>
				<Typography variant="h6">{activities.creator}</Typography>
				<Typography variant="body2">{moment(activities.createdAt).fromNow()}</Typography>
			</div>
			<div className={classes.overlay2}>
				<Button style={{ color: 'white' }} size="small" onClick={() => {setCurrentId(activities._id)}}>
					<MoreHorizIcon fontSize="default" />
				</Button>
			</div>
			<div className={classes.details}>
				<Typography variant="body2" color="textSecondary">
					{activities.tags.map((tag) => `#${tag} `)}
				</Typography>
			</div>
				<Typography className={classes.title} variant="h5" gutterBottom>
					{activities.title}
				</Typography>
			<CardContent>
				<Typography variant="h5" gutterBottom>
					{activities.message}
				</Typography>
			</CardContent>
			<CardActions className={classes.CardActions}>
				<Button size="small" color="primary" onClick={() => dispatch(likeActivity(activities._id))}>
					<ThumbUpAltIcon fontSize="small" />
					Like
					{activities.likeCount}
				</Button>
				<Button size="small" color="primary" onClick={() => {}}>
					<DeleteIcon fontSize="small" />
					Delete
				</Button>
			</CardActions>
		</Card>
	);
};

export default Activity;
