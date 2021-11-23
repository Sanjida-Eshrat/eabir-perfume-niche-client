import 'react-bootstrap-drawer/lib/style.css';
import React, { useState } from 'react';
import {
	Col,
	Collapse,
	Container,
	Row,
} from 'react-bootstrap';
import { Drawer, } from 'react-bootstrap-drawer'
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';
import Button from '@restart/ui/esm/Button';

const ApplicationDrawer = ({url}) => {
	const {user, admin, logout} = useAuth();
    const [open, setOpen] = useState(false);

	const handleToggle = () => setOpen(!open);
    return (
        <Drawer>
			<Drawer.Toggle onClick={ handleToggle } />

			<Collapse in={ open }>
				<Drawer.Overflow>
					<Drawer.ToC>
						<ul className="text-start">
							<li className="items">
								<Link className="text-decoration-none fw-bold fs-6" to={`${url}`}>
									Dashboard
								</Link>
							</li>
							<li className="items">
								<Link className="text-decoration-none fw-bold fs-6" to='/home'>
									Home
								</Link>
							</li>
							{ admin &&
								<li className="items">
									<Link className="text-decoration-none fw-bold fs-6" to={`${url}/manageAllOrder`}>
										Manage All Orders
									</Link>
								</li>
							}
							{ admin &&
								<li className="items">
									<Link className="text-decoration-none fw-bold fs-6" to={`${url}/addProduct`}>
										Add a Product
									</Link>
								</li>
							}
							{ admin &&
								<li className="items">
									<Link className="text-decoration-none fw-bold fs-6" to={`${url}/manageProduct`}>
										Manage All Products
									</Link>
								</li>
							}
							{ admin &&
								<li className="items">
									<Link className="text-decoration-none fw-bold fs-6" to={`${url}/makeAdmin`}>
										Make Admin
									</Link>
								</li>
							}
							{ !admin &&
								<li className="items">
									<Link className="text-decoration-none fw-bold fs-6" to={`${url}/myOrder`}>
										My Orders
									</Link>
								</li>
							}							
							{ !admin &&
								<li className="items">
									<Link className="text-decoration-none fw-bold fs-6" to={`${url}/addReview`}>
										Add a Review
									</Link>
							   </li>
							}
							{ !admin &&
								<li className="items">
									<Link className="text-decoration-none fw-bold fs-6" to={`${url}/pay`}>
										Pay
									</Link>
								</li>
							}
							  						  
        					
							{ user?.email &&
								<Button className="text-white fs-6  border-light  btn btn-sm btn-warning" style={{backgroundColor:'#CC2052'}} onClick={logout}>Logout </Button>

							}
						</ul>
					</Drawer.ToC>
				</Drawer.Overflow>
			</Collapse>
		</Drawer>
    );
};

export default ApplicationDrawer;