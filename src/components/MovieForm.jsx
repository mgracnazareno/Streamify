import {
  Box,
  Button,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const genres = [
  "Action",
  "Animation",
  "Comedy",
  "Drama",
  "Horror",
  "Sci-Fi",
  "Thriller",
];

const MovieForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const newMovie = {
      title: formData.get("title"),
      genre: formData.get("genre"),
      year: formData.get("year"),
      image: formData.get("image"),
      description: formData.get("description"),
    };

    console.log(newMovie);
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 700 }}>
      <Typography variant="h4" component="h1" fontWeight="bold" sx={{ mb: 1 }}>
        Movies
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Add a new movie to the Streamify catalogue.
      </Typography>

      <Paper
        component="form"
        onSubmit={handleSubmit}
        elevation={0}
        sx={{
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 2,
          p: {
            xs: 3,
            md: 4,
          },
        }}
      >
        <Stack spacing={3}>
          <TextField
            required
            fullWidth
            name="title"
            label="Movie Title"
            placeholder="Enter the movie title"
          />

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
              },
              gap: 2,
            }}
          >
            <TextField
              required
              select
              fullWidth
              name="genre"
              label="Genre"
              defaultValue=""
            >
              {genres.map((genre) => (
                <MenuItem key={genre} value={genre}>
                  {genre}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              required
              fullWidth
              name="year"
              label="Release Year"
              type="number"
              placeholder="2026"
              slotProps={{
                htmlInput: {
                  min: 1888,
                  max: 2100,
                },
              }}
            />
          </Box>

          <TextField
            required
            fullWidth
            name="image"
            label="Poster Image URL"
            placeholder="https://example.com/poster.jpg"
          />

          <TextField
            required
            fullWidth
            multiline
            minRows={4}
            name="description"
            label="Description"
            placeholder="Enter a short movie description"
          />

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              gap: 2,
            }}
          >
            <Button
              type="reset"
              variant="outlined"
              sx={{ textTransform: "none" }}
            >
              Clear
            </Button>

            <Button
              type="submit"
              variant="contained"
              sx={{
                textTransform: "none",
                fontWeight: 600,
              }}
            >
              Add Movie
            </Button>
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
};

export default MovieForm;
