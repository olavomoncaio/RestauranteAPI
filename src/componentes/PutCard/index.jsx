import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CrudCardapio from '../../componentes/CrudCardapio'

const useStyles = makeStyles(tema => ({
    textAlign: "center",
    padding: '3% 0% 3% 0%',
    border: '1px solid #E0E0E0',
    background: '#FFFFFF',
    boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    width: '80%',
    marginTop: '7%',
    marginLeft: '10%'
  }
));

export default function PutCard({id}) {
  const classes = useStyles();
  const [pizza, setPizza] = useState();

  useEffect(() => {
    document.title = "Atualizar Pizza";
  })

  useEffect(() => {
    fetch(`http://localhost:8080/pizza/${id}`)
      .then(response => {
        response.json().then(data => {
          setPizza(data);
        });
      })
  }, [id]);

  return (
    <div className={classes.container}>
        <CrudCardapio pizza={pizza}></CrudCardapio>
    </div>
  );
}
