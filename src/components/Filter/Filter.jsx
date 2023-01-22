import React from 'react';

import { Label, Input } from './Filter.styled';

import { useDispatch } from 'react-redux';
import { setQuery } from "../redux/contacts.slice"


export const Filter = () => {

  const dispatch = useDispatch();

  const onChangeFilter = (query) => {
    dispatch(setQuery(query))
  }
    return (
         <Label htmlFor="">
        Find contacts by name
          <Input type="text" onChange={(e) => onChangeFilter(e.target.value)} />
        </Label>       
    )
}


