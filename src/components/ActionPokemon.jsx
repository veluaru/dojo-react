import React from 'react';
import { useDispatch } from 'react-redux';
import { BuyPokemonActions, ReturnPokemonActions } from '../redux/actions';

export default function ActionPokemon() {
    const dispatch = useDispatch()
    return (
        <div>
            <button className="btn btn-dark btn-sm mb-2" nClick={() => {
                dispatch(BuyPokemonActions(1));
            }}>
                Comprar Pokemon</button>

            <button className="btn btn-dark btn-sm "nClick={() => {
                dispatch(ReturnPokemonActions(1))
            }}>
                Devolver Pokemon</button>
        </div>
    )
}