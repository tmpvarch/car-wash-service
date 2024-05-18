import { List, Button } from "antd";
import { Service } from "../../../components/types";
import { FC } from "react";
import { NoData } from "../../ux/NoData";
import { useNavigate } from "react-router-dom";
import { Guid } from "guid-typescript";

export const ServicesInfo : FC<{ data: Service[] | undefined}> = ({data}) => {

    const navigate = useNavigate()

    const handleServiceEdit = (carwashId: string | Guid | undefined) => {
        // const query = useServiceQuery(id?.toString() || '')
        // const { data: services} = query
        navigate(`/carwashes/carwash-about/:${carwashId}/service-adding`)
    }

    const handleServiceDelete = (evt : any) => {
    }
    return (
        <div>
        {data?.length? 
        <List 
            dataSource={data}
            renderItem={(item) => (
                <List.Item
                    key={item.name}>
                    <List.Item.Meta title={item.name} />
                    <List.Item.Meta title={item.price + " р."}/>
                    <List.Item.Meta title={item.duration + " мин."}/>
                    <List.Item.Meta
                        title={
                            <Button onClick={ () => handleServiceEdit(item.carwashId)}>Редактировать</Button>
                    }/>
                    <List.Item.Meta 
                        title={
                        <Button onClick={handleServiceDelete}>Удалить</Button>
                    }/>
                </List.Item>
            )}
            /> : <p className="no-services">
                <NoData message="Услуг пока нет!" />
                </p>
        }
        </div>
    );
}