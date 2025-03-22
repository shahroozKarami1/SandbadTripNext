import React, { FC } from 'react'

interface pageProps {
  children: React.ReactNode
}

const VacationRentalDetailsProvider: FC<pageProps> = ({ children }) => {
  return <div>
    {
      children
    }
  </div>
}

export default VacationRentalDetailsProvider