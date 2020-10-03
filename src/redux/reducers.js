import { BuyPokemon, FetchPokemonFailure, FetchPokemonRequest, FetchPokemonSuccess, ReturnPokemon} from "./actions";
import { defaultGamesState, initialStateSearch } from "./store";

export const gamesReducer = (state =defaultGamesState, action) => {
    switch(action.type){
        case BuyPokemon:{
            return{
                ...state,
                pokemon:state.pokemon - action.payload.cant
            }
        }
        case ReturnPokemon: {
            return{
                ...state,
                pokemon:state.pokemon + action.payload.cant
            }

        }
        default:return state
    }
}

export const SearchReducer = (state=initialStateSearch,action) => {
    switch(action.type) {
        case FetchPokemonRequest: {
            return {
                ...state,
                loading: true
            }
        }

        case FetchPokemonSuccess:{
            return {
                loading:false,
                pokemon:action.payload,
                error:''
            }
        }
        
        case FetchPokemonFailure:
            return {
                loading: false,
                pokemon: [],
                error: action.payload
            }
        default: return state;
    }
}