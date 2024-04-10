import cn from "classnames";
import style from './Header.module.scss'
import {Button} from "shared/ui/Button/Button";
import { MenuOutlined} from "@ant-design/icons";
import {Layout} from 'antd';
const { Header } = Layout;
interface  HeaderProps {
    className?: string;
	mobile: boolean,
	toggleCollapsed: (bool: boolean) => void,
	collapsed: boolean
}

export const HeaderLayout = (props: HeaderProps) =>{
	const { className, mobile, toggleCollapsed, collapsed} = props
    return  (
	    <Header className={style.antLayoutHeader}>
		    <div className={style.HeaderContent}>
			    {mobile && (
				    <Button type="button" onClick={() => toggleCollapsed(!collapsed)}>
					    <MenuOutlined />
				    </Button>
			    )}
			    <h1 className={style.HeaderTitle}>Авито. Тестовое задание</h1>
		    </div>
	    </Header>
    )
}

