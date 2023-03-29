import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { Videos } from './index';
import { fetchFromAPI } from '../utils/FetchFromAPI';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => setVideos(data.items));
  }, [searchTerm]);

  return (
    <Box p={2} minHeight='95vh'>
      <Typography variant='h4' color='white' fontWeight='bold' mb={3} mt={2}
        ml={{ sm: '100px' }}>
        Search Results for <span style={{ color: '#f31503' }}>{searchTerm}</span> videos
      </Typography>
      <Box display='flex'>
        {<Videos videos={videos} />}
      </Box>
    </Box>
  )
}

export default SearchFeed