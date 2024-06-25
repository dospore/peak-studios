import React from 'react';

type Props = {
  image: React.ReactNode
  title: React.ReactNode
  text: React.ReactNode
}

export default function Feature({
  image,
  title,
  text
}: Props) {
  return (
        <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
          <div className="w-10 h-10 p-2 mb-2 rounded-full bg-slate-700">
            <div className="text-white">
              {image}
            </div>
          </div>
          <h4 className="h4 mb-2 font-semibold">{title}</h4>
          <p className="text-md text-gray-400 text-center">
            {text}
          </p>
        </div>

  )

}
