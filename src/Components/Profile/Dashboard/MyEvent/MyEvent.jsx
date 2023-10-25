import { useEffect, useState,  useContext } from 'react'
import MyEventCards from './MyEventCards'
import "./MyEvent.css"
import cancel from '../../../../assets/SkillHunt/XCircle.png';
import axios from 'axios';
import AuthContext from "../../../../store/auth-context";
import Load from '../../../../MicroInterAction/Load';
export default function MyEvents() {
  
    const authCtx = useContext(AuthContext);
    const [card,setCard] = useState([])
    const [show,setShow] = useState(false)
    const [cardNo,setCardNo] = useState("")
    const [mainLoading,setMainLoading] = useState(true)
    const [currTeam,setCurrTeam] = useState([])
    const getuserformdetails = async () => {
      var result = await axios.get("/form/getuserformdetails", {
        headers: {
          Authorization: authCtx.token,
        },
      });
      setMainLoading(false)
      setCard(result.data)
    }
    const currentTeam = {}
    const getTeamDetails = async (info) =>{
      setCurrTeam([])
      var result = await axios.get(`/form/getteamdetails?formid=${info._id}`,{
        headers:{
          Authorization:authCtx.token
        }
      })
      setCurrTeam(result.data)
    }

    useEffect(()=>{
      getuserformdetails()
    },[])
    currTeam.map((e)=>{
      console.log(e)
    })
    return (
      <div className="viewEventss">
        <div className="viewevents">
          {mainLoading ? <Load />:<></>}
          {card.map((e,idx)=>{
              return <MyEventCards
              info={e}
              key={idx}
              setShow={setShow}
              setCardNo={setCardNo}
              getTeamDetails={getTeamDetails}
            />
          })}
        </div>
        {show ? (
          <div className="modal">
            <img
              src={cancel}
              alt=""
              onClick={() => setShow(false)}
              id="CloseIcon"
            />
            <table className='table'>
              <th className="th" colSpan={2} style={{fontSize:"1.5rem"}}>Team Details</th>
              <tr className='tr'>
                <th className='th'>Member</th>
                <th className='th'>Actions</th>
              </tr>
              {currTeam.map((member)=>{
                return <tr className="tr">
                  <td className="td">{member.name}</td>
                  <td className="td">
                  <a href={`${member.token}`} target='_blank'>
                    <button className="deleteMemberBtn">Remove</button>
                  </a>
                  </td>
                </tr>;
              })}
            </table>
          </div>
        ) : (
          <></>
        )}
      </div>
    );
}