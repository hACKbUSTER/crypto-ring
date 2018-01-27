import React from 'react'
import imgRing from '../img/ring.png'

export default function (props) {
    return (
        <div class="wsh-container">
            <section>
                <h3 className="wsh-header">your address</h3>
                <div className="avatar-row wsh-avatar-row">
                    <div className="avatar">
                        <img alt="avatar" src="https://s3.amazonaws.com/cdn-live.sketch.cloud/default_avatars/m/2.png" />
                    </div>
                    <pre className="address highlight">0x00435452354265345432</pre>
                </div>
            </section>
            <div className="with-border">
            </div>
            <div className="wsh-title">
                <span>FOR SALE · </span>
                <span className="wsh-span">WITNESS </span>
            </div>
            <div>
                <table>
                    <tr className="wsh-tr">
                        <td>
                            <img className="wsh-td-img" alt="avatar" src= {imgRing}/>
                        </td>
                        <td>
                            <img className="wsh-td-img" alt="avatar" src="https://s3.amazonaws.com/cdn-live.sketch.cloud/default_avatars/m/2.png" />
                        </td>
                        <td>
                            <img className="wsh-td-img" alt="avatar" src="https://s3.amazonaws.com/cdn-live.sketch.cloud/default_avatars/m/2.png" />
                        </td>
                        <td>
                            <img className="wsh-td-img" alt="avatar" src="https://s3.amazonaws.com/cdn-live.sketch.cloud/default_avatars/m/2.png" />
                        </td>
                    </tr>
                    <tr className="wsh-tr">
                        <td>
                            <img className="wsh-td-img" alt="avatar" src= {imgRing}/>
                        </td>
                        <td>
                            <img className="wsh-td-img" alt="avatar" src="https://s3.amazonaws.com/cdn-live.sketch.cloud/default_avatars/m/2.png" />
                        </td>
                        <td>
                            <img className="wsh-td-img" alt="avatar" src="https://s3.amazonaws.com/cdn-live.sketch.cloud/default_avatars/m/2.png" />
                        </td>
                        <td>
                            <img className="wsh-td-img" alt="avatar" src="https://s3.amazonaws.com/cdn-live.sketch.cloud/default_avatars/m/2.png" />
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
