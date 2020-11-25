import React from 'react';

const MODAL_UserPanel = {
  height: '63px',
  backgroundColor: '#FFF',
  fontFamily: 'helvetica neue, helvetica, arial, sans-serif',
  paddingRight: '20px'
}

const image_details_header = {
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '12px',
  marginBottom: '10px'
}

const pipe = {
  padding: '0 5px'
}

const avatar = {
  verticalAlign: 'middle',
  width: '25px',
  height: '25px',
  borderRadius: '50%'
}

const user_info = {
  display: 'flex',
  justifyContent: 'space-between',
  color: '#757575',
  fontSize: '10px'
}

const avatar_user_box = {
  display: 'flex'
}

const user_and_badges = {
  display: 'flex'
}

const username = {
  fontWeight: '600'
}

const badges = {
  display: 'flex',
  paddingLeft: '5px'
}

const UserPanel = (props) => {

  return (
    <div style={MODAL_UserPanel}>
      <div className="image-details">
        <div style={image_details_header}>
          <div className="image-title-wrapper"><b>blues</b> <span class="group-string">in Makeup Is Life</span></div>
          <div className="image-title-right" style={{color:' #757575'}}>
            <span>Nov 20</span>
            <span style={pipe}>|</span>
            <span>Report</span>
          </div>
        </div>
      </div>
      <div style={user_info}>
        <div style={avatar_user_box}>

            <img style={avatar}src="https://quesbucket.s3.us-east-2.amazonaws.com/Module+Photos/woman3.jpg"></img>

          <div className="username-wrapper-left">
          <div style={user_and_badges}>
            <div style={username}>
              <span>{props.currentMember.Name}</span>
            </div>
            <div style={badges}>
              <div>
                <img height='12px' src="https://quesbucket.s3.us-east-2.amazonaws.com/ETPicons/insider-badge.png"></img>
              </div>
              <div style={{paddingLeft: '3px'}}>
                <img height='12px' src="https://quesbucket.s3.us-east-2.amazonaws.com/ETPicons/rookie-badge.png"></img>
              </div>
            </div>
          </div>
            <div class="skin-type">Skin Type: <span>{props.currentMember.Skin_type}</span></div>
          </div>

        </div>
        <div className="share-button-right">
          <img height='15px' src="https://quesbucket.s3.us-east-2.amazonaws.com/ETPicons/share.png"></img>
        </div>
      </div>
    </div>
  )
}

export default UserPanel;