import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Stack, Box, Typography } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

const FetchData = () => {
    const [data, setData] = useState();
    const fetchData = async () => {
        await axios
        .get('https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=8368987cc49340ccb6b893b001b4f37b')
        .then((res) => setData(res.data.articles))
    }
    useEffect(() => {
        fetchData();
    }, []);
  return (
    <Box width='100%'>
        <Typography gutterBottom variant="h5" textAlign='center'>Top Headlines</Typography>
        <Stack direction='row' flexWrap='wrap' gap={2} justifyContent='center'>
            {data ? data.map((item, index) =>(
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={item.urlToImage ? item.urlToImage : 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202210/breaking_latest_news_1200x675_1-sixteen_nine_675.jpg?VersionId=4VGGbRmmSOPpUkl2_Z2NjhvZ9OU1OgQ8'}
                  title="logo"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">{item.publishedAt.substring(0,10)}</Button>
                  <Button size="small" component="a" href={item.url} target="_blank">Read More</Button>
                </CardActions>
              </Card>
            )) : "Loading...."}
        </Stack>
    </Box>
  )
}

export default FetchData
