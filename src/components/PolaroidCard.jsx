// // src/components/PolaroidCard.js
// import React from 'react';

// const PolaroidCard = ({ image, caption, rotation }) => {
//   return (
//     <div className={`polaroid-card bg-white p-0 shadow-lg text-center w-56 h-72 transform ${rotation} m-4`}>
//       <img src={image} alt={caption} className="w-full h-60 object-cover" />
//       <div className="caption mt-2 text-sm">{caption}</div>
//     </div>
//   );
// };

// export default PolaroidCard;

// import React from 'react';

// const PolaroidCard = ({ image, caption, rotation, isEdge }) => {
//   return (
//     <div
//       className={`relative flex-shrink-0 w-56 h-72 bg-white shadow-lg  m-4 transform transition-transform duration-300 hover:scale-110 ${
//         rotation
//       } ${isEdge ? 'mx-8' : ''}`}
//       style={{ overflow: 'hidden' }}
//     >
//     <img src={image} alt={caption} className="w-full h-60 object-cover " />
//       <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-70 p-2 text-center">
//         {caption}
//       </div>
//     </div>
//   );
// }

// export default PolaroidCard;

// import React from 'react';

// const PolaroidCard = ({ image, caption, rotation }) => {
//   return (
//     <div
//       className={`relative flex-shrink-0 w-48 h-60 bg-white shadow-lg rounded-lg m-4 transform transition-transform duration-300 hover:scale-110 ${rotation}`}
//       style={{ overflow: 'hidden' }}
//     >
//       <img src={image} alt={caption} className="w-full h-full object-cover rounded-lg" />
//       <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-70 p-2 text-center">
//         {caption}
//       </div>
//     </div>
//   );
// }

// export default PolaroidCard;

// import React from 'react';
// import ArrowRight from 'D:/corporate-web/src/assets/ArrowRight.svg';

// const PolaroidCard = ({ image, caption, rotation, active }) => {
//   return (
//     <div
//       className={`relative w-56 h-80 bg-white m-4 transform transition-transform duration-500 ${rotation} ${active ? 'scale-110' : 'scale-90'} ${active ? 'z-10' : 'z-0'}`}
//       style={{ overflow: 'hidden' }}
//     >
//       <img src={image} alt={caption} className="w-full h-64 object-cover" />
//       <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-70 p-2 text-center">
//         {caption}
//         <img src={ArrowRight} alt="Arrow Right" width="20" height="16" className="place-items-center" />
//       </div>
//     </div>
//   );
// }

// export default PolaroidCard;

// import React from 'react';
// import rightarrowblack from 'D:/corporate-web/src/assets/blackarrow.png';

// const PolaroidCard = ({ image, caption, rotation, active }) => {
//   return (
//     <div
//       className={`relative w-56 h-80 bg-white m-4 transform transition-transform duration-500 ${rotation} ${active ? 'scale-110' : 'scale-90'} ${active ? 'z-10' : 'z-0'}`}
//       style={{ overflow: 'hidden' }}
//     >
//       <img src={image} alt={caption} className="w-full h-[17rem] object-cover" />
//       <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-70 p-2 flex items-center justify-between">
//         <span className='font-normal'>{caption}</span>
//         <img src={rightarrowblack} alt="Arrow Right" width="24" height="20" />
//       </div>
//     </div>
//   );
// }

// export default PolaroidCard;

// File path: src/components/PolaroidCard.js

// import React from 'react';
// import rightarrowblack from 'D:/corporate-web/src/assets/blackarrow.png';

// const PolaroidCard = ({ image, caption, rotation }) => {
//   return (
//     <div
//       className={`relative w-56 h-80 bg-white m-4 transform transition-transform duration-500 ${rotation}`}
//       style={{ overflow: 'hidden' }}
//     >
//       <img src={image} alt={caption} className="w-full h-[17rem] object-cover" />
//       <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-70 p-2 flex items-center justify-between">
//         <span className='font-normal'>{caption}</span>
//         <img src={rightarrowblack} alt="Arrow Right" width="24" height="20" />
//       </div>
//     </div>
//   );
// }

// export default PolaroidCard;

// File path: src/components/PolaroidCard.js

import React from 'react';
import rightarrowblack from '/blackarrow.png';

const PolaroidCard = ({ image, caption, rotation }) => {
  return (
    <div
      className={`PolaroidCard relative w-52 h-80 bg-white m-4 shadow-lg transform transition-transform duration-500 ${rotation} hover:scale-110 hover:z-10`}
      style={{ overflow: 'hidden' }}
    >
      <img src={image} alt={caption} className="w-full h-[17rem] object-cover" />
      <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-70 p-2 flex items-center justify-between">
        <span className='font-normal'>{caption}</span>
        <img src={rightarrowblack} alt="Arrow Right" width="24" height="20" />
      </div>
    </div>
  );
}

export default PolaroidCard;


