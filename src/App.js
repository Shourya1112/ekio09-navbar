import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./component/auth/Login";
import ErrorPage from "./component/errorPage";
import NewPassword from "./component/auth/NewPassword";
import View from "./component/pages/View";
//import Add from "./component/pages/Add";
import Review from "./component/pages/review";
// import Myaccount from "./component/pages/Myaccount";
import Download from "./component/pages/Download";
import SignUP from "./component/auth/SignUP";
import Firstpage from "./component/pagesscrn4/Firstpage";
import Secondpage from "./component/pagesscrn4/Secondpage";
// import TECForms from "./component/pagesscrn4/ComplianceForms/TECForms";
// import BISForms from "./component/pagesscrn4/ComplianceForms/BISForms";
import Fourthpage from "./component/pagesscrn4/Complianceinformation/TECcompliance";
import ClientDashboard from "./component/pagesscrn4/client-dashbord/Clientdashboard";
import Navbar from "./component/pagesscrn4/Navbar/Navbar";
// import ComplianceTrackChoose from "./component/pagesscrn4/ComplianceTrackChoose";

//COMPLIANCE REVIEW PAGE CHANGE INTO SEPRATE PAGES BISTABLE, TECTabel, WPCTable
// import BISTableReview from "./component/Complianceforms/BIS/Bistrackpages/BISTablePage";
// import TECTableReview from "./component/Complianceforms/TEC/Tectrackpage/TECTableReview";
// import WPCTableReview from "./component/Complianceforms/WPC/WPCTrackPages/WPCTableReview";

// COMPLIANCE IMPORTS HERE--------------------

import BISongoing from "./component/Complianceforms/BIS/Bistrackpages/BISoongoing";
import BIScompleted from "./component/Complianceforms/BIS/Bistrackpages/BIScompleted";
import BISinclusion from "./component/Complianceforms/BIS/Bistrackpages/BISInclusion";
import TECOnGoing from "./component/Complianceforms/TEC/Tectrackpage/TECOngoing";
import TECcompleted from "./component/Complianceforms/TEC/Tectrackpage/TECcompleted";
import TECmodification from "./component/Complianceforms/TEC/Tectrackpage/TECmodification";
import WPCOngoing from "./component/Complianceforms/WPC/WPCTrackPages/WPCOngoing";
import WPCcompleted from "./component/Complianceforms/WPC/WPCTrackPages/WPCcompleted";
import BisIsiCompleted from "./component/Complianceforms/BIS-ISI/BIS-ISITrackPages/BIS-ISICompleted";
import BisIsiOnGoing from "./component/Complianceforms/BIS-ISI/BIS-ISITrackPages/BIS-ISIOngoing";
import BisIsiInclusion from "./component/Complianceforms/BIS-ISI/BIS-ISITrackPages/BIS-IsiInclusion";
import BisIsiSimplfiyOnGoing from "./component/Complianceforms/BIS-ISI/BIS-ISISimplifyTrack/BIS-ISISimplifyOngoing";
import BisIsiSimplfiyCompleted from "./component/Complianceforms/BIS-ISI/BIS-ISISimplifyTrack/BIS-ISISimplifyCompleted";

import BEECompleted from "./component/Complianceforms/BEE/BEEtrackPages/BEECompleted";
import BEEInclusion from "./component/Complianceforms/BEE/BEEtrackPages/BEEInclusion";
import BEEonGoing from "./component/Complianceforms/BEE/BEEtrackPages/BeeOongoing";
// -------------END Compliance Import ------------

import Bookmarks from "./component/pages/account-pages/Bookmarks";
import Editprofile from "./component/pages/account-pages/Editprofile";
import Notifaction from "./component/pages/account-pages/Notifaction";
import Package from "./component/pages/account-pages/Package";
import Payment from "./component/pages/account-pages/Payment";
import Track from "./component/pages/account-pages/Track";
import Transaction from "./component/pages/account-pages/Transaction";
import TECcompliance from "./component/pagesscrn4/Complianceinformation/TECcompliance";
import BIScompliance from "./component/pagesscrn4/Complianceinformation/BIScompliance";
import WPCcompliance from "./component/pagesscrn4/Complianceinformation/WPCcompliance";
import BISISIcompliance from "./component/pagesscrn4/Complianceinformation/BIS-ISIcompliance";
import EPRcompliance from "./component/pagesscrn4/Complianceinformation/EPRcompliance";
import BEEcompliance from "./component/pagesscrn4/Complianceinformation/BEEcompliance";
import FirstCompliance from "./component/pagesscrn4/Complianceinformation/Firstcompliance";
import Secondcompliance from "./component/pagesscrn4/Complianceinformation/Secondcompliance";
import MainPage from "./component/MainPages";
import Dashboard from "./component/Dashboard/Dashboard";
//import Chatbot from "./component/Chatbot/Chatbot";
//import RestPassword from "./component/ForgetPassword";
//import SupportAdmin from "./component/SupportAdmin";
import TECtableModification from "./component/Complianceforms/TEC/TECtableModificationpage";
import ProfilePage from "./component/Profile Dashboard/ProfilePage";
import LabTestTableData from "./component/pagesscrn4/LabTestDash/LabTestTable/LabTestTableData";
import LabTestTableDataBIS from "./component/pagesscrn4/LabTestDash/LabTestTable/LabTestTableBis/LabTestTableBis";

