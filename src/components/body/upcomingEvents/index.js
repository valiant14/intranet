import React from 'react'
import { Button } from 'react-bootstrap';
import { Link,NavLink  } from "react-router-dom";
import './index.scss'

const UpcomingEvents = () => {

  return (
    <>
        <div class="card">
              <a href='/news&events'>
                 <div className='cardContentUp'>
                    <div className='cardTextUp'>
                        <h1 >Upcoming Event</h1>
                    </div>
                    <Button className='eventBtnUp'>Read More</Button>
                 </div>
              </a>
        </div>
    </>
  )
}

export default UpcomingEvents