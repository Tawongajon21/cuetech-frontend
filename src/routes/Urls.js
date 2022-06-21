import React from 'react';
import { Routes, Route } from 'react-router-dom';



// Login Page
import Loginpage from '../pages/Login/LoginPage';

// Admin Dashboard
import Admindashboard from '../pages/adminuser/dashboard/AdminDashboard';
// farmers
import Adminfamerspage from '../pages/adminuser/farmers/AdminFamersPage';
import Adminaddfarmer from '../pages/adminuser/farmers/AdminAddFarmer';
import Adminfarmersdetails from '../pages/adminuser/farmers/AdminFarmersDetails';
/*Finance Pages */

// Owner Capital
import Adminownercapital from '../pages/adminuser/Finance/capital/AdminOwnerCapital';
import Adminaddowncapital from '../pages/adminuser/Finance/capital/AdminAddOwnCapital';
import Adminupdateowncapital from '../pages/adminuser/Finance/capital/AdminUpdateOwnCapital';

// Loan 
import Adminloan from '../pages/adminuser/Finance/loan/AdminLoan';
import Adminaddloan from '../pages/adminuser/Finance/loan/AdminAddLoan';
import Adminupdateloan from '../pages/adminuser/Finance/loan/AdminUpdateLoan';

// Inheritence
import Admininheritence from '../pages/adminuser/Finance/inheritence/AdminInheritence';
import Adminaddinheritence from '../pages/adminuser/Finance/inheritence/AdminAddInheritence';
import Adminupdateinheritence from '../pages/adminuser/Finance/inheritence/AdminUpdateInheritence';

/*Investment Pages */

// Tangible
import Admintangible from '../pages/adminuser/Investment/tangible/AdminTangible';
import Adminaddtangible from '../pages/adminuser/Investment/tangible/AdminAddTangible';
import Adminupdatetangible from '../pages/adminuser/Investment/tangible/AdminUpdateTangible';

// Savings
import Adminaddsavings from '../pages/adminuser/Investment/savings/AdminAddSavings';
import Adminsavings from '../pages/adminuser/Investment/savings/AdminSavings';
import Adminupdatesavings from '../pages/adminuser/Investment/savings/AdminUpdateSavings';

// Intangible
import Adminintangible from '../pages/adminuser/Investment/intangible/AdminIntangible';
import Adminaddintangible from '../pages/adminuser/Investment/intangible/AdminAddIntangible';
import Adminupdateintangible from '../pages/adminuser/Investment/intangible/AdminUpdateIntangible';


/*Operations Pages */

// Livestock
import Adminlivestock from '../pages/adminuser/operations/livestock/AdminLivestock';
import Adminaddlivestock from '../pages/adminuser/operations/livestock/AdminAddLivestock';
import Adminlivestockdata from '../pages/adminuser/operations/livestock/AdminLivestockData';
import Addlivestockdata from '../pages/adminuser/operations/livestock/components/AddLivestockData';
import Updatelivestockdata from '../pages/adminuser/operations/livestock/components/UpdateLivestockData';
import Addlivestockexpenses from '../pages/adminuser/operations/livestock/components/AddLivestockExpenses';
import Updatelivestockexpenses from '../pages/adminuser/operations/livestock/components/UpdateLivestockExpenses';
import Addlivestockotherexpenses from '../pages/adminuser/operations/livestock/components/AddLivestockOtherExpenses';
import Updatelivestockotherexpenses from '../pages/adminuser/operations/livestock/components/UpdateLivestockOtherExpenses';

// Plants
import Adminplants from '../pages/adminuser/operations/plants/AdminPlant';
import Adminaddplants from '../pages/adminuser/operations/plants/AdminAddPlant';
import Adminplantsdata from '../pages/adminuser/operations/plants/AdminPlantData';
import Addplantsdata from '../pages/adminuser/operations/plants/components/AddPantData';
import Updateplantsdata from '../pages/adminuser/operations/plants/components/UpdatePlantData';
import Addplantsexpenses from '../pages/adminuser/operations/plants/components/AddPlantExpenses';
import Updateplantsexpenses from '../pages/adminuser/operations/plants/components/UpdatePlantExpenses';
import Addplantsotherexpenses from '../pages/adminuser/operations/plants/components/AddPlantOtherExpenses';
import Updateplantsotherexpenses from '../pages/adminuser/operations/plants/components/UpdatePlantOtherExpenses';

