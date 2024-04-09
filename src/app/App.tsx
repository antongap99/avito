import './styles/index.scss';
import cn from 'classnames';
import { AppRouter } from 'app/providers/router';
import { Layout, Flex } from 'antd';

const { Header, Footer, Sider, Content } = Layout;
const App = () => {
	console.log(`${process.env.BASE_URL}`);
	return (
		<div className={cn('app')}>
			<Layout className='app-layout'>
				<Sider width="25%" className='ant-layout-sidbar'>
					Sider
				</Sider>
				<Layout>
					<Header className='ant-layout-header'>Авито. Тестовое задание</Header>
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
