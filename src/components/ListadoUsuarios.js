import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useRecoilValue } from 'recoil';
import { todosLosUsuarios } from '../state/usuarios';
import { Divider, Grid } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { DateTime } from 'luxon';

const useStyles = makeStyles(() => ({
  alert: {
    width: '100%',
  },
  title: {
    fontSize: 15,
  },
}));

function fechaFormatoHumano(fecha) {
  return DateTime.fromISO(fecha)
    .setLocale('es')
    .toLocaleString(DateTime.DATE_FULL);
}

export default function ListadoUsuarios() {
  const classes = useStyles();
  const usuarios = useRecoilValue(todosLosUsuarios);

  return (
    <Grid container>
      <Alert severity="info" className={classes.alert}>
        Los usuarios que están más abajo vienen de la API.
      </Alert>
      <List>
        {usuarios.map((it) => (
          <>
            <ListItem key={it.id} alignItems="flex-start">
              <ListItemText
                primary={`${it.apellido}, ${it.nombre}`}
                secondary={`Nació el ${fechaFormatoHumano(
                  it.fechaNacimiento
                )}.`}
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        ))}
      </List>
    </Grid>
  );
}
