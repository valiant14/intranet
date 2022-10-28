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
                    <img src="https://media.istockphoto.com/vectors/file-icon-format-pdf-download-document-image-button-vector-doc-icon-vector-id1356214382?b=1&k=20&m=1356214382&s=170667a&w=0&h=rnxZBD09iL8l39HbKK3k_3IixprVmtg2yBPnjcKpDbk=" alt="" className="drop__img"/>
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