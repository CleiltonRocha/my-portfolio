import ImgBoraCodar from '../assets/projetos-img/bora-codar.jpg'
import ImgCoffeeDelivery from '../assets/projetos-img/coffee-delivery.jpg'
import ImgGithubBlog from '../assets/projetos-img/github-blog.jpg'
import ImgHabits from '../assets/projetos-img/habits.jpg'

export function Project() {
  return (
    // <section className="flex w-full flex-col gap-20 desktop:px-20">
    //   <div className="flex w-full flex-col gap-16">
    //     <div className="flex w-full items-center justify-between mobile:flex-col mobile:gap-10 desktop:flex-row">
    //       <div className="flex items-center gap-10 mobile:flex-col desktop:flex-row">
    //         <h1 className="inline-block bg-gradient-to-r from-blue-200 via-blue-600 to-indigo-400 bg-clip-text text-center text-6xl font-medium leading-tight text-transparent">
    //           Github Blog
    //         </h1>
    //         <div className="flex items-center gap-4">
    //           <Tags tagName="ReactJS" />
    //           <Tags tagName="TypeScript" />
    //           <Tags tagName="Styled Components" />
    //         </div>
    //       </div>
    //       <h1 className="text-7xl font-semibold text-gray-800">#01</h1>
    //     </div>
    //     <Image
    //       src={ImgGithubBlog}
    //       alt=""
    //       height={800}
    //       className="w-full rounded-3xl"
    //     />
    //   </div>
    //   <div className="flex w-full flex-col gap-16">
    //     <div className="flex w-full items-center justify-between mobile:flex-col mobile:gap-10 desktop:flex-row">
    //       <div className="flex items-center gap-10 mobile:flex-col desktop:flex-row">
    //         <h1 className="inline-block bg-gradient-to-r from-yellow-200 via-blue-100 to-pink-200 bg-clip-text text-center text-6xl font-medium leading-tight text-transparent">
    //           Coffee Delivery
    //         </h1>
    //         <div className="flex items-center gap-4">
    //           <Tags tagName="ReactJS" />
    //           <Tags tagName="TypeScript" />
    //           <Tags tagName="Styled Components" />
    //         </div>
    //       </div>
    //       <h1 className="text-7xl font-semibold text-gray-800">#02</h1>
    //     </div>
    //     <Image
    //       src={ImgCoffeeDelivery}
    //       alt=""
    //       height={800}
    //       className="w-full rounded-3xl"
    //     />
    //   </div>
    //   <div className="flex w-full flex-col gap-16">
    //     <div className="flex w-full items-center justify-between mobile:flex-col mobile:gap-10 desktop:flex-row">
    //       <div className="flex items-center gap-10 mobile:flex-col desktop:flex-row">
    //         <h1 className="inline-block bg-gradient-to-r from-purple-200 via-purple-500 to-purple-800 bg-clip-text text-center text-6xl font-medium leading-tight text-transparent">
    //           Habits
    //         </h1>
    //         <div className="flex items-center gap-4">
    //           <Tags tagName="ReactJS" />
    //           <Tags tagName="TypeScript" />
    //           <Tags tagName="NodeJS" />
    //           <Tags tagName="RadixUI" />
    //           <Tags tagName="TailwindCSS" />
    //         </div>
    //       </div>
    //       <h1 className="text-7xl font-semibold text-gray-800">#03</h1>
    //     </div>
    //     <Image
    //       src={ImgHabits}
    //       alt=""
    //       height={800}
    //       className="w-full rounded-3xl"
    //     />
    //   </div>
    //   <div className="flex w-full flex-col gap-16">
    //     <div className="flex w-full items-center justify-between mobile:flex-col mobile:gap-10 desktop:flex-row">
    //       <div className="flex items-center gap-10 mobile:flex-col desktop:flex-row">
    //         <h1 className="inline-block bg-gradient-to-r from-orange-300 via-purple-500 to-purple-800 bg-clip-text text-center text-6xl font-medium leading-tight text-transparent">
    //           Desafios
    //         </h1>
    //         <div className="flex items-center gap-4">
    //           <Tags tagName="HTML" />
    //           <Tags tagName="CSS" />
    //           <Tags tagName="Java Script" />
    //         </div>
    //       </div>
    //       <h1 className="text-7xl font-semibold text-gray-800">#04</h1>
    //     </div>
    //     <Image
    //       src={ImgBoraCodar}
    //       alt=""
    //       height={600}
    //       className="w-full rounded-3xl"
    //     />
    //   </div>
    // </section>
    <div className="relative grid w-full grid-cols-2 items-start gap-16">
      <img
        src={ImgGithubBlog}
        alt=""
        className="w-full rounded-lg"
        data-aos="fade-left"
      />
      <span className="text-indigo-200">TailwindCSS</span>
    </div>
  )
}
