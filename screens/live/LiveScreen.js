import React from 'react';
import axios from 'axios';
import { View, ScrollView, RefreshControl } from 'react-native';
import { Card, Text, Icon, Divider } from 'react-native-elements';
import CountDown from 'react-native-countdown-component';
import moment from 'moment';

class LiveScreen extends React.PureComponent {

	state = {

		refreshing: false,
		upcoming: []

	}

	componentWillMount(){

		this.listUpcomingLaunch();

	}

	listUpcomingLaunch = () => {

		axios.get('https://api.spacexdata.com/v2/launches/upcoming?order=asc')
		.then(response => { 

			this.setState({ upcoming: response.data })

		})
		.catch(error => {



		})  	
		.then(() => {

			this.setState({ refreshing: false })

		});

	}

	onRefresh = () => {

		this.setState({ refreshing: true })

		this.listUpcomingLaunch()


	}

	render() {

		return (

			<ScrollView

			refreshControl={

				<RefreshControl
					refreshing={ this.state.refreshing }
					onRefresh={ () => { this.onRefresh() } }
				/>
				
			}

			>

			{

				this.state.upcoming.map((mission, index)=>{

					return (

						

							<Card title={mission.rocket.rocket_name+" | "+mission.mission_name} key={index}
							>

								<View style={{ flexDirection: 'row', marginBottom: 10 }}>
									
									<Icon name='rocket' size={17} type='entypo' />
									<Text style={{ fontWeight: 'bold', fontSize: 23 }}> Rocket</Text>

								</View>

								<Text style={{ fontSize: 15 }}>{mission.rocket.rocket_name}</Text>

								<Divider style={{ marginTop: 15, marginBottom: 15 }} />

								<View style={{ flexDirection: 'row', marginBottom: 10 }}>
									
									<Icon name='location' size={17} type='entypo' />
									<Text style={{ fontWeight: 'bold', fontSize: 23 }}> Location</Text>

								</View>

								<Text style={{ fontSize: 15, marginBottom: 5 }}>{mission.launch_site.site_name}</Text>
								<Text style={{ fontSize: 15 }}>{mission.launch_site.site_name_long}</Text>

								<CountDown

									style={{ marginTop: 20 }}

									until={ moment(mission.launch_date_utc).diff(moment(), 'seconds') }
									size={20}
								/>

							</Card>


					)

				})

			}

			</ScrollView>

		)

	}

}

export default (LiveScreen);
