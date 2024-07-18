import TipsCard from '@/components/TipsCard';
import React from 'react'

const Tips = () => {
    const tipsForNewOwners = [
        {
          title: "Tips for New Cat Owners",
          description: "Helpful advice for those who are new to cat ownership, including how to prepare your home."
        },
        {
          title: "Managing Cat Behavior",
          description: "Strategies for managing common cat behaviors and ensuring a harmonious household."
        },
        {
          title: "Creating a Cat-Friendly Environment",
          description: "Ideas for making your home a safe and stimulating place for your cat."
        }
      ];
  return (
    <section className="mb-12">
    <h2 className="text-4xl text-gray-900 font-semibold mb-2 ">Tips for New Cat Owners</h2>
    <p className='mb-5 text-gray-500'>Tips for new cat owners, behavior management, and creating a cat-friendly environment.</p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tipsForNewOwners.map((tip, index) => (
        <TipsCard key={index} title={tip.title} description={tip.description}/>
        // <div  className="bg-white p-6 rounded-lg shadow-md">
        //   <h3 className="text-xl font-semibold mb-4">{tip.title}</h3>
        //   <p className="text-gray-700 mb-4">{tip.description}</p>
        // </div>
      ))}
    </div>
  </section>
  )
}

export default Tips