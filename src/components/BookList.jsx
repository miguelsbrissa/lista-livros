import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { BookItem } from "./BookItem";

export const BookList = ({ data }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Autor</TableCell>
            <TableCell>Ação</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.livros.map((livro) => (
            <BookItem livro={livro} key={livro.nome} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
