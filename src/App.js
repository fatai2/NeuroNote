import "./App.css";
import React, { createElement, useState, createContext, useContext, lazy, Suspense  } from "react";
import { TabMenu } from "primereact/tabmenu";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { SelectButton } from "primereact/selectbutton";
import { Skeleton } from 'primereact/skeleton';

const UserContext = createContext();

const checkNo = (x) => {
	const cNo = x ? ' ' : ' no/not ';
  	return cNo;
}

function lazyWithPreload(factory) {
  const Component = React.lazy(factory);
  Component.preload = factory;
  return Component;
}



const Headache = lazyWithPreload(() => import('./Headache'));
const Dementia = lazyWithPreload(() => import('./Dementia'));
const NeckArmPain = lazyWithPreload(() => import('./Neck_Arm_Pain'));
const BackLegPain = lazyWithPreload(() => import('./Back_Leg_Pain'));
const Spell = lazyWithPreload(() => import('./Spell'));

const compList = {
	"Headache": Headache,
	"Dementia" : Dementia,
	"NeckArmPain" : NeckArmPain,
	"BackLegPain" : BackLegPain,
	"Spell" : Spell,
};


const items = [
  { label: "Home", icon: "pi pi-fw pi-home" },
  { label: "Calendar", icon: "pi pi-fw pi-calendar" },
  { label: "Edit", icon: "pi pi-fw pi-pencil" },
  { label: "Documentation", icon: "pi pi-fw pi-file" },
  { label: "Settings", icon: "pi pi-fw pi-cog" },
];


function App() {
 	const [value2, setValue2] = useState([]);
 	const [value3, setValue3] = useState([]);
 	const [value4, setValue4] = useState([]);
 	
	const SelectButtonDemo = () => {
	  const issueOptions = [
	    { name: "By Symptom", value: 1 },
	    { name: "By Diagnosis", value: 2 },
	  ];
	  const checkNull = (x) => {
	  	const myAns = value2 ? value2.includes(x) : false;
	  	const invAns = !myAns;
	  	return invAns;
	  }
	  return (
	    <div>
	      <div className="card">
		<h5>Multiple Selection</h5>
		<SelectButton
		  value={value2}
		  options={issueOptions}
		  onChange={(e) => setValue2(e.value)}
		  optionLabel="name"
		  multiple
		/>
	      </div>
	      <Divider />
	      <div hidden={checkNull(1)}>
		<SelectButtonSx classname="grid" />
		<p />
		<Divider />
	      </div>
	      <div  hidden={checkNull(2)}>
		<SelectButtonDx classname="grid" />
		<p />
		<Divider />
	      </div>
	    </div>
	  );
	};

	const SelectButtonSx = () => {
	  const sxOptions = [
	    { name: "Headache", value: "Headache" },
	    { name: "Memory Loss", value: "Dementia" },
	    { name: "Neck / Arm Pain",value: "NeckArmPain" },
	    { name: "Hand Numbness", value: 3 },
	    { name: "Back / Leg Pain", value: "BackLegPain" },
	    { name: "Foot Numbness", value: 5 },
	    { name: "Spell", value: "Spell" },
	    { name: "Dizziness", value: 7 },
	    { name: "Tremor", value: 8 },
	    { name: "Visual Loss", value: 9 },
	    { name: "Limb Weakness", value: 10 },
	    { name: "Dysarthria", value: 11 },
	    { name: "Unsteady Gait", value: 12 },
	  ];
	  return (
	    <div>
	      <div className="card">
		<h5>Symptom List (multiple selection allowed) </h5>
		<SelectButton
		  value={value3}
		  options={sxOptions}
		  onChange={(e) => setValue3(e.value)}
		  optionLabel="name"
		  multiple
		/>
	      </div>
	    </div>
	  );
	};

	const SelectButtonDx = () => {
	  const dxOptions = [
	    { name: "Tension-type headache", value: 1 },
	    { name: "Migraine", value: 2 },
	    { name: "Stroke", value: 3 },
	    { name: "Seizure disorder", value: 4 },
	    { name: "Peripheral vertigo", value: 5 },
	    { name: "Central vertigo", value: 6 },
	    { name: "Dementia", value: 7 },
	    { name: "Parkinson disease", value: 8 },
	    { name: "Cervical radiculopathy", value: 9 },
	    { name: "Lumbosacral radiculopathy", value: 10 },
	    { name: "Mul/tiple Sclerosis", value: 11 },
	    { name: "Encephalopathy", value: 12 },
	    { name: "Optic Neuritis", value: 13 },
	  ];
	  return (
	    <div>
	      <div className="card">
		<h5> Diagnosis List (multiple selection allowed) </h5>
		<SelectButton
		  value={value4}
		  options={dxOptions}
		  onChange={(e) => setValue4(e.value)}
		  optionLabel="name"
		  multiple
		/>
	      </div>
	    </div>
	  );
	};

	const compArray = value3.map((i) => {
		const x = compList[i];
		return x;
		}
	)
	return (
		
		<>
			<TabMenu model={items} />
			<Divider />
			<SelectButtonDemo />
			<React.Suspense fallback={<div className="surface-0 flex-row w-12 h-10rem border-round"> <Skeleton /> </div>}>
				<div className="surface-0 flex-column p-3">
					{
						compArray.map((Comp1) => (
							<>
								<div  key={Comp1.key} className="surface-0 flex-row w-12 border-round">
									<Comp1 />
								</div>	
								<Divider />
							</>
							)
						)
					}
				</div>
			</React.Suspense>
		</>

	);
}

export default App;

