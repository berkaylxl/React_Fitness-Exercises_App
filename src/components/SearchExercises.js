import React, { useState, useEffect } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { fontSize, height } from '@mui/system'

const SearchExercises = () => {
  const [search, setSearch] = useState('')

  const handleSearch = async () => {
   if(search){
    // const exerciseData = await fetchData();
   } 
  }
  return (
    <Stack alignItems="center" mt="37px"
      justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{
        fontSize: { lg: '44px', xs: '30px' }
      }} mb="50px" textAlign="center">
        Awesome Exercise You<br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: '700',
              border: 'none',
              borderRadius: '4px'
            },
            width: { lg: '800px', xs: '350px' },
            backgroundColor: '#fff',
            borderRadius: '40px'
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercise"
          type="Text"
        />
        <Button className='search-btn'
          sx={{
            bgcolor: '#FF2625',
            color: '#fff',
            textTransform: 'none',
            width: { lg: '175px', sm: '120px', xs: '350px' },
            fontSize: { lg: '20px', xs: '14px' },
            height: '56px',
            position: { lg: 'absolute', xs: 'static' },
            marginTop: { lg: '0px', sm: '0', xs: '10px' },
            right: '0'
          }}
          onClick={handleSearch}>
          Search
        </Button>



      </Box>
    </Stack >
  )
}

export default SearchExercises