import React, { useState } from 'react'
import { Button } from '../ButtonComponent/ButtonComponent'

const SearchComponent = () => {
  return (
    <div className='search-container'>
      <input type='search' role='search' placeholder='Find a Pokemon!!'/>
      <Button text="Search" type="submit" role='submit'/>
    </div>
  )
}

export default SearchComponent