import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

const CardWidget = () => {
  return (
    <div>
        <Badge badgeContent={2} color="success">
        <ShoppingCartIcon color="action" sx={{ color: 'white', fontSize: '3.5rem' }}/>
        </Badge>
  </div>
  )
}

export default CardWidget