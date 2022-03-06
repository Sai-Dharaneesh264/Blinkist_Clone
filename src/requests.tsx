import axios from 'axios'

import { StateProps } from './components/assets/Types'

let ans: StateProps[];
export const getBooks = async () => {
  const { data } = await axios.put('http://localhost:3004/books', {value: 'chandu', data: 'dharaneesh'})
   console.log('data-', data)
}