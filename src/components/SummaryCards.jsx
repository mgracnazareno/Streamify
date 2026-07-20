import { Box, Card, CardContent, Typography } from "@mui/material";

import MovieIcon from "@mui/icons-material/Movie";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";

const summaryCards = [
  {
    title: "Total Movies",
    value: "120",
    icon: <MovieIcon />,
    color: "#7C3AED",
  },
  {
    title: "Total Users",
    value: "1,250",
    icon: <PeopleIcon />,
    color: "#4338CA",
  },
  {
    title: "New Users",
    value: "320",
    icon: <PeopleIcon />,
    color: "#16A34A",
  },
  {
    title: "Total Views",
    value: "8,450",
    icon: <BarChartIcon />,
    color: "#F59E0B",
  },
];

const SummaryCards = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        },
        gap: 2,
        mb: 5,
      }}
    >
      {summaryCards.map((card) => (
        <Card
          key={card.title}
          sx={{
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 2,
            boxShadow: "none",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box
              sx={{
                color: card.color,
                display: "flex",

                "& svg": {
                  fontSize: 34,
                },
              }}
            >
              {card.icon}
            </Box>

            <Box>
              <Typography variant="body2" fontWeight="bold">
                {card.title}
              </Typography>

              <Typography variant="h5" fontWeight="bold">
                {card.value}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default SummaryCards;
