import React from 'react'
import { Button } from 'react-bootstrap';
import { Link,NavLink  } from "react-router-dom";
import './index.scss'

const Events = () => {

  return (
    <>
        <div class="card">
              <a href='/news&events'>
                 <div className='cardContent'>
                    <div className='cardText'>
                        <h1 >2022 Honoring Ceremony</h1>
                    </div>
                    <Button className='eventBtn'>Read More</Button>
                 </div>
              </a>
        </div>
    </>
  )
}

export default Events