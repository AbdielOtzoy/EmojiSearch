import { Card, Typography, CardContent, Box, CardActions, Button } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';


const EmojiCard = ({emojiName, character}) => {

    const copytoClipboard = () => {
        navigator.clipboard.writeText(character)
    }

    const card = (
        <React.Fragment>
            <CardContent>
                <Typography sx={{ fontSize: 30 }} color="text.primary" gutterBottom>
                    {character}
                </Typography>
                <Typography sx={{ fontSize: 15 }} color="text.primary">
                    {emojiName}
                </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
                <Typography  color="text.primary">
                    <Button variant="text" color="primary" onClick={ copytoClipboard }>Copy</Button>
                </Typography>

            </CardActions>
        </React.Fragment>
    )

    return (
        <Box>
            <Card variant='outlined'>{card}</Card>
        </Box>
        
    );
};


EmojiCard.propTypes = {
    emojiName: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired
};


export default EmojiCard;
