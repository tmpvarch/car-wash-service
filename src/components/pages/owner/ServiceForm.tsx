import React, {FC} from "react"
import { HeaderOwner } from "../headers/HeaderOwner"
import { AutoCenter, Dialog } from "antd-mobile"
import { Button, Form} from "antd"
import { useNavigate } from "react-router-dom"
import { Carwash, Service } from "../../types"
import { ServicesList } from "./ServicesList"
import './styles/ServiceAdding.scss'
import { useServiceAddMutation, useServicesQuery } from "../../api/serviceApi"
import { QueryStatus } from "../page_not_found/QueryStatus"
import { useCarwashAddMutation } from "../../api/carwashApi"
import { useFormData, defaultFormData } from "./FormContext"

export const ServiceAdding:FC = () => {
    const navigate = useNavigate()

    const { formData: carwashData, setFormData } = useFormData();
    const {mutateAsync: save} = useCarwashAddMutation()
    
    const query = useServicesQuery()
    const { data: services} = query


    const handleFormSubmit = async (data: Service) => {
        console.log(carwashData)
        await save(carwashData);

        navigate('/owner');
        Dialog.alert({content: 'Автомойка успешно сохранена', confirmText: 'Хорошо'});
        setFormData(() => (defaultFormData));

    }

    const handleFormCancel = () => {
        navigate('/carwash-adding');
    }

    const handleServiceAdd = () => {
        
    }

    
    return (
        <div>
        <div><HeaderOwner></HeaderOwner></div>
        <div>
            <AutoCenter>
            <h1 style={{padding: '30px 50px', fontSize: '24px'}}>Услуги</h1>
                <Form onFinish={handleFormSubmit}>
                    <div>
                    <ServicesList data={services}/>
                    <QueryStatus query={query}></QueryStatus>
                    </div>
                    <Form.Item style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <Button onClick={handleServiceAdd}>Добавить услугу</Button>
                    </Form.Item>
                    <Form.Item style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <Button className="form-submit-button" htmlType="submit">Сохранить</Button>
                    </Form.Item>
                    <Form.Item style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <Button className="form-cancel-button" onClick={handleFormCancel}>Назад</Button>
                    </Form.Item>
            </Form>
            </AutoCenter>
        </div>
    </div>
    )
    
}