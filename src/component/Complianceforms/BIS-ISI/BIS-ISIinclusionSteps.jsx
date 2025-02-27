import React, {useState, useEffect} from "react";
import Message from "../../popup/Message";

import { ReactComponent as Thum1png } from "../../assets/BisIsiSteps/testingsample.svg";
import { ReactComponent as Thum2png } from "../../assets/BisIsiSteps/document.svg";
import { ReactComponent as Thum3png } from "../../assets/BisIsiSteps/submissionappli.svg";
import { ReactComponent as Thum4png } from "../../assets/BisIsiSteps/dealingofc.svg";
import { ReactComponent as Thum5png } from "../../assets/BisIsiSteps/hod.svg";
import { ReactComponent as Wrong } from "../../assets/trckpg-rb/wrong.svg";
import { ReactComponent as Right } from "../../assets/trckpg-rb/right.svg";
import axiosInstance from "../../../interceptors/axios";


function BISISIInclusionSteps () {

    const [docStep, setdocStep] = useState({});
    localStorage.setItem("bisInclusiondocStep", JSON.stringify(docStep));

    const [buttonPopup3, setButtonPopup3] = useState(false);
    const [buttonPopup4, setButtonPopup4] = useState(false);
    const [buttonPopup5, setButtonPopup5] = useState(false);
    const [buttonPopup6, setButtonPopup6] = useState(false);
    const [buttonPopup7, setButtonPopup7] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const bisIsicompliance_id = localStorage.getItem("bisIsicompliance_id");
            const bisIsiapplication_id = localStorage.getItem("bisIsiapplication_id");
            const bisIsirequest_for = localStorage.getItem("bisIsirequest_for");
    
            const response = await axiosInstance.get(
              `application/status/?compliance=${bisIsicompliance_id}&application=${bisIsiapplication_id}&request_for=${bisIsirequest_for}`
            );
    
            const stepstatus = response.data.data;
            const newDocStep = {};
            for (let i = 0; i < stepstatus.length; i++) {
              const step = stepstatus[i];
              newDocStep[step.step] = [step.status, step.message, step.start_date];
            }
    
            let count = 0;
            for (let i = 0; i < stepstatus.length; i++) {
              if (stepstatus[i].status === "Completed") {
                count += 1;
              }
            }
            localStorage.setItem("stepstatus", count);
            console.log(count);
            setdocStep(newDocStep);
            console.log(newDocStep);
          } catch (error) {
            console.log(error);
          }
        };
    
        fetchData();
    
        const interval = setInterval(fetchData, 2000);
    
        return () => {
          clearInterval(interval);
        };
      }, []);


return (
<div>
        <h2 className="steps-count">Steps To Be Completed</h2>  
        <div className="tecon"> 
         <Message trigger={buttonPopup3} setTrigger={setButtonPopup3}>
         <table>  
  <tr>
  <th>Start Date:</th>
  <th>Message: </th>
  </tr>
<tbody style={{color: "black"}}>
    <td>{ docStep["1"] && docStep["1"][2].slice(0, 10) }</td>
    <td>{ docStep["1"] && docStep["1"][1] }</td>
    </tbody>
</table>
         </Message>
      
        <Thum1png className="mainsvg2" />
        {docStep["1"] && docStep["1"][0] === "Completed" ? (
        <Right className="mainsvg3" onClick={() => setButtonPopup3(true)} />
      ) : (
        <Wrong className="mainsvg3" onClick={() => setButtonPopup3(true)}/>
      )}
      {/* <h3 className="setp-bis">BIS Portal Registration</h3> */}
      
      
      
      <Message trigger={buttonPopup4} setTrigger={setButtonPopup4}>
      <table>  
  <tr>
  <th>Start Date:</th>
  <th>Message: </th>
  </tr>
<tbody style={{color: "black"}}>
    <td>{ docStep["2"] && docStep["2"][2].slice(0, 10) }</td>
    <td>{ docStep["2"] && docStep["2"][1] }</td>
    </tbody>
</table>
         </Message>
      
        <Thum2png className="mainsvg2" />
        {docStep["2"] && docStep["2"][0] === "Completed" ? (
          <Right className="mainsvg3" onClick={() => setButtonPopup4(true)}/>
        ) : (
          <Wrong className="mainsvg3" onClick={() => setButtonPopup4(true)}/>
        )}
        {/* <h3 className="setp-bis">Sample Testing</h3> */}
      
      
      <Message trigger={buttonPopup5} setTrigger={setButtonPopup5}>
      <table>  
  <tr>
  <th>Start Date:</th>
  <th>Message: </th>
  </tr>
<tbody style={{color: "black"}}>
    <td>{ docStep["3"] && docStep["3"][2].slice(0, 10) }</td>
    <td>{ docStep["3"] && docStep["3"][1] }</td>
    </tbody>
</table>
         </Message>
      
        <Thum3png className="mainsvg2" />
        {docStep["3"] && docStep["3"][0] === "Completed" ? (
          <Right className="mainsvg3" onClick={() => setButtonPopup5(true)}/>
        ) : (
          <Wrong className="mainsvg3" onClick={() => setButtonPopup5(true)}/>
        )}
        {/* <h3 className="setp-bis">Documentation</h3> */}
      
      
      <Message trigger={buttonPopup6} setTrigger={setButtonPopup6}>
      <table>  
  <tr>
  <th>Start Date:</th>
  <th>Message: </th>
  </tr>
<tbody style={{color: "black"}}>
    <td>{ docStep["4"] && docStep["4"][2].slice(0, 10) }</td>
    <td>{ docStep["4"] && docStep["4"][1] }</td>
    </tbody>
</table>
         </Message>
      
        <Thum4png className="mainsvg2" />
        {docStep["4"] && docStep["4"][0] === "Completed" ? (
          <Right className="mainsvg3" onClick={() => setButtonPopup6(true)}/>
        ) : (
          <Wrong className="mainsvg3" onClick={() => setButtonPopup6(true)}/>
        )}
        {/* <h3 className="setp-bis">Filing Application</h3> */}
      
      <Message trigger={buttonPopup7} setTrigger={setButtonPopup7}>
      <table>  
  <tr>
  <th>Start Date:</th>
  <th>Message: </th>
  </tr>
<tbody style={{color: "black"}}>
    <td>{ docStep["5"] && docStep["5"][2].slice(0, 10) }</td>
    <td>{ docStep["5"] && docStep["5"][1] }</td>
    </tbody>
</table>
         </Message>
      
        <Thum5png className="mainsvg2" />
        {docStep["5"] && docStep["5"][0] === "Completed" ? (
          <Right className="mainsvg3" onClick={() => setButtonPopup7(true)}/>
        ) : (
          <Wrong className="mainsvg3" onClick={() => setButtonPopup7(true)}/>
        )}
        {/* <h3 className="setp-bis">Approval</h3> */}
      
      </div>
      </div>
    );
};

export default BISISIInclusionSteps;
