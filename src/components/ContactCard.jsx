import { Avatar } from "@mui/material";
import React from "react";

import { GitHub, Instagram, Twitter } from "@mui/icons-material";
import { Paper, Typography, Box, Stack, IconButton, Skeleton, Divider } from "@mui/material";

const ContactCard = ({
    name,
    imagePath,
    role,
    desc,
    social1,
    social2
}) => {

    const renderSocialIcon = (link) => {
        if (link.includes('instagram'))
            return <Instagram />
        else if (link.includes('twitter'))
            return <Twitter />
        else if (link.includes('git'))
            return <GitHub />
    }

    return (
        <Paper
            variant='outlined'
            sx={{ p: 2 }}
        >
            <Stack spacing={1}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                    {imagePath
                        ? <Avatar
                            alt={name}
                            src={imagePath}
                            variant="rounded"
                        />
                        : <Skeleton
                            variant="rectangle"
                            width={80}
                            height={80}
                        />}
                    <Box sx={{ display: 'flex' }}>
                        <IconButton href={social1}>
                            {renderSocialIcon(social1)}
                        </IconButton>
                        <IconButton href={social2}>
                            {social2 ? renderSocialIcon(social2) : null}
                        </IconButton>
                    </Box>
                </Box>
                <Typography
                    variant='body1'
                    sx={{ fontWeight: 'bold' }}
                >
                    {name ?? 'Developer Name'}
                </Typography>
                <Typography
                    variant='body2'
                >
                    {role}
                </Typography>
                <Divider />
                <Typography
                    variant='body2'
                >
                    {desc}
                </Typography>
            </Stack>
        </Paper>
    );
}

export default ContactCard;