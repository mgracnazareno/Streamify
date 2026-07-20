import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";

import { Link as RouterLink } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Card
      sx={{
        height: "100%",
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 2,
        boxShadow: "none",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <CardMedia
        component="img"
        image={movie.image}
        alt={`${movie.title} movie poster`}
        sx={{
          width: "100%",
          aspectRatio: "2 / 3",
          objectFit: "contain",
          backgroundColor: "#000",
        }}
      />

      <CardContent
        sx={{
          px: 2,
          pt: 1.5,
          pb: 1,
          flexGrow: 1,
        }}
      >
        <Typography
          variant="h6"
          component="h2"
          fontWeight="bold"
          sx={{
            fontSize: "1rem",
            mb: 1,
          }}
        >
          {movie.title}
        </Typography>

        <Chip
          label={movie.category}
          size="small"
          sx={{
            height: 24,
            borderRadius: "12px",
            backgroundColor: "primary.light",
            color: "primary.main",
            fontWeight: 600,
          }}
        />
      </CardContent>

      <CardActions sx={{ px: 2, pt: 0, pb: 2 }}>
        <Button
          component={RouterLink}
          to={`/movies/${movie.id}`}
          variant="contained"
          size="small"
          fullWidth
          sx={{
            textTransform: "none",
            fontWeight: 600,
          }}
        >
          View Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
