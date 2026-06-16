import GG10Loading from '@/components/GG10Loading';
import { Box, TextField } from '@mui/material';
import SearchNotFoundIcon from '../components/NotFoundIcon';
import FaqAccordion from '../components/FaqAccordion';
import { useState } from 'react';

export default function FaqSection() {
  const [isSearching, setIsSearching] = useState(false);

  const [result, setResult] = useState([1, 2]);
  return (
    <>
      {/* Search */}
      <TextField placeholder="جستجو در سوالات" variant="filled" />

      {isSearching && (
        <Box sx={{ mt: 10 }}>
          <GG10Loading />
        </Box>
      )}

      {!isSearching && result.length <= 0 && (
        <Box sx={{ mt: 10 }}>
          <SearchNotFoundIcon />
        </Box>
      )}

      {!isSearching && result.length > 0 && (
        <>
          {' '}
          <FaqAccordion title="عنوان" />
          <FaqAccordion title="عنوان" />
        </>
      )}
    </>
  );
}
