import "../css/staffprofile.css"

const StaffProfile = ({name,position,expertise,image}) => {
    return ( 
    <div className="staffcard">
            <div className="staffcardimage">
                <img src={`${image}`} alt="" />
            </div>
            <div className="staffcardinfo">
                <ul>
                    <li>Name : <strong>{name}</strong></li>
                    <li>Position : <strong>{position}</strong></li>
                    <li>Expertise : <strong>{expertise}</strong></li>
                </ul>
            </div>
    </div> );
}
 
export default StaffProfile;