import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button, Container, Grid, Typography } from "@mui/material";

export const BookDetails = ({ data }) => {
  return (
    <Container>
      <Grid container>
        <Grid item>
          <Button href="/" startIcon={<ArrowBackIcon />}>
            Voltar
          </Button>
        </Grid>
        <Grid container spacing={2} padding={2}>
          <Grid item xl={6} md={12}>
            <Typography variant="h5">Autor: {data.autor}</Typography>
          </Grid>
          <Grid item xl={6}  md={12}>
            <Typography variant="h5">Nome: {data.nome}</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} padding={2}>
          <Grid item xl={12}>
            <Typography variant="h5" align={'justify'}>Descrição: {data.descricao}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
