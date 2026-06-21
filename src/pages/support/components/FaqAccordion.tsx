import ChevronUpIcon from '@/components/icons/ChevronUp';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
} from '@mui/material';
import type { FAQResponse } from '@/api/support/support';

interface FaqAccordionProps {
  title: string;
  items: FAQResponse[];
}

export default function FaqAccordion({ title, items }: FaqAccordionProps) {
  return (
    <Accordion
      sx={{
        bgcolor: 'transparent',
        boxShadow: 'none',
        '&:before': { display: 'none' },
        '&.Mui-expanded': { margin: 0 },
        borderBottom: '1px solid #000',
        p: 0,
      }}
    >
      <AccordionSummary
        expandIcon={<ChevronUpIcon />}
        sx={{
          '& .MuiAccordionSummary-content': {
            margin: 0,
            '&.Mui-expanded': { margin: 0 },
          },
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ direction: 'rtl', width: '100%', py: '20px' }}
        >
          <Typography variant="title3" color="white">
            {title}
          </Typography>
        </Stack>
      </AccordionSummary>

      <AccordionDetails sx={{ textAlign: 'right' }}>
        <Stack spacing="20px" pr={1}>
          {items.map((item) => (
            <Accordion
              key={item.id}
              sx={{ p: 0, '& .MuiAccordionSummary-content': { m: 0 } }}
            >
              <AccordionSummary sx={{ p: 0 }} expandIcon={<ChevronUpIcon />}>
                <Typography variant="sub1" color="custom.grey0">
                  + {item.question}
                </Typography>
              </AccordionSummary>

              <AccordionSummary sx={{ p: 0 }}>
                <Typography variant="caption1" color="custom.grey0">
                  {item.answer}
                </Typography>
              </AccordionSummary>
            </Accordion>
          ))}
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
}
