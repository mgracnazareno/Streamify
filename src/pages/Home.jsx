import { Box, Button, Container, Typography } from "@mui/material";

import { Link as RouterLink } from "react-router-dom";

import bannerImage from "../assets/streamify_banner.png";
import SearchInput from "../components/SearchInput";
import MovieCard from "../components/MovieCard";
import movies from "../data/movies.js";

const Home = () => {
  const featuredMovies = movies.slice(0, 4);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "background.default",
      }}
    >
      {/* Hero banner */}
      <Box
        sx={{
          minHeight: {
            xs: 360,
            md: 420,
          },
          display: "flex",
          alignItems: "center",
          color: "white",
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(15, 27, 45, 0.92) 0%,
              rgba(15, 27, 45, 0.68) 50%,
              rgba(15, 27, 45, 0.42) 100%
            ),
            url("${bannerImage}")
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              maxWidth: 700,
              mx: "auto",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h2"
              component="h1"
              fontWeight="bold"
              sx={{
                mb: 2,
                fontSize: {
                  xs: 38,
                  md: 56,
                },
              }}
            >
              Unlimited movies, one place.
            </Typography>

            <Typography
              sx={{
                mb: 4,
                color: "rgba(255, 255, 255, 0.86)",
                fontSize: {
                  xs: 17,
                  md: 20,
                },
              }}
            >
              Discover popular movies and find something great to watch.
            </Typography>

            <Button
              component={RouterLink}
              to="/movies"
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "#6D28D9",
                textTransform: "none",
                fontWeight: "bold",
                px: 4,
                py: 1.4,

                "&:hover": {
                  backgroundColor: "#5B21B6",
                },
              }}
            >
              Browse Movies
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Search section */}
      <Box
        sx={{
          backgroundColor: "#F5F1FF",
          borderBottom: "1px solid",
          borderColor: "divider",
          py: 4,
        }}
      >
        <Container maxWidth="md">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Typography
              variant="h5"
              component="h2"
              fontWeight="bold"
              sx={{
                width: "100%",
                textAlign: "center",
                mb: 2,
              }}
            >
              What do you want to watch?
            </Typography>

            <SearchInput />
          </Box>
        </Container>
      </Box>

      {/* Featured movies */}
      <Container
        maxWidth="xl"
        sx={{
          py: {
            xs: 5,
            md: 7,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Box>
            <Typography
              variant="h4"
              component="h2"
              fontWeight="bold"
              sx={{ mb: 0.5 }}
            >
              Featured Movies
            </Typography>

            <Typography color="text.secondary">
              A few popular picks from our collection.
            </Typography>
          </Box>

          <Button
            component={RouterLink}
            to="/movies"
            variant="outlined"
            sx={{
              textTransform: "none",
              fontWeight: 600,
            }}
          >
            View All
          </Button>
        </Box>

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
          {featuredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
