import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const loading = () => {
  return (
    <div className="p-4 max-w-4xl mx-auto">
    <Skeleton className='h-8 w-64 mb-6'/>
    <Skeleton className='w-full h-[400px] rounded-md mb-4'/>
  
    <Skeleton className='h-4 w-32 mb-2'/>

    <div className="space-y-1 mt-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-1/2" />
      </div>

   
  </div>
  )
}

export default loading