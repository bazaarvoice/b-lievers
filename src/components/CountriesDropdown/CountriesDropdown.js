import React from 'react'
import MenuDropdown from '@bv/aperture-components-react-menu-dropdown';
  
function CountriesDropdown() {
  return (
    <MenuDropdown
    onChange={(updatedOption, updatedOptions) => {
      /* ... */
    }}
    options={[
      { value: 'us-texas', label: 'Texas', selected: false },
      { value: 'india-karnataka', label: 'Karnataka', selected: false },
      { value: 'northern-ireland', label: 'Northern Ireland', selected: true }
    ]}  s
    searchAriaLabel="search"
  />
  )
}

export default CountriesDropdown