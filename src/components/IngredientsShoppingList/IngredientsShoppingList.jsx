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
  
} from "./StyledIngredientsShoppingList";
import { MdClear } from "react-icons/md";
import {getIngridientsThunk,deleteIngridientsThunk} from "../../redux/shopping/thunkShopping"

const INGRIDIENTS = [
   {
      _id: {
         $oid: "640c2dd963a319ea671e365b",
      },
      name: "Chicken",
      desc: 'The chicken is a type of domesticated fowl, a subspecies of the red junglefowl (Gallus gallus). It is one of the most common and widespread domestic animals, with a total population of more than 19 billion as of 2011. There are more chickens in the world than any other bird or domesticated fowl. Humans keep chickens primarily as a source of food (consuming both their meat and eggs) and, less commonly, as pets. Originally raised for cockfighting or for special ceremonies, chickens were not kept for food until the Hellenistic period (4th–2nd centuries BC).\r\n\r\nGenetic studies have pointed to multiple maternal origins in South Asia, Southeast Asia, and East Asia, but with the clade found in the Americas, Europe, the Middle East and Africa originating in the Indian subcontinent. From ancient India, the domesticated chicken spread to Lydia in western Asia Minor, and to Greece by the 5th century BC. Fowl had been known in Egypt since the mid-15th century BC, with the "bird that gives birth every day" having come to Egypt from the land between Syria and Shinar, Babylonia, according to the annals of Thutmose III.',
      img: "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564123/rw8pn3541bmukb8d3mio.png",
   },
   {
      _id: {
         $oid: "640c2dd963a319ea671e365c",
      },
      name: "Salmon",
      desc: "Salmon is the common name for several species of ray-finned fish in the family Salmonidae. Other fish in the same family include trout, char, grayling and whitefish. Salmon are native to tributaries of the North Atlantic (genus Salmo) and Pacific Ocean (genus Oncorhynchus). Many species of salmon have been introduced into non-native environments such as the Great Lakes of North America and Patagonia in South America. Salmon are intensively farmed in many parts of the world.\r\n\r\nTypically, salmon are anadromous: they hatch in fresh water, migrate to the ocean, then return to fresh water to reproduce. However, populations of several species are restricted to fresh water through their lives. Folklore has it that the fish return to the exact spot where they hatched to spawn. Tracking studies have shown this to be mostly true. A portion of a returning salmon run may stray and spawn in different freshwater systems; the percent of straying depends on the species of salmon. Homing behavior has been shown to depend on olfactory memory. Salmon date back to the Neogene.",
      img: "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564123/bwzvxyjxozyankmd6ky8.png",
   },
   {
      _id: {
         $oid: "640c2dd963a319ea671e365d",
      },
      name: "Beef",
      desc: "Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times. Beef is a source of high-quality protein and nutrients.\r\n\r\nMost beef skeletal muscle meat can be used as is by merely cutting into certain parts, such as roasts, short ribs or steak (filet mignon, sirloin steak, rump steak, rib steak, rib eye steak, hanger steak, etc.), while other cuts are processed (corned beef or beef jerky). Trimmings, on the other hand, are usually mixed with meat from older, leaner (therefore tougher) cattle, are ground, minced or used in sausages. The blood is used in some varieties called blood sausage. Other parts that are eaten include other muscles and offal, such as the oxtail, liver, tongue, tripe from the reticulum or rumen, glands (particularly the pancreas and thymus, referred to as sweetbread), the heart, the brain (although forbidden where there is a danger of bovine spongiform encephalopathy, BSE, commonly referred to as mad cow disease), the kidneys, and the tender testicles of the bull (known in the United States as calf fries, prairie oysters, or Rocky Mountain oysters). Some intestines are cooked and eaten as is, but are more often cleaned and used as natural sausage casings. The bones are used for making beef stock.",
      img: "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564124/zzxbvvvye3pnooygfdgg.png",
   },
   {
      _id: {
         $oid: "640c2dd963a319ea671e3660",
      },
      name: "Apple Cider Vinegar",
      desc: "Apple cider vinegar, or cider vinegar, is a vinegar made from fermented apple juice, and used in salad dressings, marinades, vinaigrettes, food preservatives, and chutneys. It is made by crushing apples, then squeezing out the juice. Bacteria and yeast are added to the liquid to start the alcoholic fermentation process, which converts the sugars to alcohol. In a second fermentation step, the alcohol is converted into vinegar by acetic acid-forming bacteria (Acetobacter species). Acetic acid and malic acid combine to give vinegar its sour taste. Apple cider vinegar has no medicinal or nutritional value. There is no high-quality clinical evidence that regular consumption of apple cider vinegar helps to maintain or lose body weight, or is effective to manage blood glucose and lipid levels.",
      img: "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564216/buzhzk4ocvtrmqflfvr7.png",
   },
   {
      _id: {
         $oid: "640c2dd963a319ea671e3661",
      },
      name: "Asparagus",
      desc: "Asparagus, or garden asparagus, folk name sparrow grass, scientific name Asparagus officinalis, is a perennial flowering plant species in the genus Asparagus. Its young shoots are used as a spring vegetable.\r\n\r\nIt was once classified in the lily family, like the related Allium species, onions and garlic. However, genetic research places lilies, Allium, and asparagus in three separate families—the Liliaceae, Amaryllidaceae, and Asparagaceae, respectively—with the Amaryllidaceae and Asparagaceae being grouped together in the order Asparagales. Sources differ as to the native range of Asparagus officinalis, but generally include most of Europe and western temperate Asia. It is widely cultivated as a vegetable crop.",
      img: "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564215/qbfhenmhqflicidxyk1s.png",
   },
];

const IngredientsShoppingList = () => {
  const {shopping} = useSelector(state=>{
    return state.shopping
  })
  const dispatch = useDispatch();

  console.log("get.-ingridients",dispatch(getIngridientsThunk()))
  console.log("ingridients",shopping.items)

   console.log("ingridients",shopping.items)
   console.log("isLoading",shopping.isLoading)
   console.log("error",shopping.error)

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
            {INGRIDIENTS.map(item =>{
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
                            <MdClear style={{width:20, height:20}} onClick={()=>{console.log("click")}}/>
                        </StyledFlexQuantity>
                    </StyledIngridientsItem>
                )
            })}
        </StyledListContainerIngridient>}
    </StyledIngridientsContainer>
    )
}



export default IngredientsShoppingList;
