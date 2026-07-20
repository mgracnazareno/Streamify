import {
  Box,
  Button,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteIcon from "@mui/icons-material/Delete";

const recentMovies = [
  {
    id: 1,
    title: "Oppenheimer",
    category: "Drama",
    date: "June 20, 2024",
  },
  {
    id: 2,
    title: "Dune: Part Two",
    category: "Sci-Fi",
    date: "June 18, 2024",
  },
  {
    id: 3,
    title: "The Dark Knight",
    category: "Action",
    date: "June 15, 2024",
  },
];

const RecentMoviesTable = () => {
  return (
    <Box>
      <TableContainer
        sx={{
          backgroundColor: "white",
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 2,
          mb: 3,
          overflowX: "auto",
        }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#F3F4F6" }}>
              <TableCell sx={{ fontWeight: "bold" }}>Title</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Genre</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Added On</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {recentMovies.map((movie) => (
              <TableRow key={movie.id}>
                <TableCell>{movie.title}</TableCell>
                <TableCell>{movie.category}</TableCell>
                <TableCell>{movie.date}</TableCell>

                <TableCell>
                  <IconButton size="small" aria-label={`Edit ${movie.title}`}>
                    <EditOutlinedIcon fontSize="small" />
                  </IconButton>

                  <IconButton
                    size="small"
                    color="error"
                    aria-label={`Delete ${movie.title}`}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Button
        variant="contained"
        sx={{
          textTransform: "none",
          fontWeight: 600,
        }}
      >
        Add New Movie
      </Button>
    </Box>
  );
};

export default RecentMoviesTable;
