import React from 'react'
import Weather from '../../Cards/weatherCard'

const Documents = () => {
  return (
    <>
        <div className="card border-dark mb-3">
            <div className="card-header">Important Documents</div>
                 <div className="drop__card">
                    <div className="drop__data">
                        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="" className="drop__img"/>
                    <div>
                        <h1 className="drop__name">New Update on AX</h1>
                        <span className="drop__profession">Sep 26, 2022 2:00 PM</span>
                    </div>
                    </div>
                 </div>
                 <div className="drop__card">
                    <div className="drop__data">
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=046c29138c1335ef8edee7daf521ba50" alt="" className="drop__img"/>
                    <div>
                        <h1 className="drop__name">Agreement with STC renewed</h1>
                        <span className="drop__profession">Sep 26, 2022 2:00 PM</span>
                    </div>
                    </div>
                 </div>
                 <div className="drop__card">
                    <div className="drop__data">
                        <img src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg" alt="" className="drop__img"/>
                    <div>
                        <h1 className="drop__name">Seder Hit the Jackpot with new 1B</h1>
                        <span className="drop__profession">Sep 26, 2022 2:00 PM</span>
                    </div>
                    </div>
                 </div>
        </div>
        
    </>
  )
}

export default Documents