import classes from './ButtomApp.module.css'

export function CustomButtom ({ clickFunc, clickAction, texto }) {
  const handleClick  = () =>{
    clickFunc(clickAction);
  };
  
  return (
    <button onClick={handleClick} className={`${classes.customButtom}`} >{ texto }</button>
  )
}