import { useContext } from "react";
import { TABLE, stateType } from "../../store/store-types";
import HealthDataContext from "../../context/health-data-context";

const EditHealthData = () => {
    const {userData, changeUserData, changeView} = useContext(HealthDataContext);
    
    // const currentChange
    const submit = () => {

    }
    // console.log('userData',userData)

    const onNameChange = (e:any)=> {
            // console.log('e.name', e.target.value)
            const newUserData= {...userData,name: e.target.value};
            changeUserData(newUserData,true)
    }
    const onChangeBP = (e:any)=> {
        // console.log('e.name', e.target.value)
        const newBP = {...userData.BP,value: e.target.value}
        const newUserData= {...userData, BP:newBP};
        changeUserData(newUserData,true)
}

    const onChangeHR = (e:any)=> {
         // console.log('e.name', e.target.value)
         const newHR = {...userData.HR,value: e.target.value}
         const newUserData= {...userData, HR:newHR};
            changeUserData(newUserData,true)
}

const onChangeSBP = (e:any)=> {
    // console.log('e.name', e.target.value)
    const newSBP = {...userData.SBP,value: e.target.value}
    const newUserData= {...userData, SBP:newSBP};
       changeUserData(newUserData,true)
}

const onChangeDBP = (e:any)=> {
    // console.log('e.name', e.target.value)
    const newDBP = {...userData.DBP,value: e.target.value}
    const newUserData= {...userData, DBP:newDBP};
       changeUserData(newUserData,true)
}

const onChangePR = (e:any)=> {
    // console.log('e.name', e.target.value)
    const newPR = {...userData.PR,value: e.target.value}
    const newUserData= {...userData, PR:newPR};
       changeUserData(newUserData,true)
}

const onChangeSR = (e:any)=> {
    // console.log('e.name', e.target.value)
    const newSR = {...userData.SR,value: e.target.value}
    const newUserData= {...userData, SR:newSR};
       changeUserData(newUserData,true)
}




    return(
        <div>
                <button onClick={ () => changeView(TABLE)}> TableView</button>

        <form>
            <p> ID:- {userData.id} </p>
    <input type = "text" value= {userData.name} onChange={onNameChange} placeholder="name" />     

  <span> -------------------------</span>   

  <input 
    type = "number"
     value = {userData.BP.value} 
     onChange={onChangeBP}
    placeholder = {userData.BP.name} /> 


<input 
    type = "number"
     value = {userData.HR.value} 
     onChange={onChangeHR}
    placeholder = {userData.HR.name} /> 


<input 
    type = "number"
     value = {userData.SBP.value} 
     onChange={onChangeSBP}
    placeholder = {userData.SBP.name} /> 

<input 
    type = "number"
     value = {userData.DBP.value} 
     onChange={onChangeDBP}
    placeholder = {userData.DBP.name} />

    <input 
    type = "number"
     value = {userData.PR.value} 
     onChange={onChangePR}
    placeholder = {userData.PR.name} /> 

<input 
    type = "number"
     value = {userData.SR.value} 
     onChange={onChangeSR}
    placeholder = {userData.SR.name} />
    
   




   </form>
        </div>
    )
};
export default EditHealthData;