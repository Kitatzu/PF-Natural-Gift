import React from 'react'
import SideBar from './SideBar'
import './Dashboard.scss'
import Table from './Table'
import Chart from './Chart'
import Featured from './Featured'
import Users from './Users'
import Prods from './Prods'


function Dashboard() {
  return (
    <div className="home">
    <SideBar />
    <div className="homeContainer">
    <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
    <div className="listTitle">Latest Transactions</div>
    <Table />
    </div>
    </div>
  )
}

export default Dashboard