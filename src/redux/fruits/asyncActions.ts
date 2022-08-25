import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Fruit, SearchParams } from './types';
import pickBy from 'lodash/pickBy';
import identity from 'lodash/identity';

export const fetchFruits = createAsyncThunk<Fruit[], SearchParams>(
    'fruits/fetchFruits',
    async (params) => {
      const { sortBy, order, category, search, currentPage } = params;
      const { data } = await axios.get<Fruit[]>(`https://62bcc3246b1401736c008049.mockapi.io/items`, {
        params: pickBy(
          {
            page: currentPage,
            limit: 10,
            category,
            sortBy,
            order,
            search,
          },
          identity,
        ),
      });
      return data;
    },
  );