// Orchard
import Adminochard from '../pages/adminuser/operations/orchard/AdminOrchard';
import Adminaddorchards from '../pages/adminuser/operations/orchard/AdminAddOrchard';
import Adminorchardsdata from '../pages/adminuser/operations/orchard/AdminOrchardData';
import Addorchardsdata from '../pages/adminuser/operations/orchard/components/AddOrchardData';
import Updateorchardsdata from '../pages/adminuser/operations/orchard/components/UpdateOrchardData';
import Addorchardsexpenses from '../pages/adminuser/operations/orchard/components/AddOrchardExpenses';
import Updateorchardsexpenses from '../pages/adminuser/operations/orchard/components/UpdateOrchardExpenses';
import Addorchardsotherexpenses from '../pages/adminuser/operations/orchard/components/AddOrchardOtherExpenses';
import Updateorchardsotherexpenses from '../pages/adminuser/operations/orchard/components/UpdateOrchardOtherExpenses';


// general Expenses
import Admingeneralexpenses from '../pages/adminuser/operations/general/AdminGeneralExpenses';
import Adminaddgeneralexpenses from '../pages/adminuser/operations/general/AdminAddGeneralExpenses';
import Adminupdategeneralexpense from '../pages/adminuser/operations/general/AdminUpdateGeneralExpense';

// Users
import Adminusers from '../pages/adminuser/users/AdminUsers';
import Adminadduser from '../pages/adminuser/users/AdminAddUser';
import Adminuserdetails from '../pages/adminuser/users/AdminUserDetails';
import Adminchangepassword from '../pages/adminuser/users/AdminChangePassword';




//Farmers Part Starts Here 
import Farmerdashboard from '../pages/farmeruser/dashboard/Farmerdashboard';
import Inheritance from '../pages/farmeruser/Components/Finance/inheritance/Inheritance';
import InheritanceUpdate from '../pages/farmeruser/Components/Finance/inheritance/InheritanceUpdate';
import Loan from '../pages/farmeruser/Components/Finance/loan/Loan';
import LoanUpdate from '../pages/farmeruser/Components/Finance/loan/LoanUpdate';
import OwnerCapital from '../pages/farmeruser/Components/Finance/owner capital/OwnerCapital';
import OwnerCapitalUpdate from '../pages/farmeruser/Components/Finance/owner capital/OwnerCapitalUpdate';
import BalanceSheet from '../pages/farmeruser/Components/FinancialStatements/BalanceSheet';
import Cashflow from '../pages/farmeruser/Components/FinancialStatements/Cashflow';
import ProfitAndLoss from '../pages/farmeruser/Components/FinancialStatements/ProfitAndLoss';
import GeneralExpenses from '../pages/farmeruser/Components/Operations/General/GeneralExpenses';
import Plants from '../pages/farmeruser/Components/Operations/Plants/Plants';
import Orchard from '../pages/farmeruser/Components/Operations/orchard/Orchard';
import Livestock from '../pages/farmeruser/Components/Operations/Livestock/FarmerLivestock';
import UpdateLivestockData from  '../pages/farmeruser/Components/Operations/Livestock/UpdateLivestockData';
import UpdateLivestockExpense from '../pages/farmeruser/Components/Operations/Livestock/UpdateLivestockExpense';
import LivestockData from '../pages/farmeruser/Components/Operations/Livestock/LivestockData'
import Savings from '../pages/farmeruser/Components/Investments/savings/savings';
import Tangible from '../pages/farmeruser/Components/Investments/tangible/tangible';
import Intangible from '../pages/farmeruser/Components/Investments/intangible/intangible';
import UpdateGeneralExpenses from '../pages/farmeruser/Components/Operations/General/UpdateGeneralExpenses';
import UpdatePlantData from '../pages/farmeruser/Components/Operations/Plants/UpdatePlantData';
import LivestockUpdate from '../pages/farmeruser/Components/Operations/Livestock/LivestockUpdate';
import UpdateOtherLivestockExpenses from '../pages/farmeruser/Components/Operations/Livestock/UpdateLivestockExpense';
import FarmerLivestock from '../pages/farmeruser/Components/Operations/Livestock/FarmerLivestock'
import OrchardUpdate from '../pages/farmeruser/Components/Operations/orchard/OrchardUpdate';
import IntangibleUpdate from '../pages/farmeruser/Components/Investments/intangible/intangibleupdate';
import SavingsUpdate from '../pages/farmeruser/Components/Investments/savings/savingsupdate';
import TangibleUpdate from '../pages/farmeruser/Components/Investments/tangible/tangibleupdate';
import OrchardData from '../pages/farmeruser/Components/Operations/orchard/OrchardData'
import UpdatePlantExpenses from '../pages/farmeruser/Components/Operations/Plants/UpdatePlantExpenses';
import UpdateOrchardData from '../pages/farmeruser/Components/Operations/orchard/UpdateOrchardData';
import UpdateOrchardExpense from '../pages/farmeruser/Components/Operations/orchard/UpdateOrchardExpense';
import UpdateOrchardOtherExpenses from '../pages/farmeruser/Components/Operations/orchard/UpdateOrchardOtherExpenses';
import PlantsData from '../pages/farmeruser/Components/Operations/Plants/AdminPlantsData';
import PlantOtherExpenses from '../pages/farmeruser/Components/Operations/Plants/PlantOtherExpenses';
import UpdatePlantOtherExpenses from '../pages/farmeruser/Components/Operations/Plants/UpdatePlantOtherExpenses';

