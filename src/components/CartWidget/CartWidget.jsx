import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { ShopContext } from '../../context/ShopContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const CartWidget = () => {
  
  const {Contador} = useContext(ShopContext)
  const navigate = useNavigate()
  return (
    <div>
        <Badge badgeContent={Contador()} 
        onClick={() => navigate('/cart')} 
        color="success">
        <ShoppingCartIcon color="action" sx={{ color: 'black', fontSize: '2.5rem' }}/>
        </Badge>
  </div>
  )
}

export default CartWidget