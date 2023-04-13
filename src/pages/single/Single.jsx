import React from 'react'
import './single.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Chart from '../../components/chart/Chart'
import List from '../../components/list/List'


const Single = () => {
  return (
    <div className='single'>
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
          <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemName">Jane Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+917403104444</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">8th main </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">India</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title={"User Spending in Last Six Months"}/>
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <List/>
        </div>
      </div>
    </div>
  )
}

export default Single