import React from 'react'
import { Link,NavLink  } from "react-router-dom";

const UpcomingEvents = () => {

  return (
    <>
        <div class="card border-dark mb-3">
            <div class="card-header">Events</div>
              <a href='/news&events'>
                 <div class="drop__card">
                    <div class="drop__data">
                    <div>
                        <h1 class="drop__name">2022 Honoring Ceremony</h1>
                        <span class="drop__profession">October 9, 2022</span>
                    </div>
                    </div>
                 </div>
              </a>
        </div>
    </>
  )
}

export default UpcomingEvents