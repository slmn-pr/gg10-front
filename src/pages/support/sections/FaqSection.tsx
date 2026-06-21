import GG10Loading from '@/components/GG10Loading';
import { Box, TextField } from '@mui/material';
import { useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import SearchNotFoundIcon from '../components/NotFoundIcon';
import FaqAccordion from '../components/FaqAccordion';
import { listFaqReq } from '@/api';
import { faqMock } from '../_mock';

export default function FaqSection() {
  const [searchTerm, setSearchTerm] = useState('');

  const { data, isLoading } = useQuery({
    queryKey: ['faq'],
    queryFn: listFaqReq,
  });

  const faqs = faqMock ?? []; // TODO: Replace data instead mock data

  const filteredFaqs = useMemo(() => {
    if (!searchTerm.trim()) return faqs;
    const term = searchTerm.trim().toLowerCase();
    return faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(term) ||
        faq.answer.toLowerCase().includes(term),
    );
  }, [faqs, searchTerm]);

  const groupedByCategory = useMemo(() => {
    const groups: Record<string, typeof faqs> = {};
    filteredFaqs.forEach((faq) => {
      if (!groups[faq.category]) groups[faq.category] = [];
      groups[faq.category].push(faq);
    });
    return groups;
  }, [filteredFaqs]);

  const categories = Object.keys(groupedByCategory);

  return (
    <>
      <TextField
        placeholder="جستجو در سوالات"
        variant="filled"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        fullWidth
      />

      {isLoading && (
        <Box sx={{ mt: 10 }}>
          <GG10Loading />
        </Box>
      )}

      {!isLoading && categories.length === 0 && (
        <Box sx={{ mt: 10 }}>
          <SearchNotFoundIcon />
        </Box>
      )}

      {!isLoading &&
        categories.map((category) => (
          <FaqAccordion
            key={category}
            title={category}
            items={groupedByCategory[category]}
          />
        ))}
    </>
  );
}
