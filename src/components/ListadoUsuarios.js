import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useRecoilValue } from 'recoil';
import { todosLosUsuarios } from '../state/usuarios';
import { Divider, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
  },
  title: {
    fontSize: 15,
  },
}));

export default function ListadoUsuarios() {
  const classes = useStyles();
  const usuarios = useRecoilValue(todosLosUsuarios);

  return (
    <Grid container>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        Los usuarios que están más abajo vienen de la API.
      </Typography>
      <List className={classes.root}>
        {usuarios.map((it) => (
          <>
            <ListItem key={it.id} alignItems="flex-start">
              <ListItemText
                primary={`${it.apellido}, ${it.nombre}`}
                secondary={it.fechaNacimiento}
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        ))}
      </List>
    </Grid>
  );
}
