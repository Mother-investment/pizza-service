import { AnyAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { IActiveSortAndCategory } from "../../models/IHomePage"
import { IPizza } from "../../models/IPizza"


interface PizzasState {
    pizzas: IPizza[]
    isLoading: boolean
    error: undefined | string
}

const initialState: PizzasState = {
    pizzas: [],
    isLoading: false,
    error: undefined
}

export const fetchPizzas = createAsyncThunk<IPizza[], IActiveSortAndCategory, {rejectValue: string}>('pizza/fetchPizza', async (options, {rejectWithValue}) =>{
    try {
        const res = await axios.get<IPizza[]>(`https://6316b14c33e540a6d3978af6.mockapi.io/pizzas?${options.category > 0 && `category=${options.category}`}&sortBy=${options.sort}&order=${options.order ? 'desc' : 'asc'}`)
        return res.data
    } catch (error) {
        return rejectWithValue('Не удалось загрузить список пицц')
    }
})

export const pizzasSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchPizzas.fulfilled, (state, action: AnyAction) => {
                state.isLoading = false
                state.error = undefined
                state.pizzas = action.payload
            })
            .addCase(fetchPizzas.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchPizzas.rejected, (state, action: AnyAction) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
}) 


export default pizzasSlice.reducer