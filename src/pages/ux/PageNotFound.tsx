import { AutoCenter } from "antd-mobile"
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import '../../App.scss'

export default function PageNotFound() {
    const navigate = useNavigate();
    const handleContinue = () => {
        localStorage.getItem('role') === 'owner' ? navigate('/carwashes') : navigate('/home');
    }


    return (
        <div className="ux">
            <AutoCenter>
                <div className="ux-title">
                <h1>Ошибка 404</h1>
                <h2>Страница не найдена</h2>
                </div>
            </AutoCenter>
            <Button className="carwash-info-delete-button" onClick={handleContinue}>Вернуться на главную</Button>
        </div>
    )
}