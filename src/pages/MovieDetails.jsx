import { Box, Button, Container, Stack, Typography } from "@mui/material";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";

import { Link as RouterLink, useParams } from "react-router-dom";
import movies from "../data/movies.js";

const MovieDetails = () => {
  const { id } = useParams();

  const movie = movies.find((item) => item.id === Number(id));

  if (!movie) {
    return (
      <Container sx={{ py: 6 }}>
        <Typography variant="h4">Movie not found</Typography>
      </Container>
    );
  }

  const relatedMovies = movies
    .filter((item) => item.id !== movie.id)
    .slice(0, 5);

  const movieInformation = [movie.category, movie.year, movie.duration]
    .filter(Boolean)
    .join(" | ");

  const cast = Array.isArray(movie.cast) ? movie.cast.join(", ") : movie.cast;

  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "100vh",
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        {/* Main movie details */}
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            alignItems: {
              xs: "center",
              md: "flex-start",
            },
            gap: 3,
          }}
        >
          {/* Movie poster */}
          <Box
            component="img"
            src={movie.image}
            alt={`${movie.title} movie poster`}
            sx={{
              width: {
                xs: 200,
                sm: 220,
              },
              aspectRatio: "2 / 3",
              objectFit: "contain",
              backgroundColor: "#000",
              borderRadius: 1,
            }}
          />

          {/* Movie information */}
          <Box
            sx={{
              flex: 1,
              textAlign: {
                xs: "center",
                md: "left",
              },
            }}
          >
            <Typography
              variant="h4"
              component="h1"
              fontWeight="bold"
              sx={{ mb: 1 }}
            >
              {movie.title}
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
              {movieInformation}
            </Typography>

            <Typography
              aria-label={`${movie.rating || 5} star rating`}
              sx={{
                color: "primary.main",
                letterSpacing: 0.5,
                fontSize: "1.15rem",
                mb: 2,
              }}
            >
              ★★★★★
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                maxWidth: 700,
                lineHeight: 1.7,
                mb: 2,
              }}
            >
              {movie.description || "Movie description coming soon."}
            </Typography>

            {movie.director && (
              <Typography variant="body2" sx={{ mb: 1.5 }}>
                <strong>Director:</strong> {movie.director}
              </Typography>
            )}

            {cast && (
              <Typography variant="body2" sx={{ mb: 2.5 }}>
                <strong>Cast:</strong> {cast}
              </Typography>
            )}

            <Stack
              direction="row"
              spacing={1.5}
              justifyContent={{
                xs: "center",
                md: "flex-start",
              }}
            >
              <Button
                variant="contained"
                aria-label={`Play ${movie.title}`}
                sx={{
                  minWidth: 48,
                  width: 48,
                  height: 40,
                }}
              >
                <PlayArrowIcon />
              </Button>

              <Button
                variant="outlined"
                startIcon={<AddIcon />}
                sx={{
                  backgroundColor: "white",
                  textTransform: "none",
                  fontWeight: 600,
                }}
              >
                My List
              </Button>
            </Stack>
          </Box>
        </Box>

        {/* Related movies */}
        <Box sx={{ mt: 6 }}>
          <Typography
            variant="h6"
            component="h2"
            fontWeight="bold"
            sx={{ mb: 3 }}
          >
            More Like This
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            {relatedMovies.map((relatedMovie) => (
              <Box
                key={relatedMovie.id}
                component={RouterLink}
                to={`/movies/${relatedMovie.id}`}
                sx={{
                  display: "block",
                  borderRadius: 1,
                  overflow: "hidden",
                  transition: "transform 0.2s",

                  "&:hover": {
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={relatedMovie.image}
                  alt={`${relatedMovie.title} movie poster`}
                  sx={{
                    display: "block",
                    width: 130,
                    aspectRatio: "2 / 3",
                    objectFit: "cover",
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default MovieDetails;
