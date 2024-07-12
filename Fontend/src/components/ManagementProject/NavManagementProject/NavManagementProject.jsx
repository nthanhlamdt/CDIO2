import React from 'react'
import Search from '../../Chat/UserChat/Search'
import SelectManagementProject from './SelectManagementProject'

function NavManagementProject() {
  return (
    <div className='w-1/3 h-screen bg-white relative min-w-80 max-w-96 border-r border-l'>
      <Search />
      <SelectManagementProject />
    </div>
  )
}

export default NavManagementProject
