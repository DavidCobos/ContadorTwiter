import React, { useState } from 'react';

interface ContadoregresivoProps {
    finalDate: string,
    active: boolean
}

function getTime(fecha:string) {

    const fechaObjetivo = new Date(fecha);
    const today = new Date();

    let diffTime = fechaObjetivo.getTime() - today.getTime();

    if (diffTime < 0) 
    {
        return "00:00:00";
    } 
    else 
    {
        diffTime = diffTime / 1000;
        let hora = Math.floor(diffTime / 3600);
        diffTime -= hora * 3600;

        let minuto = Math.floor(diffTime / 60);
        diffTime -= minuto * 60;

        let segundo = Math.floor(diffTime);

        return `${hora}:${minuto}:${segundo}`;
    }
}

const Contadoregresivo: StorefrontFunctionComponent<ContadoregresivoProps> = ({finalDate, active}) => {



      if (active){
        const [currentDate, setCurrentDate] = useState(getTime(finalDate));

        setInterval(() => {
            setCurrentDate(getTime(finalDate));
          }, 1000);

        return(
            <div>
              <h1>Faltan {currentDate} hrs</h1>
            </div>  
            )
      }else{
        return(
            <div>
            </div>  
            )
      }

}

Contadoregresivo.schema = {
  title: 'contador regresivo',
  description: 'cuenta atras hasta la fecha definida',
  type: 'object',
  properties: {
    active: {
        type: 'boolean',
        title: 'Active Component',
        default: true,
     },
    finalDate: {
       title: 'Final Date',
       //2022-02-23T02:20:42.074Z
       default: new Date().toISOString(), //Set current date in select input
       type: 'string',
       //to user select a date.
       format: 'date-time',
       widget: {
          "ui:widget": "datetime"
       }
    }
  },
}

export default Contadoregresivo