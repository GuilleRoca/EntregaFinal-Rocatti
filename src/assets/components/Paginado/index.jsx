import { Button, Typography } from '@mui/material'
import style from './paginado.module.css'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';



const Paginado = ({count , setCount ,totalPagins }) => {

  setCount( count > totalPagins ? 1 : count)
    
  return (
    <div className={style.container} >
        {count===1 ? <Button onClick={() => setCount((count) => count - 1)} variant="contained" disabled startIcon={<NavigateBeforeIcon />}><Typography>ANT</Typography></Button> : <Button onClick={() => setCount((count) => count - 1)} variant="contained"  startIcon={<NavigateBeforeIcon />}><Typography>ANT</Typography></Button>}
        <Typography>
        <p>{count} de {totalPagins}</p>
        </Typography>
        {count===totalPagins ? <Button onClick={() => setCount((count) => count + 1)} variant="contained" disabled endIcon={<NavigateNextIcon />}><Typography>SIG</Typography></Button> : <Button onClick={() => setCount((count) => count + 1)} variant="contained" endIcon={<NavigateNextIcon />}><Typography>SIG</Typography></Button>}
    </div>
  )
}

export default Paginado