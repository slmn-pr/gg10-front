import ChevronUpIcon from '@/components/icons/ChevronUp';
import LobbyCardHeader from '@/pages/home/components/LobbyCardHeader';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';

interface FaqAccordionProps {
  expanded?: boolean;
  title: string;
  onChange?: (e: any, expanded: boolean) => void;
}

export default function FaqAccordion({ expanded, onChange, title }: FaqAccordionProps) {
  const theme = useTheme();

  return (
    <>
      <Accordion
        // expanded={expanded}
        // onChange={onChange}
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
              '&.Mui-expanded': {
                margin: 0,
              },
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
            {Array.from(Array(5)).map((_, index) => (
              <Accordion
                key={index}
                sx={{ p: 0, '& .MuiAccordionSummary-content': { m: 0 } }}
              >
                <AccordionSummary
                  sx={{
                    p: 0,
                    margin: '0px 0px',
                    // direction: "rtl"
                  }}
                  expandIcon={<ChevronUpIcon />}
                >
                  <Typography variant="sub1" color="custom.grey0">
                    + زیر عنوان
                  </Typography>
                </AccordionSummary>

                <AccordionSummary sx={{ p: 0 }}>
                  <Typography variant="caption1" color="custom.grey0">
                    متن توضیحات در این کامپوننت است. متن توضیحات در این کامپوننت است. متن
                    توضیحات در این کامپوننت است.
                  </Typography>
                </AccordionSummary>
              </Accordion>
            ))}
          </Stack>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
