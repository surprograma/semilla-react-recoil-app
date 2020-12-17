import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from '@material-ui/core';
import ListadoUsuarios from './components/ListadoUsuarios';
import ProTip from './ProTip';

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Repositorio semilla React - Recoil - Material UI
        </Typography>
        <ProTip />
        <Grid container justify="center">
          <Button
            variant="contained"
            color="primary"
            href="https://github.com/unahur-desapp/react-recoil-seed/generate"
          >
            Crear proyecto
          </Button>
        </Grid>
        <Card>
          <CardContent>
            <ListadoUsuarios />
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
