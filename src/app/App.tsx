import './styles/index.scss';
import cn from 'classnames';
import { AppRouter } from 'app/providers/router';
import {Layout} from 'antd';
import {useEffect, useState} from "react";
import {Header} from "widgets/Header";
import {SideBarContent} from "widgets/SideBarContent";

const { Sider, Content } = Layout;
const App = () => {
	const [collapsed, setCollapsed] = useState(true);
	const [mobile, setMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setMobile(window.innerWidth < 768);
		};

		handleResize();

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const toggleCollapsed = () => {
		setCollapsed(!collapsed);
	};

	return (
		<div className={cn('app')}>
			<Layout className='app-layout'>
				<Sider
					collapsible
					collapsed={collapsed}
					onCollapse={toggleCollapsed}
					width={mobile ? '100vw': 400}
					className={cn(
						'ant-layout-sidbar',
						{
							'sidbar-mobile': mobile,
							'sidbar-mobile-collapsed': mobile && collapsed,
						}
					)}

				>
					{!collapsed &&<SideBarContent/>}
				</Sider>
				<Layout>
					<Header
						mobile={mobile}
						toggleCollapsed={toggleCollapsed}
						collapsed={collapsed}
					/>
					<Content className='ant-layout-content'>
						<div className="content-page">
							<AppRouter/>
						</div>
					</Content>
				</Layout>
			</Layout>
		</div>
	);
};

export default App;
