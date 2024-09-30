

import "./App.css"

import { Footer } from "./components/homepage/Footer"



import { Navbar } from "./components/homepage/Navbar"




import { Redirect, Route, Switch } from "react-router-dom/cjs/react-router-dom"



/* import RequestPasswordChange from "./components/homepage/RequestPasswordChange"
import ResetPassword from "./components/homepage/ResetPassword" */



import { Impressum } from "./components/footerelements/impressum"
import { Datenschutz } from "./components/footerelements/datenschutz"




import { ScheduleDataMonitor } from "./components/monitor/Plots/scheduleverusupdatesplots/scheduledatamonitor"







function App() {



	return (
		<>
		<div className='d-flex flex-column min-vh-100'>
			<Navbar></Navbar>

			<div>

			
			
			

			<Switch>

			<Route path='/' exact>
				<Redirect to='/home'></Redirect>
			
			</Route>

			<Route path='/home'>
			    <ScheduleDataMonitor></ScheduleDataMonitor>
				

			</Route>

			<Route path="/impressum">
				<Impressum></Impressum>
			</Route>

			
			

			

			

			{/* <Route path="/gtfsDashboard">
				<GtfsDashboard></GtfsDashboard>
			</Route> */}

			<Route path="/landingPage">
				<ScheduleDataMonitor></ScheduleDataMonitor>
			</Route>

			

			<Route path="scheduleVersusUpdates">
				<ScheduleDataMonitor></ScheduleDataMonitor>

			</Route>

			

			

			<Route path="/datenschutz">
				<Datenschutz></Datenschutz>
			</Route>

			

			</Switch>
			</div>
			

			
			
		</div>
			
		<Footer/>
			
		</>
	)
}

export default App