const Urls = () => {
    return (
        <Routes>
            {/* Login */}
            <Route path='/' element={<Loginpage />} />

            {/* Start of Admin Endpoints */}
            <Route path='/adminuser/dashboard' element={<Admindashboard />} />
            <Route path='/adminuser/farmers' element={<Adminfamerspage />} />
            <Route path='/adminuser/farmers/add' element={<Adminaddfarmer />} />
            <Route path='/adminuser/farmers/details/:id' element={<Adminfarmersdetails />} />
            {/* Finance Endpoinds */}
            <Route path='/adminuser/farmers/capital/:id' element={<Adminownercapital />} />
            <Route path='/adminuser/farmers/capital/add/:id' element={<Adminaddowncapital />} />
            <Route path='/adminuser/farmers/capital/update/:id/:uid' element={<Adminupdateowncapital />} />

            <Route path='/adminuser/farmers/loan/:id' element={<Adminloan />} />
            <Route path='/adminuser/farmers/loan/add/:id' element={<Adminaddloan />} />
            <Route path='/adminuser/farmers/loan/update/:id/:uid' element={<Adminupdateloan />} />

            {/* Inheritence Endpoints */}
            <Route path='/adminuser/farmers/inheritence/:id' element={<Admininheritence />} />
            <Route path='/adminuser/farmers/inheritence/add/:id' element={<Adminaddinheritence />} />
            <Route path='/adminuser/farmers/inheritence/update/:id/:uid' element={<Adminupdateinheritence />} />

            {/* Investment Endpoinds */}
            <Route path='/adminuser/farmers/tangible/:id' element={<Admintangible />} />
            <Route path='/adminuser/farmers/tangible/add/:id' element={<Adminaddtangible />} />
            <Route path='/adminuser/farmers/tangible/update/:id/:uid' element={<Adminupdatetangible />} />

            <Route path='/adminuser/farmers/intangible/:id' element={<Adminintangible />} />
            <Route path='/adminuser/farmers/intangible/add/:id' element={<Adminaddintangible />} />
            <Route path='/adminuser/farmers/intangible/update/:id/:uid' element={<Adminupdateintangible />} />


            <Route path='/adminuser/farmers/savings/:id' element={<Adminsavings />} />
            <Route path='/adminuser/farmers/savings/add/:id' element={<Adminaddsavings />} />
            <Route path='/adminuser/farmers/savings/update/:id/:uid' element={<Adminupdatesavings />} />

            {/* Operations Endpoints */}
            {/* Livestock Data */}
            <Route path='/adminuser/farmers/livestock/:id' element={<Adminlivestock />} />
            <Route path='/adminuser/farmers/livestock/add/:id' element={<Adminaddlivestock />} />

            {/* livestock Info Endpoints */}
            <Route path='/adminuser/farmers/livestock/data/:id/:uid' element={<Adminlivestockdata />} />

            <Route path='/adminuser/farmers/livestock/info/add/:id/:uid' element={<Addlivestockdata />} />
            <Route path='/adminuser/farmers/livestock/info/update/:id/:uid' element={<Updatelivestockdata />} />

            <Route path='/adminuser/farmers/livestock/expenses/add/:id/:uid' element={<Addlivestockexpenses />} />
            <Route path='/adminuser/farmers/livestock/expenses/update/:id/:uid' element={<Updatelivestockexpenses />} />

            <Route path='/adminuser/farmers/livestock/otherexpenses/add/:id/:uid' element={<Addlivestockotherexpenses />} />
            <Route path='/adminuser/farmers/livestock/otherexpenses/update/:id/:uid' element={<Updatelivestockotherexpenses />} />

            {/* Plants Endpoints */}
            <Route path='/adminuser/farmers/plants/:id' element={<Adminplants />} />
            <Route path='/adminuser/farmers/plants/add/:id' element={<Adminaddplants />} />

            <Route path='/adminuser/farmers/plants/data/:id/:uid' element={<Adminplantsdata />} />
            <Route path='/adminuser/farmers/plants/info/add/:id/:uid' element={<Addplantsdata />} />
            <Route path='/adminuser/farmers/plants/info/update/:id/:uid' element={<Updateplantsdata />} />

            <Route path='/adminuser/farmers/plants/expenses/add/:id/:uid' element={<Addplantsexpenses />} />
            <Route path='/adminuser/farmers/plants/expenses/update/:id/:uid' element={<Updateplantsexpenses />} />

            <Route path='/adminuser/farmers/plants/otherexpenses/add/:id/:uid' element={<Addplantsotherexpenses />} />
            <Route path='/adminuser/farmers/plants/otherexpenses/update/:id/:uid' element={<Updateplantsotherexpenses />} />
           
            {/* Orchard Endpoints */}
            <Route path='/adminuser/farmers/orchard/:id' element={<Adminochard />} />
            <Route path='/adminuser/farmers/orchard/add/:id' element={<Adminaddorchards />} />

            <Route path='/adminuser/farmers/orchard/data/:id/:uid' element={<Adminorchardsdata />} />
            <Route path='/adminuser/farmers/orchard/info/add/:id/:uid' element={<Addorchardsdata />} />
            <Route path='/adminuser/farmers/orchard/info/update/:id/:uid' element={<Updateorchardsdata />} />

            <Route path='/adminuser/farmers/orchard/expenses/add/:id/:uid' element={<Addorchardsexpenses />} />
            <Route path='/adminuser/farmers/orchard/expenses/update/:id/:uid' element={<Updateorchardsexpenses />} />

            <Route path='/adminuser/farmers/orchard/otherexpenses/add/:id/:uid' element={<Addorchardsotherexpenses />} />
            <Route path='/adminuser/farmers/orchard/otherexpenses/update/:id/:uid' element={<Updateorchardsotherexpenses />} />

            {/* General Expenses */}
            <Route path='/adminuser/farmers/generalexpenses/:id' element={<Admingeneralexpenses />} />
            <Route path='/adminuser/farmers/generalexpenses/add/:id' element={<Adminaddgeneralexpenses />} />
            <Route path='/adminuser/farmers/generalexpenses/update/:id/:uid' element={<Adminupdategeneralexpense />} />

            {/* Users Endpoint */}
            <Route path='/adminuser/users' element={<Adminusers />} />
            <Route path='/adminuser/users/add' element={<Adminadduser />} />
            <Route path='/adminuser/users/details/:id' element={<Adminuserdetails />} />
            <Route path='/adminuser/users/changepassword' element={<Adminchangepassword />} />
       
       
       {/**Farmers Endpoint */}
{/**Farmers Dashboard */}
<Route path='/farmers/dashboard' element={<Farmerdashboard/>}/>


{/**Farmers Finance */}
<Route path='/farmers/finance/inheritance/:id' element={<Inheritance/>}/>
<Route path='/farmers/finance/inheritance-update/:id/:uid' element={<InheritanceUpdate/>}/>

<Route path='/farmers/finance/loan' element={<Loan/>}/>
<Route path='/farmers/finance/loan-update/:id/:uid' element={<LoanUpdate/>}/>
<Route path='/farmers/finance/ownercapital' element={<OwnerCapital/>}/>
<Route path='/farmers/finance/ownercapital-update/:id/:uid' element={<OwnerCapitalUpdate/>}/>
<Route path='/farmers/financialstatements/balancesheet' element={<BalanceSheet/>}/>
<Route path='/farmers/financialstatements/cashflow' element={<Cashflow/>}/>
<Route path='/farmers/financialstatements/profitandloss' element={<ProfitAndLoss/>}/>


{/**Farmers Operations */}
<Route path='/farmeruser/farmers/operations/generalexpenses/:id' element={<GeneralExpenses/>}/>

<Route path='/farmeruser/farmers/operations/generalexpenses/update/:id/:uid' element={<UpdateGeneralExpenses/>}/>




<Route path='/farmeruser/farmers/operations/plants/:id' element={<Plants/>}/>
<Route path='/farmeruser/farmers/operations/info/update/:id/:uid' element={<UpdatePlantData/>}/>
<Route path='/farmeruser/farmers/operations/plants/data/:id/:uid' element={<PlantsData/>}/>

<Route path='/farmeruser/farmers/operations/plants/info/update/:id/:uid' element={<UpdatePlantData/>}/>
<Route path='/farmeruser/farmers/operations/plants/expenses/update/:id/:uid' element={<UpdatePlantExpenses/>}/>
<Route path='/farmeruser/farmers/operations/plants/otherexpenses/update/:id/:uid' element={<PlantOtherExpenses/>}/>
<Route path='/farmeruser/farmers/operations/plants/otherexpenses/update/:id/:uid' element={<UpdatePlantOtherExpenses />} />
















<Route path='/farmeruser/farmers/operations/plants/expenses/update/:id/:uid' element={<UpdatePlantExpenses/>}/>


<Route path='/farmeruser/farmers/livestock/:id' element={<FarmerLivestock/>} />

<Route path='/farmeruser/farmers/livestock/data/:id/:uid' element={<LivestockData/>}/>


<Route path='/farmeruser/farmers/livestock/info/update/:id/:uid' element={<UpdateLivestockData/>}/>
<Route path='/farmeruser/farmers/livestock/expenses/update/:id/:uid' element={<UpdateLivestockExpense/>}/>
<Route path='/farmeruser/farmers/livestock/otherexpenses/update/:id/:uid' element={<UpdateOtherLivestockExpenses/>}/>





<Route path='/farmeruser/farmers/operations/orchard/:id' element={<Orchard/>}/> 

<Route path='/farmeruser/farmers/operations/orchard-update' element={<OrchardUpdate/>}/> 



<Route path='/farmeruser/farmers/operations/orchard/data/:id/:uid' element={<OrchardData />} />

<Route path='farmeruser/farmers/operations/orchard/info/update/:id/:uid' element={<UpdateOrchardData/>}/>

<Route path='farmeruser/farmers/operations/expenses/update/:id/:uid' element={<UpdateOrchardExpense/>}/>

<Route path='/farmeruser/farmers/orchard/otherexpenses/update/:id/:uid' element={<UpdateOrchardOtherExpenses />} />



  
{/**Farmers Investments */}
<Route path='/farmers/investments/savings/:id' element={<Savings/>}/>
<Route path='/farmeruser/farmers/investments/savings/update/:id/:uid' element={<SavingsUpdate/>}/>




<Route path='/farmeruser/farmers/investments/tangible/:id' element={<Tangible/>}/>
<Route path='/farmeruser/farmers/investments/tangible/update/:id/:uid' element={<TangibleUpdate />} />

<Route path='/farmeruser/farmers/investments/intangible/:id' element={<Intangible/>}/>
<Route path='/farmeruser/farmers/investments/intangible/update/:id/:uid' element={<IntangibleUpdate/>}/>


        </Routes>
    );
}

export default Urls;
