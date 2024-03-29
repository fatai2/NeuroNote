import React, { useState, useEffect, createContext, useContext } from "react";
import { MultiSelect } from 'primereact/multiselect';
import { Divider } from "primereact/divider";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { InputText } from 'primereact/inputtext';
import { Checkbox } from "primereact/checkbox";
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { checkNull, checkNo } from './customFunctions';


const xterHAList = ['aching','boring','burning','crushing','dull','numbing','pulsating','sharp','shooting','stabbing','throbbing','tight band','tingling'];
const otherHACauseList = ['alcohol','illicit drugs','tobacco','caffeine', 'nitrates', 'exogenous estrogen', 'nifedipine', 'vitamins', 'antibiotics', 'weight gain', 'weight loss', 'carbon monoxide exposure'];
const ppxMeds = ['antidepressants ','beta-blockers ','calcium-channel blockers ','cyproheptadine','lithium carbonate','NSAIDs ','phenelzine','prednisone','riboflavin','topiramate','valproic acid'];
const headacheMeds = ['acetaminophen','NSAIDs ','aspirin/acetaminophen/caffeine','ergotamine tartrate PO','ergotamine tartrate PR','dihydroergotamine intranasal','sumatriptan SQ','sumatriptan PO','sumatriptan intranasal','zolmitriptan','naratriptan','isometheptene/dichlorphenazone/acetaminophen','butalbital/caffeine/aspirin','butalbital/caffeine/acetaminophen','inhaled oxygen','beta-blockers','calcium-channel blockers','opiates'];
const severityList = ['mild','moderate','severe'];
const temporalPattern = ['improving','progressively worsening','waxing and waning','unchanged'];
const timeOfDay = ['on waking','morning','mid-day','afternoon','evening','night'];
const timeUnits = ['seconds','minutes','hours','days','weeks','years'];
const sxsHAList = ['nausea','vomiting','sonophobia','photophobia','scotomata','photopsia','diplopia','hemianopsia','paresthesias','aphasia','mental status changes','decreased social functioning','vertigo','tinnitus','ataxia','neck stiffness','conjunctival injection','lacrimation','nasal congestion','rhinorrhea','facial sweating','ptosis','eyelid edema'];
const pptHAList = ['stress','food','MSG','nitrite-containing food','chocolate','coffee','cheese','others','medications','alcohol','tobacco','odors','caffeine withdrawal','change in sleep pattern','change in eating pattern','sexual activity','coughing','sneezing','laughing','straining at stool','bending over','menses','working in front of CRT screen','work','hobby activity'];


