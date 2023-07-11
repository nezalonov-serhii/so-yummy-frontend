import { useSelector, useDispatch } from "react-redux";
import Loader from "../Loader/Loader"
import {
  StyledIngridientsHeader,
  StyledIngridientsItem,
  StyledIngrsHeadThumb,
  StyledIngridientsContainer,
  StyledImageCardThumb,
  StyledImage,
  StyledQuantity,
  StyledFlexQuantity,
  StyledListContainerIngridient,
  StyledCloseIcon,
  
} from "./StyledIngredientsShoppingList";
import {getShoppingThunk,deleteShoppingThunk} from "../../redux/shopping/thunkShopping"
import { useEffect } from "react";



const IngredientsShoppingList = () => {
  const {shopping} = useSelector(state=>{
    return state.shopping
  })
  const dispatch = useDispatch();
  useEffect(()=>{
       console.log("get.-ingridients",dispatch(getShoppingThunk()))
  },[dispatch])
  console.log("ingridients",shopping)

   console.log("ingridients.items",shopping.items)
   console.log("isLoading",shopping.isLoading)
   console.log("error",shopping.error)

   const heandleDeleteButton=()=>{
      dispatch(deleteShoppingThunk())
   }

    return (
    <StyledIngridientsContainer>
        <StyledIngridientsHeader>
            <p>Product</p>
            <StyledIngrsHeadThumb>
                <p>Number</p>
                <p>Remove</p>
            </StyledIngrsHeadThumb>
        </StyledIngridientsHeader>
        {shopping.isLoading ? <Loader/> : <StyledListContainerIngridient>
            {shopping.items?.map(item =>{
                return (
                    <StyledIngridientsItem key={item._id}>
                        <StyledImageCardThumb>
                            <StyledImage src={item.img} alt={item.desc} height="60"/>
                            <p>{item.name}</p>
                        </StyledImageCardThumb>
                        <StyledFlexQuantity>
                            <StyledQuantity>
                                <p>5</p>
                            </StyledQuantity>
                            <StyledCloseIcon onClick={()=>heandleDeleteButton(item._id)}/>
                        </StyledFlexQuantity>
                    </StyledIngridientsItem>
                )
            })}
        </StyledListContainerIngridient>}
    </StyledIngridientsContainer>
    )
}



export default IngredientsShoppingList;
