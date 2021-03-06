import React from 'react'
import img1 from '../img/pic1.png'
import img2 from '../img/pic2.png'
import img3 from '../img/pic3.png'
import img4 from '../img/pic4.png'

export default function (props) {
  const onClick = () => {
    window.location.href = '/sale/1';
  }
  return (
    <div class="wsh-container">
      <div className="wsh-title">
        <span>FOR SALE · </span>
        <span className="wsh-span">WITNESS </span>
      </div>
      <div>
        <table>
          <tr className="wsh-tr">
            <td>
              <img className="wsh-td-img" alt="avatar" src={img1} onClick={onClick} />
            </td>
            <td>
              <img className="wsh-td-img" alt="avatar" src={img2} onClick={onClick} />
            </td>
            <td>
              <img className="wsh-td-img" alt="avatar" src={img3} onClick={onClick} />
            </td>
            <td>
              <img className="wsh-td-img" alt="avatar" src={img4} onClick={onClick} />
            </td>
          </tr>
        </table>
      </div>
      <div className="wsh-div-bottom">
        1/10
      </div>
    </div>
  )
}
