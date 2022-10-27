import React from 'react'
import ceo from '../../../assets/images/ceo1.png'
import './index.scss'

// const ReadMore = ({ children }) => {
//   const text = children;
//   const [isReadMore, setIsReadMore] = React.useState(true);
//   const toggleReadMore = () => {
//     setIsReadMore(!isReadMore);
//   };
//   const readMore = () => {
//     return <h1 className='more'>Read More</h1>
//   }

//   const readLess = () => {
//     return <h1 className='more'>Show Less</h1>
//   }

//   return (
//     <p className="text">
//       {isReadMore ? text.slice(0, 35) : text}
//       <span onClick={toggleReadMore} className="read-or-hide">
//         {isReadMore ? readMore() : readLess()}
//       </span>
//     </p>
//   );
// };

const Features = () => {
  return (
    <>
        <div class="card">
            <div class="card-header">Features</div>
                 {/* <div className="flex-container">
                    <div className="drop__data">
                        <img src={ceo} alt="" className="ceoImage"/>
                    <div>
                    <h1 className="AboutCeo">About Ceo</h1>
                        <p className="drop__name">
                            Experienced Chief Executive Officer with 20 years of experience with a demonstrated history of working in
                            different industries mainly ICT. Skilled in leadership, building strategies, management, communications, and
                            business development.
                          </p>
                    </div>
                    </div>
                 </div> */}
                 <div className="drop__card">
                    <div className="drop__data">
                        <img src={ceo} alt="" className="drop__imgs"/>
                    <div>
                        <h1 className="drop__name">About Ceo</h1>
                        <span className="ceoReadMore"> Experienced Chief Executive Officer with 20 years... <span className='drop__profession'>Read More</span></span>
                    </div>
                    </div>
                 </div>

        </div>
    </>
  )
}

export default Features