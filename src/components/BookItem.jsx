import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Divider,
  IconButton,
  Stack,
  TableCell,
  TableRow,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useRouter } from "next/router";
import { useState } from "react";

export const BookItem = ({ livro }) => {
  const router = useRouter();
  const [openDialog, setOpenDialog] = useState(false);

  const handleDetails = (nome) => {
    router.push(`/livro/${nome}`);
  };

  const handleNotRemoveLivro = () => {
    setOpenDialog(false);
  };

  const handleRemoveLivro = async (nome) => {
    setOpenDialog(false);
    try {
      const res = await fetch(`/api/livro/${nome}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) throw new Error(`Error: ${res.status}`);
    } catch (error) {
      console.log("ERROR", error);
    } finally {
      window.location.reload(true);
    }
  };
  return (
    <>
      <Dialog
        open={openDialog}
        onClose={handleNotRemoveLivro}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {`Deseja realmente excluir o livro: ${livro.nome}?`}
        </DialogTitle>
        <DialogActions>
          <Button onClick={() => handleRemoveLivro(livro.nome)}>Sim</Button>
          <Button onClick={() => handleNotRemoveLivro()}>Não</Button>
        </DialogActions>
      </Dialog>
      <TableRow>
        <TableCell>{livro.nome}</TableCell>
        <TableCell>{livro.autor}</TableCell>
        <TableCell>
          <Stack
            direction={"row"}
            divider={<Divider orientation="vertical" flexItem />}
          >
            <IconButton onClick={() => setOpenDialog(true)}>
              <DeleteIcon />
            </IconButton>
            <IconButton onClick={() => handleDetails(livro.nome)}>
              <VisibilityIcon />
            </IconButton>
          </Stack>
        </TableCell>
      </TableRow>
    </>
  );
};
