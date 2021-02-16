import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

type PROPS_BUTTON_COLOR = {
  themeColor: string;
  fontSize:number;
  color:string;
}

type PROPS_CUSTOMBUTTON ={
  themeColor:string,
  defaultColor:string,
  fontSize:number,
  handleChangeBase:(e:string)=>void;
  dispShow:string;
}

const useStyles = makeStyles({
  button: {
    background: (props:PROPS_BUTTON_COLOR) => props.color,
    borderRadius: 3,
    border: 0,
    height: 48,
    padding: '0 5px',
    fontSize: (props:PROPS_BUTTON_COLOR) => props.fontSize,
    fontColor: 'black',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
});

const CustomButtonColor: React.FC<PROPS_CUSTOMBUTTON> = ({
  themeColor, defaultColor, handleChangeBase, dispShow, fontSize,
}) => {
  const [color, setColor] = useState(themeColor);
  const handleChange = () => {
    setColor(color === themeColor ? defaultColor : themeColor);
    handleChangeBase(themeColor);
  };

  const classes = useStyles({ themeColor, color, fontSize });

  return (
    <div>
      <Button className={classes.button} onClick={handleChange}>
        {dispShow}
      </Button>
    </div>
  );
};

export default CustomButtonColor;
