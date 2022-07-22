import { ArrowForwardRounded } from "@mui/icons-material";
import { Card, Stack, CardContent, Typography, Button, CardActions, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const IconCard = ({ icon, heading, text, url, bg }) => {
    return (
        <Card
            variant='outlined'
            sx={{
                // border: 'none',
                // borderRadius: 0,
                background: bg,
                mt: 2,
            }}
        >
            <Box>
                <CardContent>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center' }}
                    >
                        {icon}
                        <Typography
                            variant="h6"
                            component="h2"
                            fontWeight="bold"
                            sx={{ pl: 1 }}
                        >
                            {heading}
                        </Typography>
                    </Box>
                    <Typography
                        component="p"
                        variant="body1"
                    >
                        {text}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        color='primary'
                        size='small'
                        endIcon={<ArrowForwardRounded />}
                    >
                        {/* <Link to={`/${url}`}> */}
                        Learn More
                        {/* </Link> */}
                    </Button>
                </CardActions>
            </Box>
        </Card>
    );
}