const App = () => {
  const router = (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/signup">
          <SignUP />
        </Route>

        <Route path="/NewPassword/confirm/">
          <NewPassword />
        </Route>

           {/* // Lab TEsting Redirect code here */}

    <Route path="/navbar/profile">
    <ProfilePage />
  </Route>

        {/* <Route path="/chatbot">
          <Chatbot />
        </Route> */}
     {/*   <Route path="/restpassword">
          <RestPassword />
  </Route> */}

        <Route path="/navbar">
         <Navbar /> 
        <Switch>

        <Route path="/navbar/dashboard">
          <Dashboard />
        </Route> 

          <Route path="/navbar/mainpage">
          <MainPage />
        </Route> 
        
        <Route path="/navbar/clientdashboard">
          <ClientDashboard />
        </Route>

        <Route path="/navbar/secondpage">
          <Secondpage />
        </Route>


        {/* <Route path="/navbar/compliancetrack">
          <ComplianceTrackChoose />
        </Route> */}

        {/* <Route path="/navbar/compliance/TEC">
          <TECForms />
        </Route> 
        <Route path="/navbar/compliance/BIS">
          <BISForms />
        </Route>  */}

        <Route path="/navbar/compliance1/WPS">
          <Fourthpage />
        </Route>  

        {/* <Route path="/navbar/success/:fileName" component={TECForms} />  
        <Route path="/navbar/success/:fileName" component={BISForms} />  */}
 
        <Route path="/navbar/firstpage">
              <Firstpage />
            </Route>

         {/*  <Route path="/navbar/add">
              <Add />
  </Route> 
  
   <Route path="/navbar/myaccount">
              <Myaccount />
            </Route>
            */}

            <Route path="/navbar/review">
              <Review />
            </Route>

            <Route path="/navbar/BISoongoing/:id">
              <BISongoing />
            </Route>

            <Route path="/navbar/BIScompleted/:id">
              <BIScompleted />
            </Route>

            <Route path="/navbar/BISInclusion/:id">
              <BISinclusion/>
            </Route>

            <Route path="/navbar/TECOngoing/:id"> 
              <TECOnGoing /> 
            </Route>

            <Route path="/navbar/TECcompleted/:id">
              <TECcompleted /> 
            </Route>

            <Route path="/navbar/TECmodification/:id">
              <TECmodification /> 
            </Route>


            <Route path="/navbar/TECModification">
              <TECtableModification  /> 
            </Route>

            <Route path="/navbar/WPCOngoing/:id"> 
              <WPCOngoing /> 
            </Route>
            
            <Route path="/navbar/WPCcompleted/:id"> 
              <WPCcompleted /> 
            </Route>

            <Route path="/navbar/BisIsiOngoing/:id"> 
              <BisIsiOnGoing /> 
            </Route>

            <Route path="/navbar/BisIsicompleted/:id"> 
              <BisIsiCompleted /> 
            </Route>

            <Route path="/navbar/BisIsiInclusion/:id"> 
              <BisIsiInclusion /> 
            </Route>

            <Route path="/navbar/BisIsiSimplifyOngoing/:id"> 
              <BisIsiSimplfiyOnGoing /> 
            </Route>

            <Route path="/navbar/BisIsiSimplifyCompleted/:id"> 
              <BisIsiSimplfiyCompleted /> 
            </Route>

            <Route path="/navbar/labtest">
              <LabTestTableData/>
            </Route>

            <Route path="/navbar/labtestbis">
              <LabTestTableDataBIS/>
            </Route>

            <Route path="/navbar/download">
              <Download />
            </Route>

            <Route path="/navbar/view">
              <View />
            </Route>


            <Route path="/navbar/Beeongoing/:id">
              <BEEonGoing />
            </Route>

            <Route path="/navbar/Beecompleted/:id"> 
              <BEECompleted /> 
            </Route>

            <Route path="/navbar/BeeInclusion/:id"> 
              <BEEInclusion /> 
            </Route>
            {/* COMPLIANCE REVIEW PAGE CHANGE INTO SEPRATE PAGES BISTABLE, TECTabel, WPCTable  */}

     {/* <Route path="/navbar/BISTable">
      <BISTableReview />
     </Route>

     <Route path="/navbar/TECTable">
      <TECTableReview />
     </Route>

     <Route path="/navbar/WPCTable">
      <WPCTableReview />
     </Route> */}

{/*-----------------Compliance Information page redirct here----------------*/}

<Route path="/navbar/firstcompliance">
          <FirstCompliance />
        </Route>

        <Route path="/navbar/secondcompliance">
          <Secondcompliance />
        </Route>

        <Route path="/navbar/TECcompliance">
              <TECcompliance />
            </Route>

            <Route path="/navbar/BIScompliance">
              <BIScompliance />
            </Route>

            <Route path="/navbar/WPCcompliance">
              <WPCcompliance />
            </Route>

            <Route path="/navbar/BIS-ISIcompliance">
              <BISISIcompliance />
            </Route>

            <Route path="/navbar/EPRcompliance">
              <EPRcompliance />
            </Route>

            <Route path="/navbar/BEEcompliance">
              <BEEcompliance />
            </Route>
            

      
{/*--------------------------My account pages Path inside of navbar-----------------------------------*/}

            <Route path="/navbar/transaction">
            <Transaction />
          </Route>
          <Route path="/navbar/package">
            <Package />
          </Route>
          <Route path="/navbar/payment">
            <Payment />
          </Route>
          <Route path="/navbar/track">
            <Track />
          </Route>
          <Route path="/navbar/notifaction">
            <Notifaction />
          </Route>
          <Route path="/navbar/bookmarks">
            <Bookmarks />
          </Route>
          <Route path="/navbar/edit-profile">
            <Editprofile />
          </Route>
          
        </Switch>
        </Route>

        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>

    </BrowserRouter>


  );

  return router;
};

export default App;
