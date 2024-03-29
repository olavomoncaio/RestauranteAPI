import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CrudCardapio from '../../componentes/CrudCardapio'

const useStyles = makeStyles(tema => ({
  container: {
    marginTop: '1%',
    marginLeft: '20%',
    width: '60%'
  },
}));

export default function PutCard({id}) {
  const classes = useStyles();
  const [pizza, setPizza] = useState();

  useEffect(() => {
    fetch(`http://localhost:8080/pizza/${id}`)
      .then(response => {
        response.json().then(data => {
          setPizza(data);
        });
      })
  }, [id]);

  useEffect(() => {
    document.title = "Atualizar Pizza";
  })

  return (
    <div className={classes.container}>
        <CrudCardapio pizza={pizza}></CrudCardapio>
    </div>
  );
}
