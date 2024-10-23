import React from 'react'
import { ImageGallery } from "react-image-grid-gallery";

const imagesArray = [
  {
    alt: "Image1's alt text",
    caption: "Image1's description",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7KklBWW8kc2AH2nueBuYWOsi5nPCAdENTzw&s",
  },
  {
    alt: "Image2's alt text",
    caption: "Image2's description",
    src: "https://storage.googleapis.com/creatorspace-public/users%2Fclkquv25y00eosr01lf6cofsx%2F5Qesb0YHKQfxVIkd-Finance101F101.png",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://media.licdn.com/dms/image/sync/v2/D5627AQH2r5ZvET1rEQ/articleshare-shrink_800/articleshare-shrink_800/0/1717256737332?e=2147483647&v=beta&t=2kWPnhsblwh-CyRGPyS4Bb4sKESpiscgi6N-rnEzRsw",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://creatorspace.imgix.net/users/clkquv25y00eosr01lf6cofsx/tROGLGNRg7LPmmYi-20230702_181033.jpg?w=750&h=750",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://i0.wp.com/plopdo.com/wp-content/uploads/2019/03/group-discussion.jpg?resize=1210%2C642&ssl=1",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnqNjOeCNvFNsf4Q7EWq9OK8fjPnq2UkCaxQ&s",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl0BHcTZXqh0RpmCoXhMV_tHTJznutxcdThA&s",
  },

  {
    alt: "Image1's alt text",
    caption: "Image1's description",
    src: "https://i.ytimg.com/vi/xEMLQ_K7CuY/hqdefault.jpg",
  },
  {
    alt: "Image2's alt text",
    caption: "Image2's description",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhuDYJZWEo-nqiCbwfGji9VJYSlza1N1kCAw&s",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-VFK3TDvO1kPwosjUzh-URMYcnJeRlSgNpA&s",
  },
];


const Gallery = () => {
  return (
    <>
        <div className='h-[120vh]'>
          <h1 className='text-[#2e27a8] text-[36px] text-center p-[50px] font-bold'>GALLARY</h1>
          <div className='w-[80vw] ml-[10%] mr-[10%]'>
            {
              <ImageGallery
              imagesInfoArray={imagesArray}
              columnCount={"auto"}
              columnWidth={230}
              gapSize={24}
            />
            }
          </div>
        </div>
    </>
  )
}

export default Gallery