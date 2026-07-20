import { Box, Container, Typography } from "@mui/material";

import SearchInput from "../components/SearchInput";
import MovieCard from "../components/MovieCard";
import movies from "../data/movies.js";
import { useState } from "react";
const Movies = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMovies = movies.filter((movie) => {
    const searchValue = searchTerm.toLowerCase().trim();

    return (
      movie.title.toLowerCase().includes(searchValue) ||
      movie.category.toLowerCase().includes(searchValue)
    );
  });
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "100vh",
      }}
    >
      {/* Page heading and search */}
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#F5F1FF",
          borderBottom: "1px solid",
          borderColor: "divider",
          py: {
            xs: 4,
            md: 5,
          },
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h3"
              component="h1"
              fontWeight="bold"
              sx={{
                mb: 1,
                fontSize: {
                  xs: 32,
                  md: 40,
                },
              }}
            >
              All Movies
            </Typography>

            <Typography
              color="text.secondary"
              sx={{
                mb: 3,
                fontSize: 17,
              }}
            >
              Browse our collection and discover your next favourite movie.
            </Typography>

            <SearchInput
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </Box>
        </Container>
      </Box>

      {/* Movie cards */}
      <Container
        maxWidth="xl"
        sx={{
          py: {
            xs: 4,
            md: 5,
          },
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            },
            gap: 3,
          }}
        >
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))
          ) : (
            <Typography
              color="text.secondary"
              sx={{
                gridColumn: "1 / -1",
                textAlign: "center",
                py: 8,
              }}
            >
              No movies found for “{searchTerm}”.
            </Typography>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Movies;
