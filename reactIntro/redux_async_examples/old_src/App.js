
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart';
import Header from './components/Header';
import Items from './components/Items';
import { toggleSliceActions } from './store/ToggleStore';

function App() {
  

  const showCart = useSelector(state => state.toggle.showCart)
  const cart = useSelector(state => state.cart)
  // console.log(cart)

  const dispatch = useDispatch()

  useEffect(() => {

    const sendCartData = async () => {
      
      dispatch(toggleSliceActions.notificaionStatus({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending Cart Data'
      }))
      
      let response = await fetch('http://localhost:5000/carts',{
          method: 'POST',
          headers: {
            'Content-type':'application/json'
          },
          body: JSON.stringify(cart)
      })
      
      if(!response.ok){
        throw new Error('Something bad happened')
      }
      
      // let data = await response.json()

      dispatch(toggleSliceActions.notificaionStatus({
        status: 'success',
        title: 'Success',
        message: 'Data Sent Successfully'
      }))

    }
    
    sendCartData()
    .catch(err => {
      dispatch(toggleSliceActions.notificaionStatus({
        status: 'error',
        title: 'Error!',
        message: err
      }))
    })

  }, [cart, dispatch])


  return (
    <>
    <Header/>
    {showCart && <Cart/>}
    <Items/>
    </>
  );
}

export default App;
