import 'react-bootstrap-drawer/lib/style.css';
import React, { useState } from 'react';
import {
	Col,
	Collapse,
	Container,
	Row,
} from 'react-bootstrap';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	useRouteMatch
  } from "react-router-dom";
import ApplicationDrawer from '../ApplicationDrawer/ApplicationDrawer';
import AddProduct from '../AddProduct/AddProduct';
import AddReview from '../AddReview/AddReview';
import DashboardHome from '../DashboardHome/DashboardHome';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import MyOrder from '../MyOrder/MyOrder';
import Pay from '../Pay/Pay';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';
import ManageProduct from '../ManageProduct/ManageProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AdminRoute from '../../AdminRoute/AdminRoute';

const Dashboard = (props) => {
	const { path, url } = useRouteMatch();
    return (
	  <>
	   <DashboardHeader></DashboardHeader>	
        <Container fluid>
			<Row className="flex-xl-nowrap">
				<Col  xs={ 12 } md={ 3 } lg={ 2 }>
                    <ApplicationDrawer url={url}></ApplicationDrawer>
                </Col>
				<Col xs={ 12 } md={ 9 } lg={ 10 }>
					<Switch>
						<Route exact path={path}>
							<DashboardHome></DashboardHome>
						</Route>
						
						<Route path={`${path}/myOrder`}>
						    <MyOrder></MyOrder>
						</Route>

						<Route path={`${path}/addReview`}>
							<AddReview></AddReview>
						</Route>

						<Route path={`${path}/pay`}>
							<Pay></Pay>
						</Route>

						<AdminRoute path={`${path}/manageAllOrder`}>
							<ManageAllOrder></ManageAllOrder>
						</AdminRoute>

						<AdminRoute path={`${path}/manageProduct`}>
							<ManageProduct></ManageProduct>
						</AdminRoute>

						<AdminRoute path={`${path}/makeAdmin`}>
							<MakeAdmin></MakeAdmin>
						</AdminRoute>

						<AdminRoute path={`${path}/addProduct`}>
							<AddProduct></AddProduct>
						</AdminRoute>

					</Switch>
				</Col>
			</Row>
		</Container>
	  </>	
    );
};

export default Dashboard;