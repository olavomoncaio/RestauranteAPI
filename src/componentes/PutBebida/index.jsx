import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CrudBebida from '../../componentes/CrudBebida'

const useStyles = makeStyles(tema => ({
  container: {
    marginTop: '1%',
    marginLeft: '20%',
    width: '60%'
  },
}));

export default function PutBebida({id}) {
  const classes = useStyles();
  const [bebida, setBebida] = useState();

  useEffect(() => {
    fetch(`http://localhost:8080/bebida/${id}`)
      .then(response => {
        response.json().then(data => {
          setBebida(data);
        });
      })
  }, [id]);

  console.log(bebida);
  useEffect(() => {
    document.title = "Atualizar Pizza";
  })

  return (
    <div className={classes.container}>
        <CrudBebida bebida={bebida}></CrudBebida>
    </div>
  );
}