function Headache() {
	const [locHA, setLocHA] = useState('');
	const [radHA, setRadHA] = useState('');
	const [sevPain, setSevPain] = useState('');
	const [haFreeValue, setHaFreeValue] = useState(null);
	const [erVisitValue, setErVisitValue] = useState(null);
	const [durHA1, setDurHA1] = useState(null);
	const [durHA2, setDurHA2] = useState(null);
	const [durHA3, setDurHA3] = useState(null);
	const [headTraumaValue, setHeadTraumaValue] = useState('');
	const [headSurgValue, setHeadSurgValue] = useState('');
	const [headFamValue, setHeadFamValue] = useState('');
	const [exacHdcValue, setExacHdcValue] = useState('');
	const [allHdcValue, setAllHdcValue] = useState('');
	const [posHdcValue, setPosHdcValue] = useState('');
	const [dcHdcValue, setDcHdcValue] = useState('');
	const [checkedCurr, setCheckedCurr] = useState(false);
	const [checkedRad, setCheckedRad] = useState(false);
	const [checkedOnset, setCheckedOnset] = useState(false);
	const [checkedThunder, setCheckedThunder] = useState(false);
	const [checkedAbort, setCheckedAbort] = useState(false);
	const [checkedPpt, setCheckedPpt] = useState(false);
	const [checkedPpx1, setCheckedPpx1] = useState(false);
	const [checkedPpx2, setCheckedPpx2] = useState(false);
	const [checkedProd, setCheckedProd] = useState(false);
	const [checkedPosHdc, setCheckedPosHdc] = useState(false);	
	const [checkedAssHA, setCheckedAssHA] = useState(false);
	const [checkedPrev, setCheckedPrev] = useState(false);
	const [checkedWake, setCheckedWake] = useState(false);
	const [checkedSeason, setCheckedSeason] = useState(false);
	const [checkedCluster, setCheckedCluster] = useState(false);
	const [checkedDaily, setCheckedDaily] = useState(false);
	const [checkedHeadTrauma, setCheckedHeadTrauma] = useState(false);
	const [checkedHeadSurg, setCheckedHeadSurg] = useState(false);
	const [checkedHeadFam, setCheckedHeadFam] = useState(false);
	const [checkedOHAC, setCheckedOHAC] = useState(false);
	const [selectedXterHdc, setSelectedXterHdc] = useState([]);
	const [selectedSubs, setSelectedSubs] = useState([]);
	const [selectedPpxMeds1, setSelectedPpxMeds1] = useState([]);
	const [selectedPpxMeds2, setSelectedPpxMeds2] = useState([]);
	const [selectedHdcMeds, setSelectedHdcMeds] = useState([]);
	const [selectedTemp, setSelectedTemp] = useState(null);
	const [selectedTimeDay, setSelectedTimeDay] = useState([]);
	const [selectedTimeUnit1, setSelectedTimeUnit1] = useState(null);
	const [selectedTimeUnit2, setSelectedTimeUnit2] = useState(null);
	const [selectedProdrome, setSelectedProdrome] = useState([]);
	const [selectedSxsHdc, setSelectedSxsHdc] = useState([]);
	const [selectedPptHdc, setSelectedPptHdc] = useState([]);
	const [selectedFxnHdc, setSelectedFxnHdc] = useState(null);
	const [selectedAbortHdc, setSelectedAbortHdc] = useState([]);
	const [selectedOtherHA, setSelectedOtherHACauses] = useState([]);
	const [medList1, setMedList1] = useState(ppxMeds);
	const [medList2, setMedList2] = useState(ppxMeds);
	
	useEffect(() => {
		setMedList1(() => ppxMeds.filter( ( el ) => !selectedPpxMeds2.includes( el ) ));
		setMedList2(() => ppxMeds.filter( ( el ) => !selectedPpxMeds1.includes( el ) ));
	}, [selectedPpxMeds1, selectedPpxMeds2, ]);
	
	return (
		<div className="flex flex-row">
			<div className="formgrid grid surface-0 p-3 shadow-2 border-round w-6">
				<div className="text-3xl font-medium text-900 mb-3">Headache</div>
				<Divider/>
				<div className="field m-3"> 
					<div className="field-checkbox">
						<Checkbox
						inputId="currHeadache" 
						checked={checkedCurr}
						onChange={(e) => setCheckedCurr(e.checked)}
						/>
						<label htmlFor="currHead">Current headache</label>
					</div>
				</div>
				<div className="field m-3">
					<div className="field-checkbox">
						<Checkbox
						inputId="onsetHA" 
						checked={checkedOnset}
						onChange={(e) => setCheckedOnset(e.checked)}
						/>
						<label htmlFor="onsetHA">Sudden Onset</label>
					</div>
				</div>
				<div hidden={!checkedOnset} className="field m-3">
					<div className="field-checkbox">
						<Checkbox
						inputId="thunderHA" 
						checked={checkedThunder}
						onChange={(e) => setCheckedThunder(e.checked)}
						/>
						<label htmlFor="thunderHA">Thunderclap</label>
					</div>
				</div>
				<div className="field m-3">
					<span className="p-float-label">
						<InputText id="locHdc" value={locHA} onChange={(e) => setLocHA(e.target.value)} />
						<label htmlFor="locHdc">Location of Headache</label>
					</span>
				</div>
				<div className="field m-3">
					<div className="field-checkbox">
						<Checkbox
						inputId="radHACheck" 
						checked={checkedRad}
						onChange={(e) => setCheckedRad(e.checked)}
						/>
						<label htmlFor="radHACheck">Radiates?</label>
					</div>
				</div>
				<div hidden={!checkedRad} className="field m-3">
					<span className="p-float-label">
						<InputText id="radHdc" value={radHA} onChange={(e) => setRadHA(e.target.value)} />
						<label htmlFor="radHdc">Radiation of Headache</label>
					</span>
				</div>
				<div className="field m-3">
					<MultiSelect id="Character of pain" value={selectedXterHdc} options={xterHAList} onChange={(e) => setSelectedXterHdc(e.value)} placeholder="Character of pain" display="chip"  />
				</div>
				<div className="field m-3 formgroup-inline">
					<label htmlFor="painSeverity" className="p-2">Severity of Pain</label>
					<InputNumber inputId="painSeverity" value={sevPain} onValueChange={(e) => setSevPain(e.value)} size={1} showButtons step={1} decrementButtonClassName="p-button-danger" incrementButtonClassName="p-button-success" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" min={1} max={10}/>
				</div>
				<Divider/>
				<div className="field m-3">
					<span className="p-float-label">
						<InputText id="inpExaHdc" value={exacHdcValue} onChange={(e) => setExacHdcValue(e.target.value)} />
						<label htmlFor="inpExaHdc">Exacerbating factors</label>
					</span>
				</div>
				<div className="field m-3">
					<span className="p-float-label">
						<InputText id="inpAllHdc" value={allHdcValue} onChange={(e) => setAllHdcValue(e.target.value)} />
						<label htmlFor="inpAllHdc">Alleviating factors</label>
					</span>
				</div>
				<div className="field m-3">
					<div className="field-checkbox">
						<Checkbox
						inputId="cbPosHdc" 
						checked={checkedPosHdc}
						onChange={(e) => setCheckedPosHdc(e.checked)}
						/>
						<label htmlFor="cbPosHdc">Positional</label>
					</div>
				</div>
				<div hidden={!checkedPosHdc} className="field m-3">
					<span className="p-float-label">
						<InputText id="inpPosHdc" value={posHdcValue} onChange={(e) => setPosHdcValue(e.target.value)} />
						<label htmlFor="inpPosHdc">Description of Positional Headache</label>
					</span>
				</div>
				<div className="field m-3">
					<div className="field-checkbox">
						<Checkbox
						inputId="prodHACheck" 
						checked={checkedProd}
						onChange={(e) => setCheckedProd(e.checked)}
						/>
						<label htmlFor="prodHACheck">Prodromal Symptoms</label>
					</div>
				</div>
				<div hidden={!checkedProd} className="field m-3">
					<MultiSelect id="HA Prodrome" value={selectedProdrome} options={sxsHAList} onChange={(e) => setSelectedProdrome(e.value)} placeholder="Prodrome" display="chip"  />
				</div>
				<div className="field m-3">
					<div className="field-checkbox">
						<Checkbox
						inputId="assHACheck" 
						checked={checkedAssHA}
						onChange={(e) => setCheckedAssHA(e.checked)}
						/>
						<label htmlFor="assHACheck">Associated Symptoms</label>
					</div>
				</div>
				<div hidden={!checkedAssHA} className="field m-3">
					<MultiSelect id="Other HA Symptoms" value={selectedSxsHdc} options={sxsHAList} onChange={(e) => setSelectedSxsHdc(e.value)} placeholder="Associated Symptoms" display="chip"  />
				</div>
				<Divider/>
				<div className="field m-3 formgroup-inline">
					<label htmlFor="durHA" className="p-2">Duration of Headache Episodes</label>
					<InputNumber inputId="durHA" value={durHA1} onValueChange={(e) => setDurHA1(e.value)} size={1} showButtons step={1} decrementButtonClassName="p-button-danger" incrementButtonClassName="p-button-success" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" min={1} />
					<Dropdown value={selectedTimeUnit1} options={timeUnits} onChange={(e) => setSelectedTimeUnit1(e.value)} placeholder="Time Unit" />
				</div>
				<Divider/>
				<div className="field m-3 formgroup-inline">
					<label htmlFor="durHA3Id" className="p-2">Started having headaches when?</label>
					<InputNumber inputId="durHA3Id" value={durHA3} onValueChange={(e) => setDurHA3(e.value)} size={1} showButtons step={1} decrementButtonClassName="p-button-danger" incrementButtonClassName="p-button-success" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" min={1} />
					<Dropdown value={selectedTimeUnit2} options={timeUnits} onChange={(e) => setSelectedTimeUnit2(e.value)} placeholder="Time Unit" />
				</div>
				<Divider/>
				<div className="field m-3">
					<div className="field-checkbox">
						<Checkbox
						inputId="prevHeadache" 
						checked={checkedPrev}
						onChange={(e) => setCheckedPrev(e.checked)}
						/>
						<label htmlFor="prevHeadache">Similar to previous headaches</label>
					</div>
				</div>
				<div className="field m-3">
					<div className="field-checkbox">
						<Checkbox
						inputId="pptHACheck" 
						checked={checkedPpt}
						onChange={(e) => setCheckedPpt(e.checked)}
						/>
						<label htmlFor="pptHACheck">Known Precipitant(s)</label>
					</div>
				</div>
				<div className="field m-3" hidden={!checkedPpt}>
					<MultiSelect id="pptHA" value={selectedPptHdc} options={pptHAList} onChange={(e) => setSelectedPptHdc(e.value)} placeholder="Precipitants" display="chip"  />
				</div>
				<div>
					<Dropdown value={selectedTimeDay} options={timeOfDay} onChange={(e) => setSelectedTimeDay(e.value)} placeholder="Worst time of day" />
				</div>
				<div className="field m-3">
					<div className="field-checkbox">
						<Checkbox
						inputId="wakeHACheck" 
						checked={checkedWake}
						onChange={(e) => setCheckedWake(e.checked)}
						/>
						<label htmlFor="wakeHACheck">Headache wakes patient from sleep</label>
					</div>
				</div>
				<div className="field m-3">
					<div className="field-checkbox">
						<Checkbox
						inputId="seasonHACheck" 
						checked={checkedSeason}
						onChange={(e) => setCheckedSeason(e.checked)}
						/>
						<label htmlFor="seasonHACheck">Seasonal pattern</label>
					</div>
				</div>
				<div className="field m-3">
					<div className="field-checkbox">
						<Checkbox
						inputId="clusterHACheck" 
						checked={checkedCluster}
						onChange={(e) => setCheckedCluster(e.checked)}
						/>
						<label htmlFor="clusterHACheck">‘Clustering’ of headaches over time</label>
					</div>
				</div>
				<div className="field m-3 formgroup-inline">
					<label htmlFor="haFree" className="p-2">Number of headache-free days in past month </label>
					<InputNumber inputId="haFree" value={haFreeValue} onValueChange={(e) => setHaFreeValue(e.value)} size={1} showButtons step={1} decrementButtonClassName="p-button-danger" incrementButtonClassName="p-button-success" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" min={0} max={31}/>
				</div>
				<div className="field m-3 formgroup-inline">
					<label htmlFor="erVisit" className="p-2">Number of ER visits in the past year</label>
					<InputNumber inputId="erVisit" value={erVisitValue} onValueChange={(e) => setErVisitValue(e.value)} size={1} showButtons step={1} decrementButtonClassName="p-button-danger" incrementButtonClassName="p-button-success" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" min={0} max={366}/>
				</div>
				<div className="field m-3">
					<Dropdown value={selectedTemp} options={temporalPattern} onChange={(e) => setSelectedTemp(e.value)} placeholder="Overall pattern since headaches began" />
				</div>
				<div className="field m-3">
					<Dropdown value={selectedFxnHdc} options={severityList} onChange={(e) => setSelectedFxnHdc(e.value)} placeholder="Degree of Functional Impairment" />
				</div>
				<Divider />
				<div className="field m-3">
					<div className="field-checkbox">
						<Checkbox
						inputId="abortHACheck" 
						checked={checkedAbort}
						onChange={(e) => setCheckedAbort(e.checked)}
						/>
						<label htmlFor="abortHACheck">Current abortive meds used</label>
					</div>
				</div>
				<div className="field m-3" hidden={!checkedAbort}>
					<MultiSelect id="abortHA" value={selectedAbortHdc} options={headacheMeds} onChange={(e) => setSelectedAbortHdc(e.value)} placeholder="Abortive meds"  />
				</div>
				<div className="field m-3" hidden={!checkedAbort}>
					<div className="field-checkbox">
						<Checkbox
						inputId="dailyHACheck" 
						checked={checkedDaily}
						onChange={(e) => setCheckedDaily(e.checked)}
						/>
						<label htmlFor="dailyHACheck"> Daily use of abortive meds </label>
					</div>
				</div>
				<div className="field m-3">
					<div className="field-checkbox">
						<Checkbox
						inputId="ppxHACheck1" 
						checked={checkedPpx1}
						onChange={(e) => setCheckedPpx1(e.checked)}
						/>
						<label htmlFor="ppxtHACheck1">Current Prophylactic medications</label>
					</div>
				</div>
				<div hidden={!checkedPpx1}>
					<MultiSelect id="ppxHA1" value={selectedPpxMeds1} options={medList1} onChange={(e) => setSelectedPpxMeds1(e.value)} placeholder="Prophylactic Meds" display="chip"/>
				</div>
				<div className="field m-3">
					<div className="field-checkbox">
						<Checkbox
						inputId="ppxHACheck2" 
						checked={checkedPpx2}
						onChange={(e) => setCheckedPpx2(e.checked)}
						/>
						<label htmlFor="ppxtHACheck2">Previous prophylactic medications</label>
					</div>
				</div>
				<div hidden={!checkedPpx2}>
					<div className="field m-3 formgroup-inline" >
						<MultiSelect id="ppxHA2" value={selectedPpxMeds2} options={medList2} onChange={(e) => setSelectedPpxMeds2(e.value)} placeholder="Previous Meds" display="chip"/>
						<div>
							<span className="p-float-label">
								<InputText id="inpDcHdcValue" value={dcHdcValue} onChange={(e) => setDcHdcValue(e.target.value)} />
								<label htmlFor="inpDcHdcValue"> Why discontinued?</label>
							</span>
						</div>
					</div>
				</div>
				<Divider />
				<div className="field m-3">
					<div className="field-checkbox">
						<Checkbox
						inputId="headTraumaCheck" 
						checked={checkedHeadTrauma}
						onChange={(e) => setCheckedHeadTrauma(e.checked)}
						/>
						<label htmlFor="headTraumaCheck">History of Head/Neck Trauma</label>
					</div>
				</div>
				<div className="field m-3" hidden={!checkedHeadTrauma}>
					<span className="p-float-label">
						<InputText id="hxHeadTrauma" value={headTraumaValue} onChange={(e) => setHeadTraumaValue(e.target.value)} />
						<label htmlFor="hxHeadTrauma"> Trauma Details</label>
					</span>
				</div>
				<div className="field m-3">
					<div className="field-checkbox">
						<Checkbox
						inputId="headSurgCheck" 
						checked={checkedHeadSurg}
						onChange={(e) => setCheckedHeadSurg(e.checked)}
						/>
						<label htmlFor="headSurgCheck">History of Head/Neck Surgery</label>
					</div>
				</div>
				<div className="field m-3" hidden={!checkedHeadSurg}>
					<span className="p-float-label">
						<InputText id="hxHeadSurg" value={headSurgValue} onChange={(e) => setHeadSurgValue(e.target.value)} />
						<label htmlFor="hxHeadSurg"> Surgery Details</label>
					</span>
				</div>
				<div className="field m-3">
					<div className="field-checkbox">
						<Checkbox
						inputId="headFamCheck" 
						checked={checkedHeadFam}
						onChange={(e) => setCheckedHeadFam(e.checked)}
						/>
						<label htmlFor="headFamCheck">Family history of headache</label>
					</div>
				</div>
				<div className="field m-3" hidden={!checkedHeadFam}>
					<span className="p-float-label">
						<InputText id="hxHeadFam" value={headFamValue} onChange={(e) => setHeadFamValue(e.target.value)} />
						<label htmlFor="hxHeadFam"> Family Hx Details</label>
					</span>
				</div>
				<div className="field m-3">
					<div className="field-checkbox">
						<Checkbox
						inputId="otherHACheck" 
						checked={checkedOHAC}
						onChange={(e) => setCheckedOHAC(e.checked)}
						/>
						<label htmlFor="OtherHACheck">Other Headache Causes</label>
					</div>
				</div>
				<div className="field m-3" hidden={!checkedOHAC}>
					<label htmlFor="otherHACauses" className="p-2"> Other Headache Causes</label>
					<MultiSelect id="otherHACauses" value={selectedOtherHA} options={otherHACauseList} onChange={(e) => setSelectedOtherHACauses(e.value)} placeholder="Other Causes" />
				</div>
			</div>
			<div className="surface-0 w-6 card m-3">
				<div  className="surface-0 p-4 shadow-2 border-round ">
					<div className="text-3xl font-medium text-900 mb-3">Headache</div>
					<div id="headacheText" className="border-1 border-dashed border-300" >
						<>
							<p>Patient complains of headache. Patient does {checkNo(checkedCurr)} have a headache at this time.</p>

							<h3>Description of Headaches:</h3>
							<p> Headache is {checkNo(checkedOnset)} sudden in onset<span hidden={!checkedOnset}> and is {checkNo(checkedThunder)} thunderclap in nature</span>. Pain is located at the {checkNull(locHA)}. Pain does {checkNo(checkedRad)} radiate<span hidden={!checkedRad}> to the {checkNull(radHA)}</span>. The pain is described as {checkNull(selectedXterHdc.join(', '))}. The severity of the pain is {checkNull(sevPain)} on a 10-point scale. Alleviating factors: {checkNull(allHdcValue)}. Aggravating factors: {checkNull(exacHdcValue)}. Patient does {checkNo(checkedAssHA)} have accompanying symptoms<span hidden={!checkedAssHA}> including {checkNull(selectedSxsHdc.join(', '))}</span>. Patient does {checkNo(checkedProd)} have prodromal symptoms<span hidden={!checkedProd}> including {checkNull(selectedProdrome.join(', '))}</span>. Individual headaches typically last for {checkNull(durHA1)} {checkNull(selectedTimeUnit1)}. Most headaches are {checkNo(checkedPrev)} similar in presentation. Headaches do {checkNo(checkedPpt)} have precipitating factors<span hidden={!checkedPpt}> including {checkNull(selectedPptHdc.join(', '))}</span>. </p>
							<h3>Temporal Pattern of Headaches</h3>
							<p>Patient started having headaches {checkNull(durHA3)} {checkNull(selectedTimeUnit2)} ago. The worst time of day for headache is {checkNull(selectedTimeDay)}. Headache does {checkNo(checkedWake)} awaken patient from sleep. Patient had {checkNull(haFreeValue)} headache-free days in the past month. Patient had {checkNull(erVisitValue)} emergency room visits due to headache in the past year. Headaches do {checkNo(checkedSeason)} have a seasonal pattern. Headaches do {checkNo(checkedCluster)} 'cluster’ over time. The overall pattern of headaches since problem began is {checkNull(selectedTemp)}</p>
							<p>Degree of Functional Impairment: {checkNull(selectedFxnHdc)} </p>

							<h3> Use of medications to treat headache:</h3>
							<p>Patient does {checkNo(checkedAbort)} currently use abortive medications<span hidden={!checkedAbort}> which include {checkNull(selectedAbortHdc.join(', '))}. Patient does {checkNo(checkedDaily)} use abortive medications daily</span>. Patient does {checkNo(checkedPpx1)} currently use prophylactic medications<span hidden={!checkedPpx1}> including {checkNull(selectedPpxMeds1.join(', '))}</span>. Patient does {checkNo(checkedPpx2)} have a previous history of use of preventative medications<span hidden={!checkedPpx2}> including {checkNull(selectedPpxMeds2.join(', '))}. Reasons for discontinuation: {checkNull(dcHdcValue)}</span>. </p>

							<h3>Additional Relevant History:</h3>
							<p>Patient does {checkNo(checkedHeadTrauma)} report a history of head/neck trauma<span hidden={!checkedHeadTrauma}>, namely {checkNull(headTraumaValue)} </span>. Patient does {checkNo(checkedHeadSurg)} report a history of head/neck surgery<span hidden={!checkedHeadSurg}>, namely {checkNull(headSurgValue)}</span>. Patient is {checkNo(checkedHeadFam)} aware of a family history of headache problems<span hidden={!checkedHeadTrauma}>, namely {checkNull(headFamValue)}</span>. Patient does {checkNo(checkedOHAC)} endorse other factors that might worsen headaches<span hidden={!checkedOHAC}>, including {checkNull(selectedOtherHA.join(', '))}</span>. </p>
						</>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Headache;
