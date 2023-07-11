import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
    deleteShoppingThunk,
    getShoppingThunk,
    addShoppingThunk,
} from './thunkShopping';


const heandleFulfilledAdd = (state, {payload}) => {
    console.log('payload add item', payload);
    state.shopping.isLoading = false;
    state.shopping.items.push(payload);
    state.shopping.error = '';
}


const handlePending = state => {
    state.shopping.isLoading = true;
};
const handleRejected = (state, { payload }) => {
    console.log('payload rejected', payload);
    state.shopping.isLoading = false;
    state.shopping.error = payload;
};

const handleFulfilledGet = (state, { payload }) => {
    console.log('payload GET:', payload);
    state.shopping.isLoading = false;
    state.shopping.items = payload || state.shopping.items;
    state.shopping.error = '';
};
const handleFulfilledDel = (state, { payload }) => {
    console.log('payload DELETE:', payload);
    state.shopping.isLoading = false;
    state.shopping.items = state.shopping.items.filter(el => el._id !== payload);
    state.shopping.error = '';
  };


export const shoppingSlice = createSlice({
    name:'shopping',
    initialState:{
        shopping:{
            items:[{
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
             },],
            isLoading:false,
            error:null,
        }
    },
    extraReducers: builder =>{
        builder
            .addCase(getShoppingThunk.fulfilled, handleFulfilledGet)
            .addCase(addShoppingThunk.fulfilled, heandleFulfilledAdd)
            .addCase(deleteShoppingThunk.fulfilled, handleFulfilledDel)

            .addMatcher(
                isAnyOf(
                    addShoppingThunk.pending,
                    getShoppingThunk.pending,
                    deleteShoppingThunk.pending
                ),
                handlePending
            )
            .addMatcher(
                isAnyOf(
                    addShoppingThunk.rejected,
                    getShoppingThunk.rejected,
                    deleteShoppingThunk.rejected
                ),
                handleRejected
            )            

    }

})

export default shoppingSlice.reducer